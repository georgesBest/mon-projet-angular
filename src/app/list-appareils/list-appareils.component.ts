import { Component, OnInit } from '@angular/core';
import  { AppareilsService} from '../services/Appareils.service';

@Component({
  selector: 'app-list-appareils',
  templateUrl: './list-appareils.component.html',
  styleUrls: ['./list-appareils.component.scss']
})
export class ListAppareilsComponent implements OnInit {
  /*appareilName1 = 'Machine à laver';
  appareilName2 = 'Télévision';
  appareilName3 = 'Cave à vin';*/
  /*appareils = [
    {
      'name' : 'Machine à lever',
      'status' : 'Allumé',
    
    },
    {
      'name' : 'Lave vaisselle',
      'status' : 'Allumé',
    
    },
    {
      'name' : 'Télévision',
      'status' : 'Eteint',
    
    }
  ];*/
  appareils: any[];
  constructor(private appareilsService: AppareilsService) {

    /*setTimeout(
      ()=> {
        this.appareils[2].status = 'Allumé';
      },3000
    )*/
  }

  ngOnInit() {
    this.appareils = this.appareilsService.appareils;
  }

  onAllumer(){
    this.appareilsService.switchOnAll();
  }

  onEteindre(){
    this.appareilsService.switchOffAll();
  }

  onSauvegarder(){
    this.appareilsService.saveAppareil();
  }

  onRecuperer(){
    this.appareilsService.getAppareils();
  }
 

}
