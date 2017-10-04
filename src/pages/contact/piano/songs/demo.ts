import { Song } from './song';

export class Demo extends Song {

  private score: any;

  constructor() {

    super();

    this.durations = this.getNoteDurations(1400);

    this.score = {
      a: [
        { keyCode: 65, duration: this.durations.quarter },
        null,
        { keyCode: 70, duration: this.durations.eigth },
        null,
        { keyCode: 70, duration: this.durations.eigth },
        null,
        { keyCode: 71, duration: this.durations.eigth },
        null,
        { keyCode: 71, duration: this.durations.eigth },
        null,
        { keyCode: 72, duration: this.durations.quarter },
        null,
        null,
        { keyCode: 85, duration: this.durations.eigth },
        { keyCode: 75, duration: this.durations.eigth },
        null,
        { keyCode: 85, duration: this.durations.eigth },
        null,
        { keyCode: 72, duration: this.durations.eigth },
        null,
        { keyCode: 72, duration: this.durations.eigth },
        null,
        { keyCode: 71, duration: this.durations.eigth },
        null,
        { keyCode: 71, duration: this.durations.eigth },
        null,
        { keyCode: 70, duration: this.durations.quarter + this.durations.eigth },
        null,
        null,
        null,
        null,
        null,
      ],
      b: [
        { keyCode: 75, duration: this.durations.eigth },
        { keyCode: 85, duration: this.durations.eigth },
        { keyCode: 72, duration: this.durations.eigth },
        null,
        { keyCode: 72, duration: this.durations.eigth },
        null,
        { keyCode: 72, duration: this.durations.quarter },
        null,
        { keyCode: 85, duration: this.durations.eigth },
        { keyCode: 72, duration: this.durations.eigth },
        { keyCode: 71, duration: this.durations.eigth },
        null,
        { keyCode: 71, duration: this.durations.eigth },
        null,
        { keyCode: 71, duration: this.durations.quarter },
        null,
      ],
      c: [
        { keyCode: 75, duration: this.durations.quarter },
        null,
        { keyCode: 72, duration: this.durations.eigth },
        null,
        { keyCode: 70, duration: this.durations.eigth },
        null,
        { keyCode: 71, duration: this.durations.eigth },
        null,
        { keyCode: 71, duration: this.durations.eigth },
        null,
        { keyCode: 70, duration: this.durations.quarter + this.durations.eigth },
        null,
        null,
        null,
        null,
        null
      ]
    };

  }

  play() {

    const score = [].concat(
      this.score.a,
      this.score.a,
      this.score.b,
      this.score.b,
      this.score.c
    );

    this.start(score);

  }

}
