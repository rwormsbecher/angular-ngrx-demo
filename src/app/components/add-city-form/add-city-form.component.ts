import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-city-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-city-form.component.html',
  styleUrl: './add-city-form.component.css',
})
export class AddCityFormComponent implements OnInit {
  addCityForm: FormGroup = {} as FormGroup;
  errors: any = {};
  @Output() cancelForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addCityForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      image: [''],
      description: [''],
    });
  }

  onSubmit() {
    console.log(this.addCityForm.value);
  }

  cancel() {
    console.log('cancel');
    this.cancelForm.emit();
  }
}
