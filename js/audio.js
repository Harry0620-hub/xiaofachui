/* ========================================================
   小法槌 · 音频系统
   使用 Web Audio API 生成所有配乐和音效
   零外部依赖，纯前端实现
   ======================================================== */

class AudioManager {
    constructor() {
        this.audioContext = null;
        this.isMuted = false;
        this.bgmPlaying = false;
        this.bgmNodes = [];
        this.masterGain = null;
        this.bgmGain = null;
        this.sfxGain = null;
        
        // 音频上下文需要用户交互后才能启动
        this.initialized = false;
    }
    
    // 初始化音频上下文（需要在用户交互后调用）
    init() {
        if (this.initialized) return;

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // 关键：AudioContext 创建后处于 suspended 状态，必须 resume() 才能出声
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume().then(() => {
                    console.log('🎵 AudioContext 已恢复（resume promise）');
                }).catch(e => {
                    console.warn('AudioContext resume 失败:', e);
                });
            }

            this.masterGain = this.audioContext.createGain();
            this.masterGain.gain.value = 0.5;
            this.masterGain.connect(this.audioContext.destination);

            this.bgmGain = this.audioContext.createGain();
            this.bgmGain.gain.value = 0.3;
            this.bgmGain.connect(this.masterGain);

            this.sfxGain = this.audioContext.createGain();
            this.sfxGain.gain.value = 0.6;
            this.sfxGain.connect(this.masterGain);

