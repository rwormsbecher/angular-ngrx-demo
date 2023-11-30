import { Component, Input } from '@angular/core';
import { City } from '../../shared/models/City';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css',
})
export class ShowcaseComponent {
  @Input() activeCity?: City;
}
