import { Injectable } from '@angular/core';
import { Item } from './item';
@Injectable({
  providedIn: 'root',
})
export class ScadenzarioService {
  items: Item[] = [];
  itemObj = {items: this.items}

  constructor() {
    JSON.parse(localStorage.getItem('item')!) === null
      ? localStorage.setItem('item', JSON.stringify(this.itemObj))
      : (this.itemObj = JSON.parse(localStorage.getItem('item')!));
  }

  addItem(item: Item) {
    this.itemObj.items.unshift(item);
    localStorage.setItem('item', JSON.stringify(this.itemObj));
    window.alert(`${JSON.stringify(item.item)} aggiunto`);
  }

  removeItem(i: number){
    let itemToRemove = this.itemObj.items[i].item;
    if(confirm(`vuoi cancellare ${itemToRemove}?`)){
    this.itemObj.items.splice(i, 1)
    localStorage.setItem('item', JSON.stringify(this.itemObj));
    }
  }

  getItems() {
    return this.itemObj.items;
  }
}
