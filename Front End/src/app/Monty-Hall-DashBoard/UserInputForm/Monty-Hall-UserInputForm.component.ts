import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-userinput',
  templateUrl: './Monty-Hall-UserInputForm.component.html',
})

export class MontyHallUserInputFormComponent implements OnInit {

  form: any;
  receivedID: string | undefined;
  isSwitched = false;

  @Output() Data = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {

    this.initializeform();

  }

  ngOnInit() {


  }

  initializeform(emp: any = null) {

    //create forms with validators
    this.form = this.formBuilder.group({
      Simulations: ['', Validators.required],
      SwitchorNot: ['']
    });

  }

  onSubmit() { }

  save() {
    let _data = {
      Simulations: 0,
      SwitchorNot:false
    }
    if (this.form.valid) {

      //get the data from formcontrol
      _data.Simulations = this.form.get('Simulations')?.value;
      _data.SwitchorNot = this.form.get('SwitchorNot')?.value;

      this.Data.emit(_data);

    }
  }

  toggle() {
    this.isSwitched = !this.isSwitched;
  }

}