const audioContext: AudioContext = new AudioContext();

export class Sound {

  pressed: boolean;
  private oscillator: OscillatorNode;

  constructor(frequency: number, waveform: OscillatorType = 'triangle') {

    this.oscillator = audioContext.createOscillator();
    this.pressed = false;

    if (frequency) {
      this.oscillator.frequency.value = frequency;
    }

    this.oscillator.type = waveform;
    this.oscillator.start(0);

  }

  play() {

    if (this.pressed) {
      return;
    }

    this.pressed = true;
    this.oscillator.connect(audioContext.destination);

  }

  stop() {

    this.pressed = false;
    this.oscillator.disconnect();

  }

}
