import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/user.model';
import { MyTestService } from 'src/app/my-test.service';
import { HttpStatusCode } from '@angular/common/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  isTrue:boolean=false;
  loggedIn:boolean=false;
  signedUp:boolean=false;
  failedToSignUp:boolean=false;
   status:number=0;


  constructor(private Myserv:MyTestService) { }

  ngOnInit(): void {

this.loginForm=new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(4)])
  
  
  
  
  });
  }
signUp(){
  const user:User={
    email:this.loginForm.value.email,
    password:this.loginForm.value.password,
    };

 this.Myserv.signNew(user).then(res=>{this.status=res.status;

  if(this.status==200){
    console.log("1w1w1w");
   
    this.signedUp=true;
    this.loggedIn=false;
   this.isTrue=false;
   this.failedToSignUp=false;

  }else{  
    this.signedUp=false;
    this.loggedIn=false;
   this.isTrue=false;
    this.failedToSignUp=true;
  }
 
 });

}
  sendLogin(){
    const user:User={
    email:this.loginForm.value.email,
    password:this.loginForm.value.password,
    };

 this.Myserv.login(user).then(res=>{this.status=res.status;

 if(this.status==200){
   console.log("1w1w1w");
   this.failedToSignUp=false;

   this.signedUp=false;
   this.loggedIn=true;
  this.isTrue=false;
 }else{
  this.failedToSignUp=false;

  this.signedUp=false;
  this.loggedIn=false;
  this.isTrue=true;

 }

})
 
  }
}