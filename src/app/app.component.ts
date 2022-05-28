import { Component } from '@angular/core';

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
}
