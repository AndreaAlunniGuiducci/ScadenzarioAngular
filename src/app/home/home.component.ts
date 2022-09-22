import { Component, OnInit } from '@angular/core';
import { debugErrorMap } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private db: AngularFirestore) {
    let items = JSON.parse(localStorage.getItem('item') || '{}');
    this.setData(items);
    // this.getData();
  }

  ngOnInit(): void {}

  setData = async (items: Array<any>) => {
    this.db.collection('users').doc('Admin').update({items: items});
  };
  getData = async () => {
    this.db
      .collection('users')
      .doc('Admin')
      .ref.get()
      .then((doc) =>
        localStorage.setItem('item', JSON.stringify(doc.data()))
      );
  };
}
