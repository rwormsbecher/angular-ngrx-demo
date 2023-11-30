import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mode } from '../../shared/models/Mode';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-addbutton',
  standalone: true,
  imports: [NgIf],
  templateUrl: './addbutton.component.html',
  styleUrl: './addbutton.component.css',
})
export class AddbuttonComponent {
  @Input() mode?: Mode;
  @Output() changeMode = new EventEmitter();
  Mode = Mode;

  setToAddMode(mode: Mode) {
    console.log('add mode');
    this.changeMode.emit(mode);
  }
}
