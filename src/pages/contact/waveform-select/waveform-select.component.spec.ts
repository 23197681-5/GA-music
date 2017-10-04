import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveformSelectComponent } from './waveform-select.component';

describe('WaveformSelectComponent', () => {
  let component: WaveformSelectComponent;
  let fixture: ComponentFixture<WaveformSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaveformSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveformSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
