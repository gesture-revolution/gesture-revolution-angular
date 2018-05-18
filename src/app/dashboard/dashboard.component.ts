import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  color: string;

  availableColors = [
    { name: 'Folk', color: '' },
    { name: 'Pop', color: '' },
    { name: 'Rock', color: '' },
    { name: 'Hip Pop', color: '' },
    { name: 'Country', color: '' },
    { name: 'Hard Rock', color: '' },
    { name: 'Soul Music', color: '' },
    { name: 'Latin America', color: '' },
    { name: 'Ekectronic music', color: '' },
    { name: 'Alternative Rock', color: '' },
    { name: 'Contemporary R&B', color: '' },
    { name: 'Trap', color: '' },
    { name: 'Heavy Metal', color: '' },

    // { name: 'Primary', color: 'primary' },
    // { name: 'Accent', color: 'accent' },
    // { name: 'Warn', color: 'warn' }
  ];
}








