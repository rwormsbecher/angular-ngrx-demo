import { Component, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { Mode } from './shared/models/Mode';
import { AddbuttonComponent } from './components/addbutton/addbutton.component';
import { ListComponent } from './components/list/list.component';
import cities from '../assets/cities.json';
import { City } from './shared/models/City';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { AddCityFormComponent } from './components/add-city-form/add-city-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NotificationComponent,
    AddbuttonComponent,
    ListComponent,
    ShowcaseComponent,
    AddCityFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  modeEnum = Mode;
  citiesList = cities;

  mode = signal(Mode.ShowCase);
  activeCity = this.citiesList.cities[0];

  setNewCity(city: any) {
    this.activeCity = city;
  }

  addModeHandler(mode: any) {
    this.mode.set(mode);
  }

  cancelFormHandler() {
    this.mode.set(Mode.ShowCase);
  }
}
