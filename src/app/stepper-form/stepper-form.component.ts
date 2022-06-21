import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css']
})
export class StepperFormComponent implements OnInit {


  profileFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  educationFormGroup: FormGroup;
  othersFormGroup: FormGroup;
  submittedData = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      // mobileNumber: [''],

      mobileNumbers: this.fb.array([
        this.fb.control('')
      ])
    });

    this.addressFormGroup = this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      pincode: ['']
    });

    this.educationFormGroup = this.fb.group({
      graduation: [''],
      marks: [''],
      passingYear: ['']
    });

    this.othersFormGroup = this.fb.group({
      aadhar: ['']
    })
  }

  get MobileNumbers() {
    return this.profileFormGroup.get('mobileNumbers') as FormArray
  }

  addMobileNumber() {
    this.MobileNumbers.push(this.fb.control(''))
  }

  submitProfileFormData() {
    let profileData = this.profileFormGroup.value;
    console.warn(profileData);
    this.submittedData.push(profileData)
  }

  submitAddressData() {
    let addressData = this.addressFormGroup.value;
    console.warn(addressData);
    this.submittedData.push(addressData)
  }

  submitEducationData() {
    let educationData = this.educationFormGroup.value;
    console.warn(educationData);
    this.submittedData.push(educationData)
  }

  submitOthersData() {
    let othersData = this.othersFormGroup.value;
    console.warn(othersData);
    this.submittedData.push(othersData)
  }

  showData() {
    console.log(this.submittedData)
  }

  deleteMobileNumber(i) {
    this.MobileNumbers.removeAt(i)
  }
}
