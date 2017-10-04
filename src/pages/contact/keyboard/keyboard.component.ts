import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NotesService } from '../../services/notes/notes.service';
import { Note } from '../../services/notes/note';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Input() notes: Note[];
  @Output() onClick: EventEmitter<any>;

  constructor() {

    this.notes = [];
    this.onClick = new EventEmitter<any>();

  }

  ngOnInit() {

    window.addEventListener('keydown', this.play.bind(this));
    window.addEventListener('keyup', this.stop.bind(this));

    window.addEventListener('touchstart', this.play.bind(this));
    window.addEventListener('touchend', this.stop.bind(this));

  }

  play(e: Event) {

    e.preventDefault();

    const element = <Element>e.target;
    let keyCode: number = e['keyCode'] || element.getAttribute('data-key');
    const note: Note = this.getNoteByKeyCode(keyCode);

    if (!note) {
      return;
    }

    note.sound.play();

    // the ";" key emits different keyCodes on Chrome and Firefox
    // this is a cheap attempt to solve that problem
    if (keyCode === 186) {
      keyCode = 59;
    }

    document.querySelector(`li[data-key="${keyCode}"]`).classList.add('playing');

  }

  stop(e: Event) {

    const element = <Element>e.target;
    let keyCode: number = e['keyCode'] || element.getAttribute('data-key');
    const note: Note = this.getNoteByKeyCode(keyCode);

    if (!note) {
      return;
    }

    note.sound.stop();

    // the ";" key emits different keyCodes on Chrome and Firefox
    // this is a cheap attempt to solve that problem
    if (keyCode === 186) {
      keyCode = 59;
    }

    document.querySelector(`li[data-key="${keyCode}"]`).classList.remove('playing');

  }

  private getNoteByKeyCode(keyCode: number): Note {

    // the ";" key emits different keyCodes on Chrome and Firefox
    // this is a cheap attempt to solve that problem
    if (keyCode === 186) {
      keyCode = 59;
    }

    return this.notes.find((item: Note) => item.keyCode === keyCode);

  }

}
