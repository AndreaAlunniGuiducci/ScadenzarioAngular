import {
  Component,
  OnInit,
  SimpleChange,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ScadenzarioService } from '../../scadenzario.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass'],
})
export class CardItemComponent implements OnInit {
  @ViewChild('newDateBox') newDateBox: ElementRef | undefined;
  today = new Date();
  items = this.scadenzarioService.getItems();
  itemsSorted = this.items.sort(
    (a, b) => +new Date(a.expired) - +new Date(b.expired)
  );
  expired = new Date();

  constructor(
    private scadenzarioService: ScadenzarioService,
    private el: ElementRef
  ) {}
  deleteExpired(expired: any, i: number) {
    if (this.getDiffDays(expired) < 0) {
      this.expiredItems(i);
    }
  }
  getDiffDays(expired: any) {
    return Math.floor(
      (new Date(expired).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24) +
        1
    );
  }
  modifyDate(i: number) {
    if (confirm('modificare la data di scadenza?')) {
      const newDateElement = (<HTMLElement>this.el.nativeElement).querySelector(
        '.newDateBox'
      );
      newDateElement?.classList.value
// const newDateElement = document.getElementsByClassName('newDateBox');
// console.log(newDateElement[0])
      this.items[i].expired = '2023-12-04';
    }
  }
  deleteItem(i: number) {
    this.scadenzarioService.removeItem(i);
  }
  expiredItems(i: number){
    this.scadenzarioService.expiredItem(i)
  }
  ngOnInit(): void {}
}
