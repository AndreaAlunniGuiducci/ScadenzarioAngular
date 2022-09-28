import { Component, OnInit } from '@angular/core';
import { debugErrorMap } from 'firebase/auth';
import { ScadenzarioService } from '../scadenzario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {

  constructor(public scadenzarioService: ScadenzarioService) {
    this.scadenzarioService.getData();
  }

  ngOnInit(): void {}

}
