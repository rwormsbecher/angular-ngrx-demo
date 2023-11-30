import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../../shared/models/City';
import { NgClass, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  @Input() city!: City;
  @Input() activeCity?: City;
  @Output() setNewActivecity = new EventEmitter<City>();

  setActiveCity(city: City) {
    this.activeCity = city;
    this.setNewActivecity.emit(city);
  }
}
