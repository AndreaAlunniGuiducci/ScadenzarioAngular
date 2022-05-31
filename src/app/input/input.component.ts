import { Component, OnInit } from '@angular/core';
import { ScadenzarioService } from '../scadenzario.service';
import { Item } from '../item';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
  today = new Date();
  item = '';
  expired = new Date();
  diffDays = 0;
  expiredDay = 0;

  constructor(private scadenzarioService: ScadenzarioService) {}
  addItem() {
    this.diffDays = Math.ceil(
      Math.abs(this.expiredDay= new Date(this.expired).getTime() - this.today.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const newItem: Item = {
      item: this.item,
      expired: this.expired,
      diffDays: this.diffDays,
    };
    this.scadenzarioService.addItem(newItem);
    console.log(this.diffDays);
  }
  ngOnInit(): void {}
}
