import { Component, OnInit } from '@angular/core';
import { AuthService } from './pages/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isLoggedIn = localStorage.getItem('token') ? true : false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.verifyLogin();
  }

  verifyLogin() {
    this.authService.verifyLogin().subscribe(
      (response: any) => this.isLoggedIn = response, (err:any) => console.log(err)
    );
  }
}