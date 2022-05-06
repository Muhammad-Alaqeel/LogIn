import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


loginForm=new FormGroup({
email: new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.required,Validators.minLength(3)])




});

  constructor() { }

  ngOnInit(): void {
  }

  fetch(){

  }
}
