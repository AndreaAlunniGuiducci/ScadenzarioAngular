import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { ScadenzarioService } from '../scadenzario.service';
import { Item } from '../item';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
  @Input() item = '';
  @Input() expired = new Date();

  @Output() add: EventEmitter<any> = new EventEmitter<any>();

  constructor(private scadenzarioService: ScadenzarioService) {}
  // addItem() {
  //   const newItem: Item = {item: this.item, expired: this.expired}
  //   this.scadenzarioService.addItem(newItem);
  // }
  addItem() {
    this.add.emit(this.item);
    this.add.emit(this.expired);
  }
  ngOnInit(): void {}
}
