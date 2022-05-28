import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'ScadenzarioAngular';

  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth();
  year = this.date.getFullYear();

  today = `${this.day}/${this.month + 1}/${this.year}`;

  items: Item[] = [];
  item = '';
  expired = new Date();

  addItem(event: any) {
    const newItem: Item = { item: this.item, expired: this.expired };
    this.items.push(newItem);
    localStorage.setItem('item', JSON.stringify(this.items));
    console.log(this.items);
  }
}
