import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chores';
  subTitle = 'Upcoming Chores';
  chore: Chore = {
      id: 1,
      name: 'Mop the floors',
      description: 'Mop floors in kitchen, hall and both bathrooms',
      frequency: 'P1M',
      nextDue: new Date()
    }
}
export class Chore {
  id: number;
  name: string;
  description: string;
  frequency: string;
  nextDue: Date;
}
