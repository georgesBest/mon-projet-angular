import { Component, OnInit } from '@angular/core';
import {AppareilsService} from '../services/Appareils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-appareil',
  templateUrl: './view-appareil.component.html',
  styleUrls: ['./view-appareil.component.scss']
})
export class ViewAppareilComponent implements OnInit {
  index:number;
  name:string;
  status:string;
  constructor(private appareilsService: AppareilsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.index = this.route.snapshot.params['index'];
    this.name = this.appareilsService.getAppareilByIndex(this.index).name;
    this.status = this.appareilsService.getAppareilByIndex(this.index).status;
  }

}
