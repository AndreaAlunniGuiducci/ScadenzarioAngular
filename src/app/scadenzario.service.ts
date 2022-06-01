import { Injectable } from '@angular/core';
import { Item } from './item';
@Injectable({
  providedIn: 'root',
})
export class ScadenzarioService {
  items: Item[] = [];

  constructor() {
    JSON.parse(localStorage.getItem('item')!) === null
      ? localStorage.setItem('item', JSON.stringify([]))
      : (this.items = JSON.parse(localStorage.getItem('item')!));
    console.log(this.items);
  }

  addItem(item: Item) {
    this.items.push(item);
    localStorage.setItem('item', JSON.stringify(this.items));
    console.log(this.items);
  }

  removeItem(i: number){
    this.items.splice(i)
    localStorage.setItem('item', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }
}
