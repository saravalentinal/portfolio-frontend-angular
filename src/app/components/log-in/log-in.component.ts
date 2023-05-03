import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form:FormGroup;
  constructor( private formBuilder:FormBuilder, private authService:AuthService, private route:Router ) {
    this.form  =this.formBuilder.group (
      {
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          deviceInfo:this.formBuilder.group({
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
        })
      }
    )
  }

  ngOnInit(): void {
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onSend(event:Event) {
    event.preventDefault;
    this.authService.LogIn(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.route.navigate(['/portfolio']);
    });

  }

}
