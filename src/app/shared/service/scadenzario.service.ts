import { Injectable } from '@angular/core';
import { Item } from '../../item';
@Injectable({
  providedIn: 'root',
})
export class ScadenzarioService {
  items: Item[] = [];

  constructor() {
    JSON.parse(localStorage.getItem('item')!) === null
      ? localStorage.setItem('item', JSON.stringify([]))
      : (this.items = JSON.parse(localStorage.getItem('item')!));
  }

  addItem(item: Item) {
    this.items.push(item);
    localStorage.setItem('item', JSON.stringify(this.items));
  }

  removeItem(i: number){
    this.items.splice(i, 1)
    localStorage.setItem('item', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }
}
