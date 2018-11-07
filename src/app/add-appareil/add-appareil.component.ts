import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AppareilsService} from '../services/Appareils.service';

@Component({
  selector: 'app-add-appareil',
  templateUrl: './add-appareil.component.html',
  styleUrls: ['./add-appareil.component.scss']
})
export class AddAppareilComponent implements OnInit {

  defaultStatus:string = 'Eteint';
  constructor( private appareilsService: AppareilsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const name=form.value['name'];
    const status=form.value['status'];
    this.appareilsService.addAppareil(name,status);
  }
}
