import { Component, OnInit } from '@angular/core';

import { NotesService } from '../../services/notes/notes.service';
import { Note } from '../../services/notes/note';

import * as Songs from './songs';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {

  notes: Note[];
  showInstructions: boolean;
  song: Songs.Demo;

  constructor(private notesService: NotesService) { }

  ngOnInit() {

    this.notes = this.createNotes();
    this.showInstructions = false;
    this.song = new Songs.Demo();

  }

  toggleDemoSong() {

    if (!this.song.isPlaying) {
      this.song.play();
    } else {
      this.song.stop();
    }

  }

  selectWaveForm(waveform: OscillatorType) {

    this.notes.forEach(item => {
      item.sound.stop();
    });

    this.notes = this.createNotes(waveform);

  }

  handleKeyboardClicks() {

    if (this.showInstructions) {
      return;
    }

    this.showInstructions = true;

    setTimeout(() => {
      this.showInstructions = false;
    }, 3000);

  }

  private createNotes(waveform: OscillatorType = 'triangle'): Note[] {
    return this.notesService.getNotes(waveform);
  }

}
