import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SignupComponent implements OnInit {

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

}
