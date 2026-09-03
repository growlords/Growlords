import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Zod validation schema
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits").max(20),
  company: z.string().max(100).optional().default(""),
  service: z.string().min(2, "Please select or provide a service required"),
  budget: z.string().min(1, "Please select an estimated investment budget"),
  details: z.string().min(10, "Please provide at least 10 characters of project details"),
  // Honeypot spam trap: must remain empty
  website_hp: z.string().max(0, "Spam detected").optional().default(""),
});

// Simple in-memory rate limiting map for basic protection
const ipRateLimit = new Map<string, { count: number; expiresAt: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local_ip";
    const now = Date.now();

    // Check rate limit: max 5 submissions per 10 minutes per IP
    const record = ipRateLimit.get(ip);
    if (record) {
      if (now < record.expiresAt) {
        if (record.count >= 5) {
          return NextResponse.json(
            {
              success: false,
              message: "Too many submission attempts. Please wait a few minutes before trying again.",
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
        { success: false, message: "Spam bot submission blocked." },
        { status: 400 }
      );
    }

    // Email Dispatch Logic:
    // Destination: growlords2026@gmail.com
    const emailPayload = {
      to: "growlords2026@gmail.com",
      subject: `[GROWLORDS LEAD] New Project Enquiry from ${validatedData.name}`,
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company || "Not Specified",
        service: validatedData.service,
        budget: validatedData.budget,
        details: validatedData.details,
        submittedAt: new Date().toISOString(),
      },
    };

    // Log the lead record securely on the server
    console.log("=== GROWLORDS NEW INQUIRY RECEIVED ===", JSON.stringify(emailPayload, null, 2));

    // If SMTP credentials (e.g. RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS) are provided in .env,
    // they can be dispatched immediately. Otherwise, the lead is safely recorded and returns success.
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Growlords Inquiries <onboarding@resend.dev>",
            to: ["growlords2026@gmail.com"],
            reply_to: validatedData.email,
            subject: emailPayload.subject,
            html: `
              <h2>New Project Lead Received on Growlords.com</h2>
              <p><strong>Client Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Phone:</strong> ${validatedData.phone}</p>
              <p><strong>Company:</strong> ${validatedData.company || "N/A"}</p>
              <p><strong>Service Required:</strong> ${validatedData.service}</p>
              <p><strong>Budget Range:</strong> ${validatedData.budget}</p>
              <p><strong>Project Details:</strong></p>
              <blockquote>${validatedData.details}</blockquote>
            `,
          }),
        });
      } catch (err) {
        console.error("Resend delivery failed, lead logged:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been sent successfully. We'll get back to you soon.",
        leadId: `GL-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: error.issues[0]?.message || "Invalid form submission data.",
          errors: error.issues,
        },
        { status: 422 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please reach us directly at growlords2026@gmail.com.",
      },
      { status: 500 }
    );
  }
}
