import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-waveform-select',
  templateUrl: './waveform-select.component.html',
  styleUrls: ['./waveform-select.component.scss']
})
export class WaveformSelectComponent implements OnInit {

  @Output() onChange: EventEmitter<string> = new EventEmitter();
  waveforms: OscillatorType[];

  constructor() {

    this.waveforms = [
      'triangle',
      'sine',
      'square',
      'sawtooth'
    ];

  }

  ngOnInit() {
  }

  handleOnChange(e: Event) {

    this.onChange.emit(e.target['value']);

  }

}
