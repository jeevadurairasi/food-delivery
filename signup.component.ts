import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  // user = {
  //   username: '',
  //   userid: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  //   profileImage: ''
  // };                           implements OnInit
  // enteredCaptcha = '';
  // captcha = '';
  // userIdExists = false;

  // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   thisABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   this.captcha = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  // }

  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.user.profileImage = file.name; // You can upload this to backend later
  //   }
  // }

  // checkUserId() {
  //   // Simulate check (replace with real API call)
  //   const existingUserIds = ['user123', 'admin', 'testuser'];
  //   this.userIdExists = existingUserIds.includes(this.user.userid);
  // }

  // onSubmit() {
  //   if (!this.userIdExists && this.enteredCaptcha === this.captcha) {
  //     // Simulate storing to DB
  //     console.log('User registered:', this.user);
  //     this.router.navigate(['/login']);
  //   }
  // }
}
