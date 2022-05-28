import { Component, OnInit } from '@angular/core';
import { ScadenzarioService } from '../scadenzario.service';
import { Item } from '../item';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
  item = '';
  expired = new Date();

  constructor(private scadenzarioService: ScadenzarioService) {}
  addItem() {
    const newItem: Item = { item: this.item, expired: this.expired };
    this.scadenzarioService.addItem(newItem);
  }
  ngOnInit(): void {}
}
