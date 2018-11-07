import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AppareilsService} from '../services/Appareils.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-appareil',
  templateUrl: './add-appareil.component.html',
  styleUrls: ['./add-appareil.component.scss']
})
export class AddAppareilComponent implements OnInit {

  defaultStatus:string = 'Eteint';
  constructor( private appareilsService: AppareilsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const name=form.value['name'];
    const status=form.value['status'];
    this.appareilsService.addAppareil(name,status);
    this.router.navigate(['appareils']);
  }
}
