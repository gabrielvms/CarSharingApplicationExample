import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: User = {username: "", phone: ""};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
  ) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
  }

  async onSubmit() {
    this.user.username = this.form.get('username')?.value
    this.user.phone = this.form.get('phone')?.value

    let notifications = document.getElementById('notifications');
    
    this.apiService.signUp(this.user).subscribe((res: any) => {

      if(notifications)
      {
        notifications.style.display = 'block';
      }
      
      this.router.navigateByUrl('/rides');
    });
    
  }
}
