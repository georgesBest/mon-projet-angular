import { Component, Input,OnInit } from '@angular/core';
import  { AppareilsService} from '../services/Appareils.service';

@Component({
  selector: 'app-list-appareils-item',
  templateUrl: './list-appareils-item.component.html',
  styleUrls: ['./list-appareils-item.component.scss']
})
export class ListAppareilsItemComponent implements OnInit {
@Input() appareilName:string;
@Input() appareilStatus:string;
@Input() index:number;
  constructor(private appareilsService: AppareilsService) { }

  ngOnInit() {
  }

  getStatus(){
    if (this.appareilStatus === 'Allumé') {
      return true;
    }
    else
    {
      return false;
    }
  }
  onSwitch(){
      if (this.appareilStatus === 'Allumé') {
        this.appareilsService.switchOffOne(this.index);
      }
      else {
        this.appareilsService.switchOnOne(this.index);
      }
  }

}
