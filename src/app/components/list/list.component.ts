import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../../shared/models/City';
import { ListItemComponent } from '../list-item/list-item.component';
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgIf, ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() citiesList?: { cities: City[] };
  @Input() activeCity?: City;
  @Output() setNewActiveCity = new EventEmitter<City>();

  constructor() {}

  setActiveCity(city: City) {
    this.activeCity = city;
    this.setNewActiveCity.emit(city);
    console.log('----', this.activeCity);
  }
}
