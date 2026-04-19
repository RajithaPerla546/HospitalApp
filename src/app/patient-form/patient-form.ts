import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  imports: [ReactiveFormsModule],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.css',
})
export class PatientForm {
patientForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    disease: new FormControl('')
  });

  onSubmit() {
    console.log(this.patientForm.value);
  }
}
