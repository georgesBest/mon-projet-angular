import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  secondes: number;
  title = 'mon-projet-angular';
  prenom = 'david';
  counterSubscription : any;
  constructor(){

  }

  ngOnInit () {
    //on créé un obserbable interval
    let counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      //reception de donnees
      (value)=> {
        this.secondes = value;
      },
      (error)=>{
          console.log('erreur');
      },
      () =>{
        console.log('termine');
      }
    );
  }

  ngOnDestroy () {
    this.counterSubscription.unsubscribe();
  }
}
