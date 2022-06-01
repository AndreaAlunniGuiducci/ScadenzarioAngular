import { Component, OnInit, SimpleChange } from '@angular/core';
import { ScadenzarioService } from '../scadenzario.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass'],
})
export class CardItemComponent implements OnInit {
  today = new Date();
  items = this.scadenzarioService.getItems();
  itemsSorted = this.items.sort(
    (a, b) => +new Date(a.expired) - +new Date(b.expired)
  );

  constructor(private scadenzarioService: ScadenzarioService) {
    console.log(this.itemsSorted);
  }
  getDiffDays(expired: any) {
    return Math.floor(
      (new Date(expired).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    );
  }
  deleteItem(i: number){
    this.scadenzarioService.removeItem(i);
  }
  ngOnInit(): void {}
}
