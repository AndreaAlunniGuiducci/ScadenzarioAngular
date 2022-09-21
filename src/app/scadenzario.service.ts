import { Injectable } from '@angular/core';
import { Item } from './item';
@Injectable({
  providedIn: 'root',
})
export class ScadenzarioService {
  items: Item[] = [];
  itemObj = {itemObj: this.items}

  constructor() {
    JSON.parse(localStorage.getItem('item')!) === null
      ? localStorage.setItem('item', JSON.stringify(this.itemObj))
      : (this.itemObj = JSON.parse(localStorage.getItem('item')!));
  }

  addItem(item: Item) {
    this.itemObj.itemObj.push(item);
    localStorage.setItem('item', JSON.stringify(this.itemObj));
  }

  removeItem(i: number){
    this.itemObj.itemObj.splice(i, 1)
    localStorage.setItem('item', JSON.stringify(this.itemObj));
  }

  getItems() {
    return this.itemObj.itemObj;
  }
}
