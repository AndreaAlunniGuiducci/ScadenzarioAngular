import { Component, OnInit } from '@angular/core';
import { ScadenzarioService } from '../../shared/service/scadenzario.service';
import { Item } from '../../item';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
  today = new Date();
  item = '';
  expired = new Date();
  expiredDay = 0;

  constructor(private scadenzarioService: ScadenzarioService) {}
  addItem() {
    
    const newItem: Item = {
      item: this.item,
      expired: this.expired,
    };
    this.scadenzarioService.addItem(newItem);
  }
  ngOnInit(): void {}
}

// this.diffDays = Math.ceil(
// (this.expiredDay =
//   new Date(this.expired).getTime() - this.today.getTime()) /
//   (1000 * 60 * 60 * 24)
// );