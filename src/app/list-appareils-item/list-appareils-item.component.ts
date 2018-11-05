import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-list-appareils-item',
  templateUrl: './list-appareils-item.component.html',
  styleUrls: ['./list-appareils-item.component.scss']
})
export class ListAppareilsItemComponent implements OnInit {
@Input() appareilName:string;
@Input() appareilStatus:string;
  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    if (this.appareilStatus == 'Allumé') {
      return true;
    }
    else
    {
      return false;
    }
  }

}
