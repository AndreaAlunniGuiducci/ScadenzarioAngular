import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from './item';
@Injectable({
  providedIn: 'root',
})
export class ScadenzarioService {
  items: Item[] = [];
  user = JSON.parse(localStorage.getItem('user')!);
  itemObj = { items: this.items };

  constructor(private db: AngularFirestore) {
    JSON.parse(localStorage.getItem('item')!) === null || undefined
      ? localStorage.setItem('item', JSON.stringify(this.itemObj))
      : (this.itemObj = JSON.parse(localStorage.getItem('item')!));
  }

  setData = async (items: object) => {
    this.db.collection('users').doc(this.user.uid).set(items);
  };
  updateData = async (items: object) => {
    this.db.collection('users').doc(this.user.uid).update(items);
  };
  getData = async () => {
    this.db
      .collection('users')
      .doc(this.user.uid)
      .ref.get()
      .then((doc: any) => {
        let userObject = doc.data();
        if (userObject.items) {
          localStorage.setItem('item', JSON.stringify(doc.data()));
        }
      });
  };

  addItem(item: Item) {
    this.itemObj.items.unshift(item);
    localStorage.setItem('item', JSON.stringify(this.itemObj));
    this.setData(this.itemObj);
    window.alert(`${JSON.stringify(item.item)} aggiunto`);
  }

  removeItem(i: number) {
    let itemToRemove = this.itemObj.items[i].item;
    if (confirm(`vuoi cancellare ${itemToRemove}?`)) {
      this.itemObj.items.splice(i, 1);
      localStorage.setItem('item', JSON.stringify(this.itemObj));
    }
  }

  expiredItem(i: number) {
    this.itemObj.items.splice(i, 1);
    localStorage.setItem('item', JSON.stringify(this.itemObj));
  }

  getItems() {
    return this.itemObj.items;
  }
}
