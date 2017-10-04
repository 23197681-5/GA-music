import { Injectable } from '@angular/core';

import { Note } from './note';
import { Sound } from './sound';

@Injectable()
export class NotesService {

  private notes: any[];

  constructor() {

    this.notes = [
      { noteName: 'c4', frequency: 261.6, keyName: 'a', keyCode: 65 },
      { noteName: 'c#4', frequency: 277.18, keyName: 'w', keyCode: 87 },
      { noteName: 'd4', frequency: 293.7, keyName: 's', keyCode: 83 },
      { noteName: 'd#4', frequency: 311.13, keyName: 'e', keyCode: 69 },
      { noteName: 'e4', frequency: 329.6, keyName: 'd', keyCode: 68 },
      { noteName: 'f4', frequency: 349.2, keyName: 'f', keyCode: 70 },
      { noteName: 'f#4', frequency: 369.99, keyName: 't', keyCode: 84 },
      { noteName: 'g4', frequency: 392, keyName: 'g', keyCode: 71 },
      { noteName: 'g#4', frequency: 415.30, keyName: 'y', keyCode: 89 },
      { noteName: 'a4', frequency: 440, keyName: 'h', keyCode: 72 },
      { noteName: 'a#4', frequency: 466.16, keyName: 'u', keyCode: 85 },
      { noteName: 'b4', frequency: 493.9, keyName: 'j', keyCode: 74 },
      { noteName: 'c5', frequency: 523.3, keyName: 'k', keyCode: 75 },
      { noteName: 'c#5', frequency: 554.37, keyName: 'o', keyCode: 79 },
      { noteName: 'd5', frequency: 587.3, keyName: 'l', keyCode: 76 },
      { noteName: 'd#5', frequency: 622.25, keyName: 'p', keyCode: 80 },
      { noteName: 'e5', frequency: 659.3, keyName: ';', keyCode: 59 }
    ];

  }

  getNotes(waveform: OscillatorType = 'triangle'): Note[] {

    return this.notes.map((item: any) => {
      const sound: Sound = new Sound(item.frequency, waveform);
      return <Note>Object.assign({}, item, { sound });
    });

  }

}