            this.initialized = true;
            console.log('🎵 音频系统初始化成功，状态：', this.audioContext.state);
        } catch (e) {
            console.error('音频初始化失败:', e);
        }
    }
    
    // ==================== 背景音乐 ====================
    
    // 播放背景音乐（庄严肃穆的法治主题）
    startBGM() {
        if (!this.initialized || this.bgmPlaying) return;

        // 确保 AudioContext 不在 suspended 状态（直接调用，浏览器会立即生效）
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }

        this.bgmPlaying = true;
        this.playBGMLoop();
    }
    
    playBGMLoop() {
        if (!this.bgmPlaying || !this.initialized) return;
        
        // 中国风旋律：使用五声音阶
        // 宫商角徵羽：C D E G A
        const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
        
        // 主题旋律（简化的古筝风格）
        const melody = [
            { note: 0, duration: 0.5 },  // C4
            { note: 2, duration: 0.5 },  // E4
            { note: 4, duration: 1.0 },  // A4
            { note: 3, duration: 0.5 },  // G4
            { note: 2, duration: 0.5 },  // E4
            { note: 0, duration: 1.0 },  // C4
            { note: 4, duration: 0.5 },  // A4
            { note: 3, duration: 0.5 },  // G4
            { note: 2, duration: 1.0 },  // E4
            { note: 0, duration: 0.5 },  // C4
            { note: 2, duration: 0.5 },  // E4
            { note: 4, duration: 1.5 },  // A4
        ];
        
        let time = this.audioContext.currentTime;
        
        melody.forEach((noteData, index) => {
            const freq = pentatonic[noteData.note];
            const startTime = time;
            const duration = noteData.duration;
            
            // 主旋律（古筝音色）
            this.playGuString(freq, startTime, duration, 0.15);
            
            // 低音伴奏（每2拍一次）
            if (index % 2 === 0) {
                this.playGuString(freq * 0.5, startTime, duration * 2, 0.08);
            }
            
            time += duration;
        });
        
        // 循环播放
        const totalDuration = melody.reduce((sum, note) => sum + note.duration, 0);
        this.bgmTimeout = setTimeout(() => {
            if (this.bgmPlaying) {
                this.playBGMLoop();
            }
        }, totalDuration * 1000);
    }
    
    // 播放古筝风格音符
    playGuString(frequency, startTime, duration, volume = 0.1) {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        // 使用正弦波模拟古筝
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, startTime);
        
        // 古筝音效：快速衰减 + 轻微泛音
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.bgmGain);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
        
        // 添加泛音
        const overtone = this.audioContext.createOscillator();
        const overtoneGain = this.audioContext.createGain();
        overtone.type = 'sine';
        overtone.frequency.setValueAtTime(frequency * 2, startTime);
        overtoneGain.gain.setValueAtTime(0, startTime);
        overtoneGain.gain.linearRampToValueAtTime(volume * 0.3, startTime + 0.02);
        overtoneGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration * 0.5);
        overtone.connect(overtoneGain);
        overtoneGain.connect(this.bgmGain);
        overtone.start(startTime);
        overtone.stop(startTime + duration);
    }
    
    // 停止背景音乐
    stopBGM() {
        this.bgmPlaying = false;
        if (this.bgmTimeout) {
            clearTimeout(this.bgmTimeout);
            this.bgmTimeout = null;
        }
    }
    
    // ==================== 音效 ====================
    
    // 翻卷宗音效
    playFlipSound() {
        if (!this.initialized || this.isMuted) return;
        
        const ctx = this.audioContext;
        const startTime = ctx.currentTime;
        
        // 纸张翻动：快速的白噪音 + 滤波
        const bufferSize = ctx.sampleRate * 0.1;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.3 * Math.exp(-i / (bufferSize * 0.3));
        }
        
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 3000;
        filter.Q.value = 0.5;
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.4, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.1);
        
        source.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);
        
        source.start(startTime);
        source.stop(startTime + 0.1);
    }
    
    // 点击证据音效
    playEvidenceSound() {
        if (!this.initialized || this.isMuted) return;
        
        const ctx = this.audioContext;
        const startTime = ctx.currentTime;
        
        // 清脆的提示音（类似水晶音）
        const freq = 880; // A5
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, startTime + 0.1);
        
        gain.gain.setValueAtTime(0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
        
        osc.connect(gain);
        gain.connect(this.sfxGain);
        
        osc.start(startTime);
        osc.stop(startTime + 0.3);
        
        // 添加泛音
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 2, startTime);
        gain2.gain.setValueAtTime(0.15, startTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2);
        osc2.connect(gain2);
        gain2.connect(this.sfxGain);
        osc2.start(startTime);
        osc2.stop(startTime + 0.2);
    }
    
    // 法槌敲击音效
    playGavelSound() {
        if (!this.initialized || this.isMuted) return;
        
        const ctx = this.audioContext;
        const startTime = ctx.currentTime;
        
        // 沉重的敲击声
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, startTime);
        osc.frequency.exponentialRampToValueAtTime(50, startTime + 0.2);
        
        gain.gain.setValueAtTime(0.5, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
        
        osc.connect(gain);
        gain.connect(this.sfxGain);
        
        osc.start(startTime);
        osc.stop(startTime + 0.3);
        
        // 添加冲击感（噪音）
        const bufferSize = ctx.sampleRate * 0.05;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.1));
        }
        
        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = buffer;
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.3, startTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.05);
        noiseSource.connect(noiseGain);
        noiseGain.connect(this.sfxGain);
        noiseSource.start(startTime);
        noiseSource.stop(startTime + 0.05);
    }
    
    // 盖章音效
    playStampSound() {
        if (!this.initialized || this.isMuted) return;
        
        const ctx = this.audioContext;
        const startTime = ctx.currentTime;
        
        // 印章盖下的声音：沉闷的敲击 + 纸张震动
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, startTime);
        osc.frequency.exponentialRampToValueAtTime(80, startTime + 0.1);
        
        gain.gain.setValueAtTime(0.4, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);
        
        osc.connect(gain);
        gain.connect(this.sfxGain);
        
        osc.start(startTime);
        osc.stop(startTime + 0.15);
        
        // 延迟的回响（印章离开纸张）
        setTimeout(() => {
            const ctx2 = this.audioContext;
            const startTime2 = ctx2.currentTime;
            const osc2 = ctx2.createOscillator();
            const gain2 = ctx2.createGain();
            
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(400, startTime2);
            osc2.frequency.exponentialRampToValueAtTime(200, startTime2 + 0.08);
            
            gain2.gain.setValueAtTime(0.2, startTime2);
            gain2.gain.exponentialRampToValueAtTime(0.001, startTime2 + 0.08);
            
            osc2.connect(gain2);
            gain2.connect(this.sfxGain);
            
            osc2.start(startTime2);
            osc2.stop(startTime2 + 0.08);
        }, 100);
    }
    
    // 按钮点击音效
    playClickSound() {
        if (!this.initialized || this.isMuted) return;
        
        const ctx = this.audioContext;
        const startTime = ctx.currentTime;
        
        // 轻微的确认音
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, startTime);
        
        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.08);
        
        osc.connect(gain);
        gain.connect(this.sfxGain);
        
        osc.start(startTime);
        osc.stop(startTime + 0.08);
    }
    
    // 案件完成音效（庄重的提示音）
    playCompleteSound() {
        if (!this.initialized || this.isMuted) return;
        
        const ctx = this.audioContext;
        const startTime = ctx.currentTime;
        
        // 三音符和弦：C E G
        const notes = [261.63, 329.63, 392.00];
        
        notes.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, startTime + index * 0.15);
            
            gain.gain.setValueAtTime(0, startTime + index * 0.15);
            gain.gain.linearRampToValueAtTime(0.25, startTime + index * 0.15 + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + index * 0.15 + 0.8);
            
            osc.connect(gain);
            gain.connect(this.sfxGain);
            
            osc.start(startTime + index * 0.15);
            osc.stop(startTime + index * 0.15 + 0.8);
        });
    }
    
    // 徽章解锁音效
    playBadgeSound() {
        if (!this.initialized || this.isMuted) return;
        
        const ctx = this.audioContext;
        const startTime = ctx.currentTime;
        
        // 上升的音阶
        const notes = [523.25, 587.33, 659.25, 783.99, 1046.50];
        
        notes.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, startTime + index * 0.1);
            
            gain.gain.setValueAtTime(0, startTime + index * 0.1);
            gain.gain.linearRampToValueAtTime(0.2, startTime + index * 0.1 + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + index * 0.1 + 0.4);
            
            osc.connect(gain);
            gain.connect(this.sfxGain);
            
            osc.start(startTime + index * 0.1);
            osc.stop(startTime + index * 0.1 + 0.4);
        });
    }
    
    // ==================== 控制方法 ====================
    
    // 切换静音
    toggleMute() {
        this.isMuted = !this.isMuted;
        
        if (this.isMuted) {
            this.masterGain.gain.value = 0;
        } else {
            this.masterGain.gain.value = 0.5;
        }
        
        return this.isMuted;
    }
    
    // 设置音量
    setVolume(volume) {
        if (!this.initialized) return;
        this.masterGain.gain.value = Math.max(0, Math.min(1, volume));
    }
}

// 创建全局音频管理器实例
const audioManager = new AudioManager();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AudioManager;
}