/* Audio System - Web Audio API */
/* Generates BGM and sound effects */

class AudioManager {
    constructor() {
        this.audioContext = null;
        this.isMuted = false;
        this.bgmPlaying = false;
        this.bgmTimer = null;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
            console.log('Audio initialized');
        } catch(e) {
            console.warn('Audio init failed:', e);
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopBGM();
        } else {
            this.startBGM();
        }
        return this.isMuted;
    }

    startBGM() {
        if (!this.initialized || this.isMuted || this.bgmPlaying) return;
        this.bgmPlaying = true;
        this._playBGMLoop();
    }

    _playBGMLoop() {
        if (!this.bgmPlaying || this.isMuted || !this.audioContext) return;

        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const pentatonic = [523.25, 587.33, 659.25, 783.99, 880.00];
        const melody = [0, 2, 4, 3, 2, 0, 1, 2, 3, 4, 2, 0, 2, 0, -1, -1];

        melody.forEach((note, i) => {
            if (note < 0) return;
            const freq = pentatonic[note] || 523.25;
            const startTime = now + i * 0.5;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();

            osc.type = 'sine';
            osc.frequency.value = freq;
            filter.type = 'lowpass';
            filter.frequency.value = 2000;

            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.08, startTime + 0.05);
            gain.gain.linearRampToValueAtTime(0.05, startTime + 0.3);
            gain.gain.linearRampToValueAtTime(0, startTime + 0.45);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.45);
        });

        this.bgmTimer = setTimeout(() => {
            if (this.bgmPlaying && !this.isMuted) {
                this._playBGMLoop();
            }
        }, melody.length * 500 + 1000);
    }

    stopBGM() {
        this.bgmPlaying = false;
        if (this.bgmTimer) {
            clearTimeout(this.bgmTimer);
            this.bgmTimer = null;
        }
    }

    playClickSound() {
        if (!this.initialized || this.isMuted) return;
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(1000, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
    }

    playFlipSound() {
        if (!this.initialized || this.isMuted) return;
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const bufferSize = ctx.sampleRate * 0.1;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.3;
        }
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        source.connect(gain);
        gain.connect(ctx.destination);
        source.start(now);
    }

    playEvidenceSound() {
        if (!this.initialized || this.isMuted) return;
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        [880, 1108.73, 1318.51].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = freq;
            osc.type = 'sine';
            const t = now + i * 0.08;
            gain.gain.setValueAtTime(0.12, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
            osc.start(t);
            osc.stop(t + 0.2);
        });
    }

    playGavelSound() {
        if (!this.initialized || this.isMuted) return;
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        [0, 0.15].forEach(delay => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.setValueAtTime(150, now + delay);
            osc.frequency.exponentialRampToValueAtTime(60, now + delay + 0.08);
            gain.gain.setValueAtTime(0.4, now + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.1);
            osc.start(now + delay);
            osc.stop(now + delay + 0.1);
        });
    }

    playStampSound() {
        if (!this.initialized || this.isMuted) return;
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(250, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
    }

    playCompleteSound() {
        if (!this.initialized || this.isMuted) return;
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = freq;
            osc.type = 'sine';
            const t = now + i * 0.15;
            gain.gain.setValueAtTime(0.15, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
            osc.start(t);
            osc.stop(t + 0.5);
        });
    }

    playBadgeSound() {
        if (!this.initialized || this.isMuted) return;
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = freq;
            osc.type = 'sine';
            const t = now + i * 0.1;
            gain.gain.setValueAtTime(0.15, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
            osc.start(t);
            osc.stop(t + 0.3);
        });
    }
}

window.audioManager = new AudioManager();
