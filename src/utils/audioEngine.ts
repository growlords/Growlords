// Web Audio API procedural futuristic alien / sci-fi sound engine for Growlords
// 100% Procedural synthesis using standard Web Audio API nodes.
// Zero external files, zero single-use buffer issues, zero autoplay violations.

class ProceduralAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isEnabled: boolean = false;
  private isAtmosphereRunning: boolean = false;

  // Atmosphere Nodes
  private ambientGain: GainNode | null = null;
  private subOsc1: OscillatorNode | null = null;
  private subOsc2: OscillatorNode | null = null;
  private harmonicOsc: OscillatorNode | null = null;
  private resonanceOsc: OscillatorNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private lfoOsc: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;

  // Scroll FX State
  private lastFxTime: number = 0;
  private fxCooldownMs: number = 160;
  private lastFxFrame: number = -1;
  private sweepIndex: number = 0;

  // Milestone State
  private lastMilestoneFrame: number = -1;

  // Ensure AudioContext is created and running
  private async ensureContext(): Promise<AudioContext | null> {
    try {
      if (!this.ctx) {
        const AudioCtxClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtxClass) {
          console.warn('[Growlords Audio] Web Audio API is not supported in this browser.');
          return null;
        }
        this.ctx = new AudioCtxClass();

        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }

      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      return this.ctx;
    } catch (err) {
      console.error('[Growlords Audio] Failed to initialize AudioContext:', err);
      return null;
    }
  }

  // Start continuous alien atmosphere
  private startAtmosphere() {
    if (!this.ctx || !this.masterGain || this.isAtmosphereRunning) return;

    try {
      const now = this.ctx.currentTime;

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.22, now);
      this.ambientGain.connect(this.masterGain);

      // 1. Dual detuned sub-bass sine oscillators (48Hz and 48.6Hz binaural beat)
      this.subOsc1 = this.ctx.createOscillator();
      this.subOsc2 = this.ctx.createOscillator();
      this.subOsc1.type = 'sine';
      this.subOsc2.type = 'sine';
      this.subOsc1.frequency.setValueAtTime(48.0, now);
      this.subOsc2.frequency.setValueAtTime(48.6, now);

      const subGain = this.ctx.createGain();
      subGain.gain.setValueAtTime(0.35, now);
      this.subOsc1.connect(subGain);
      this.subOsc2.connect(subGain);
      subGain.connect(this.ambientGain);

      // 2. Harmonic Sci-Fi Texture (Triangle wave through slow sweeping resonant filter)
      this.harmonicOsc = this.ctx.createOscillator();
      this.harmonicOsc.type = 'triangle';
      this.harmonicOsc.frequency.setValueAtTime(144.0, now); // 3rd harmonic

      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(180, now);
      this.filterNode.Q.setValueAtTime(3.5, now);

      // Slow organic LFO modulating the filter (14 second cycle)
      this.lfoOsc = this.ctx.createOscillator();
      this.lfoOsc.type = 'sine';
      this.lfoOsc.frequency.setValueAtTime(0.07, now);

      this.lfoGain = this.ctx.createGain();
      this.lfoGain.gain.setValueAtTime(75, now); // Sweep ±75Hz

      this.lfoOsc.connect(this.lfoGain);
      this.lfoGain.connect(this.filterNode.frequency);

      const harmonicGain = this.ctx.createGain();
      harmonicGain.gain.setValueAtTime(0.18, now);
      this.harmonicOsc.connect(this.filterNode);
      this.filterNode.connect(harmonicGain);
      harmonicGain.connect(this.ambientGain);

      // 3. Ethereal High Sci-Fi Resonance (Pure sine at 288Hz with subtle volume)
      this.resonanceOsc = this.ctx.createOscillator();
      this.resonanceOsc.type = 'sine';
      this.resonanceOsc.frequency.setValueAtTime(288.0, now);

      const resGain = this.ctx.createGain();
      resGain.gain.setValueAtTime(0.025, now);
      this.resonanceOsc.connect(resGain);
      resGain.connect(this.ambientGain);

      // Start all continuous oscillators
      this.subOsc1.start(now);
      this.subOsc2.start(now);
      this.harmonicOsc.start(now);
      this.resonanceOsc.start(now);
      this.lfoOsc.start(now);

      this.isAtmosphereRunning = true;
    } catch (e) {
      console.error('[Growlords Audio] Error creating atmosphere:', e);
    }
  }

  // Stop / dismantle atmosphere oscillators
  private stopAtmosphere() {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      if (this.subOsc1) { try { this.subOsc1.stop(now); } catch {} this.subOsc1 = null; }
      if (this.subOsc2) { try { this.subOsc2.stop(now); } catch {} this.subOsc2 = null; }
      if (this.harmonicOsc) { try { this.harmonicOsc.stop(now); } catch {} this.harmonicOsc = null; }
      if (this.resonanceOsc) { try { this.resonanceOsc.stop(now); } catch {} this.resonanceOsc = null; }
      if (this.lfoOsc) { try { this.lfoOsc.stop(now); } catch {} this.lfoOsc = null; }
      this.isAtmosphereRunning = false;
    } catch (e) {
      console.warn('[Growlords Audio] Error stopping atmosphere:', e);
    }
  }

  // Public method called when user clicks AUDIO ON
  public async enable(): Promise<boolean> {
    try {
      this.isEnabled = true;
      if (typeof window !== 'undefined') {
        try { localStorage.setItem('growlords_audio_muted', 'false'); } catch {}
      }

      const ctx = await this.ensureContext();
      if (!ctx || !this.masterGain) return false;

      // Start atmosphere if not running
      if (!this.isAtmosphereRunning) {
        this.startAtmosphere();
      }

      const now = ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0.32, now + 0.12);

      return true;
    } catch (err) {
      console.error('[Growlords Audio] Failed to enable audio:', err);
      return false;
    }
  }

  // Public method called when user clicks AUDIO OFF
  public async disable(): Promise<void> {
    try {
      this.isEnabled = false;
      if (typeof window !== 'undefined') {
        try { localStorage.setItem('growlords_audio_muted', 'true'); } catch {}
      }

      if (this.ctx && this.masterGain) {
        const now = this.ctx.currentTime;
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.06);

        setTimeout(() => {
          if (!this.isEnabled && this.ctx && this.ctx.state === 'running') {
            this.ctx.suspend().catch(() => {});
          }
        }, 80);
      }
    } catch (err) {
      console.error('[Growlords Audio] Failed to disable audio:', err);
    }
  }

  public getIsEnabled(): boolean {
    return this.isEnabled;
  }

  // Triggered strictly during active frame motion
  public onFrameMotion(currentFrame: number, frameDelta: number) {
    if (!this.isEnabled || !this.ctx || !this.masterGain || this.ctx.state !== 'running') {
      return;
    }

    const now = performance.now();

    // Check Major Cinematic Milestone Transitions (frames 38, 96, 156, 204, 239)
    const milestones = [38, 96, 156, 204, 239];
    const hitMilestone = milestones.find((m) => Math.abs(currentFrame - m) <= 1);

    if (hitMilestone !== undefined && hitMilestone !== this.lastMilestoneFrame) {
      this.lastMilestoneFrame = hitMilestone;
      this.playMilestoneTransition();
      return;
    }

    // Debounced Scroll Sound FX (Require at least 14 frames delta & 160ms cooldown)
    const frameDistance = Math.abs(currentFrame - this.lastFxFrame);
    if (frameDistance < 14 || now - this.lastFxTime < this.fxCooldownMs) {
      return;
    }

    this.lastFxTime = now;
    this.lastFxFrame = currentFrame;

    this.playOrganicSciFiSweep();
  }

  // Soft Alien Frequency Sweep on active scroll
  private playOrganicSciFiSweep() {
    if (!this.ctx || !this.masterGain || !this.isEnabled) return;

    try {
      const now = this.ctx.currentTime;
      this.sweepIndex = (this.sweepIndex + 1) % 4;

      const basePitches = [220, 261.6, 293.6, 329.6]; // A3, C4, D4, E4
      const pitch = basePitches[this.sweepIndex];

      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch * 1.4, now);
      osc.frequency.exponentialRampToValueAtTime(pitch * 0.75, now + 0.12);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(pitch * 1.6, now);
      filter.frequency.linearRampToValueAtTime(pitch * 0.85, now + 0.12);
      filter.Q.setValueAtTime(4.5, now);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch {}
  }

  // Cinematic Milestone Resonant Swell
  private playMilestoneTransition() {
    if (!this.ctx || !this.masterGain || !this.isEnabled) return;

    try {
      const now = this.ctx.currentTime;

      // Sub drop
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(90, now);
      sub.frequency.exponentialRampToValueAtTime(36, now + 0.35);

      subGain.gain.setValueAtTime(0.2, now);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);

      sub.connect(subGain);
      subGain.connect(this.masterGain);

      // Sci-Fi Harmonic Swell
      const chime = this.ctx.createOscillator();
      const chimeFilter = this.ctx.createBiquadFilter();
      const chimeGain = this.ctx.createGain();

      chime.type = 'triangle';
      chime.frequency.setValueAtTime(440, now);
      chime.frequency.exponentialRampToValueAtTime(880, now + 0.28);

      chimeFilter.type = 'lowpass';
      chimeFilter.frequency.setValueAtTime(600, now);
      chimeFilter.frequency.linearRampToValueAtTime(1400, now + 0.28);
      chimeFilter.Q.setValueAtTime(4.0, now);

      chimeGain.gain.setValueAtTime(0.12, now);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);

      chime.connect(chimeFilter);
      chimeFilter.connect(chimeGain);
      chimeGain.connect(this.masterGain);

      sub.start(now);
      chime.start(now);
      sub.stop(now + 0.4);
      chime.stop(now + 0.4);
    } catch {}
  }
}

export const audioEngine = new ProceduralAudioEngine();
