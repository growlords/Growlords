import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Server-side validation schema
const ContactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address"),
  phone: z
    .string()
    .trim()
    .min(8, "Phone number must be at least 8 digits")
    .max(20, "Phone number too long"),
  company: z.string().trim().max(100).optional().default(""),
  service: z.string().trim().min(2, "Please select a service required"),
  budget: z.string().trim().min(1, "Please select an estimated budget"),
  details: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters describing your project"),
  // Honeypot spam trap: must remain empty
  website_hp: z.string().max(0, "Spam detected").optional().default(""),
});

// In-memory rate limiting: max 5 submissions per 10 minutes per IP
const ipRateLimit = new Map<string, { count: number; expiresAt: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local_ip";
    const now = Date.now();

    const record = ipRateLimit.get(ip);
    if (record) {
      if (now < record.expiresAt) {
        if (record.count >= 5) {
          return NextResponse.json(
            {
              success: false,
              message:
                "Something went wrong while sending your enquiry. Please try again or contact us on WhatsApp.",
            },
            { status: 429 }
          );
        }
        record.count += 1;
      } else {
        ipRateLimit.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
      }
    } else {
      ipRateLimit.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
    }

    // Parse & validate body
    const body = await req.json();
    const validatedData = ContactSchema.parse(body);

    // Spam honeypot detection
    if (validatedData.website_hp && validatedData.website_hp.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Something went wrong while sending your enquiry. Please try again or contact us on WhatsApp.",
        },
        { status: 400 }
      );
    }

    const destinationEmail = process.env.CONTACT_EMAIL || "growlords2026@gmail.com";
    const subject = `New Growlords Website Enquiry — ${validatedData.name}`;
    const submittedTimestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const plainTextBody = `GROWLORDS
NEW PROJECT ENQUIRY

Name:
${validatedData.name}

Email:
${validatedData.email}

Phone / WhatsApp:
${validatedData.phone}

Company:
${validatedData.company || "Not Specified"}

Service Required:
${validatedData.service}

Budget:
${validatedData.budget}

Project Details:
${validatedData.details}

Submitted:
${submittedTimestamp}
`;

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #FAFBF9; border: 1px solid rgba(0,0,0,0.08); border-radius: 16px;">
        <div style="border-bottom: 2px solid #16A34A; padding-bottom: 12px; margin-bottom: 20px;">
          <h1 style="color: #111111; font-size: 22px; font-weight: 800; margin: 0; text-transform: uppercase;">GROWLORDS</h1>
          <p style="color: #16A34A; font-size: 13px; font-weight: 700; margin: 4px 0 0 0; letter-spacing: 1px;">NEW PROJECT ENQUIRY</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #5F6368; width: 150px; font-size: 14px;">Name:</td>
            <td style="padding: 8px 0; color: #111111; font-size: 15px; font-weight: 600;">${validatedData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #5F6368; font-size: 14px;">Email:</td>
            <td style="padding: 8px 0; color: #111111; font-size: 15px;"><a href="mailto:${validatedData.email}" style="color: #16A34A; text-decoration: none; font-weight: 600;">${validatedData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #5F6368; font-size: 14px;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #111111; font-size: 15px; font-weight: 600;">${validatedData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #5F6368; font-size: 14px;">Company:</td>
            <td style="padding: 8px 0; color: #111111; font-size: 15px;">${validatedData.company || "Not Specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #5F6368; font-size: 14px;">Service Required:</td>
            <td style="padding: 8px 0; color: #16A34A; font-size: 15px; font-weight: 700;">${validatedData.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #5F6368; font-size: 14px;">Budget:</td>
            <td style="padding: 8px 0; color: #111111; font-size: 15px; font-weight: 600;">${validatedData.budget}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #5F6368; font-size: 14px;">Submitted:</td>
            <td style="padding: 8px 0; color: #5F6368; font-size: 13px;">${submittedTimestamp}</td>
          </tr>
        </table>

        <div style="background-color: #FFFFFF; border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; padding: 16px; margin-bottom: 24px;">
          <h3 style="color: #111111; font-size: 13px; font-weight: 700; text-transform: uppercase; margin: 0 0 8px 0; letter-spacing: 0.5px;">Project Details:</h3>
          <p style="color: #333333; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${validatedData.details}</p>
        </div>

        <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(0,0,0,0.06);">
          <a href="mailto:${validatedData.email}?subject=Re: Your Growlords Project Enquiry" style="display: inline-block; background-color: #16A34A; color: #FFFFFF; font-weight: 700; font-size: 14px; text-decoration: none; padding: 12px 28px; border-radius: 9999px;">
            REPLY TO CLIENT
          </a>
        </div>
      </div>
    `;

    // Resend Email Delivery
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error(
        `[Growlords Email Alert] RESEND_API_KEY is not set in environment variables.
Please configure RESEND_API_KEY in .env.local (for local development) or in your Vercel Project Settings > Environment Variables (for production).
Lead details recorded on server:
${plainTextBody}
Destination target: ${destinationEmail}`
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Something went wrong while sending your enquiry. Please try again or contact us on WhatsApp.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(resendApiKey);
    const fromAddress =
      process.env.EMAIL_FROM || "Growlords Website <onboarding@resend.dev>";

    let sendResult = await resend.emails.send({
      from: fromAddress,
      to: [destinationEmail],
      replyTo: validatedData.email,
      subject,
      text: plainTextBody,
      html: htmlBody,
    });

    // If in Resend testing mode, Resend restricts to the account owner email (e.g. growlords2026@gmail.com).
    // If restricted, automatically retry delivering to the account owner email.
    if (sendResult.error && sendResult.error.statusCode === 403 && sendResult.error.message.includes("your own email address")) {
      const match = sendResult.error.message.match(/\(([^)]+)\)/);
      const allowedOwnerEmail = match ? match[1] : "growlords2026@gmail.com";
      console.warn(`[Growlords Email Notice] Resend test mode active. Retrying delivery to registered account owner: ${allowedOwnerEmail}`);
      sendResult = await resend.emails.send({
        from: fromAddress,
        to: [allowedOwnerEmail],
        replyTo: validatedData.email,
        subject,
        text: plainTextBody,
        html: htmlBody,
      });
    }

    const { data, error } = sendResult;

    if (error || !data?.id) {
      console.error(
        "[Growlords Email Error] Resend rejected the email delivery request:",
        error
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "Something went wrong while sending your enquiry. Please try again or contact us on WhatsApp.",
        },
        { status: 500 }
      );
    }

    console.log(
      `[Growlords Email Success] Enquiry successfully delivered via Resend to ${destinationEmail}. ID: ${data.id}`
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been sent successfully. We'll get back to you soon.",
        leadId: data.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message:
            error.issues[0]?.message ||
            "Something went wrong while sending your enquiry. Please try again or contact us on WhatsApp.",
          errors: error.issues,
        },
        { status: 422 }
      );
    }

    console.error("[Growlords Contact API Internal Error]", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your enquiry. Please try again or contact us on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
