import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-appareils',
  templateUrl: './list-appareils.component.html',
  styleUrls: ['./list-appareils.component.scss']
})
export class ListAppareilsComponent implements OnInit {
  appareilName1 = 'Machine à laver';
  appareilName2 = 'Télévision';
  appareilName3 = 'Cave à vin';
  constructor() { }

  ngOnInit() {
  }

}
