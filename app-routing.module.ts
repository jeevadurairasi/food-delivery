import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component'; // Import HomeComponent

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Default route
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'signup', component: SignupComponent }, // Signup route
  { path: 'home', component: HomeComponent }, // Home route
  { path: '**', redirectTo: '' } // Wildcard route (redirect to WelcomeComponent)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}