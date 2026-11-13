use web_sys::{AudioContext, OscillatorType};

pub struct SoundEngine;

impl SoundEngine {
    pub fn play_click(enabled: bool) {
        if !enabled { return; }
        Self::play_tone(800.0, 0.04, 0.08, OscillatorType::Sine);
    }

    pub fn play_window_open(enabled: bool) {
        if !enabled { return; }
        Self::play_tone(587.33, 0.08, 0.12, OscillatorType::Triangle); // D5
        Self::play_delayed_tone(880.0, 0.05, 0.10, 0.07, OscillatorType::Triangle); // A5
    }

    pub fn play_window_close(enabled: bool) {
        if !enabled { return; }
        Self::play_tone(440.0, 0.06, 0.10, OscillatorType::Sine);
    }

    pub fn play_terminal_key(enabled: bool) {
        if !enabled { return; }
        Self::play_tone(1200.0, 0.02, 0.04, OscillatorType::Square);
    }

    #[allow(dead_code)]
    pub fn play_success(enabled: bool) {
        if !enabled { return; }
        Self::play_tone(523.25, 0.1, 0.15, OscillatorType::Sine); // C5
        Self::play_delayed_tone(659.25, 0.1, 0.15, 0.08, OscillatorType::Sine); // E5
        Self::play_delayed_tone(783.99, 0.15, 0.25, 0.16, OscillatorType::Sine); // G5
    }

    fn play_tone(freq: f32, gain_val: f32, duration_sec: f64, osc_type: OscillatorType) {
        if let Ok(ctx) = AudioContext::new() {
            if let Ok(osc) = ctx.create_oscillator() {
                if let Ok(gain) = ctx.create_gain() {
                    let now = ctx.current_time();
                    osc.set_type(osc_type);
                    osc.frequency().set_value(freq);
                    let _ = gain.gain().set_value_at_time(gain_val, now);
                    let _ = gain.gain().exponential_ramp_to_value_at_time(0.0001, now + duration_sec);
                    let _ = osc.connect_with_audio_node(&gain);
                    let _ = gain.connect_with_audio_node(&ctx.destination());
                    let _ = osc.start();
                    let _ = osc.stop_with_when(now + duration_sec);
                }
            }
        }
    }

    fn play_delayed_tone(freq: f32, gain_val: f32, duration_sec: f64, delay_sec: f64, osc_type: OscillatorType) {
        if let Ok(ctx) = AudioContext::new() {
            if let Ok(osc) = ctx.create_oscillator() {
                if let Ok(gain) = ctx.create_gain() {
                    let now = ctx.current_time() + delay_sec;
                    osc.set_type(osc_type);
                    osc.frequency().set_value(freq);
                    let _ = gain.gain().set_value_at_time(gain_val, now);
                    let _ = gain.gain().exponential_ramp_to_value_at_time(0.0001, now + duration_sec);
                    let _ = osc.connect_with_audio_node(&gain);
                    let _ = gain.connect_with_audio_node(&ctx.destination());
                    let _ = osc.start_with_when(now);
                    let _ = osc.stop_with_when(now + duration_sec);
                }
            }
        }
    }
}
