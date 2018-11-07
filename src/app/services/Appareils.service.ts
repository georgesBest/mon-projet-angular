import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {AppareilModel} from '../models/appareil.model';

@Injectable()
export class AppareilsService {

    constructor(private httpClient: HttpClient) {

    }

    /*appareils = [
        {
          'name' : 'Machine à laver',
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
      //appareils: any[];
      appareils: AppareilModel[];
      switchOnAll(){
        for (let appareil of this.appareils){
          appareil.status = 'Allumé';
        }
      }

      switchOffAll(){
        for (let appareil of this.appareils){
          appareil.status = 'Eteint';
        }
      }

      switchOnOne(i){
        this.appareils[i].status= 'Allumé';
      }
      switchOffOne(i){
        this.appareils[i].status= 'Eteint';
      }

      getAppareilByIndex(i){
        return this.appareils[i];
      }

      addAppareil(name,status){
        const newAppareil = {'name' : name,'status':status};
        this.appareils.push(newAppareil);
        const postDb = this.httpClient.put('https://ma-domotique-angular-b782c.firebaseio.com/appareils.json',this.appareils);
        const maSub = postDb.subscribe (
          (value) => {
            console.log(value);
          },
          (error) => {
            console.log('Erreur : ' + error);
          },
          () => {
            console.log('fin');
          }
        );
      }

      saveAppareil(){
        const appareils1 = [
          {
            'name' : 'Machine à laver',
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
        ];
        //post est un observable
        const postDb = this.httpClient.put('https://ma-domotique-angular-b782c.firebaseio.com/appareils.json',appareils1);
        const maSub = postDb.subscribe (
          (value) => {
            console.log(value);
          },
          (error) => {
            console.log('Erreur : ' + error);
          },
          () => {
            console.log('fin');
          }
        );
        }

        getAppareils(){
          return  this.httpClient.get<any[]>('https://ma-domotique-angular-b782c.firebaseio.com/appareils.json');
        }

        //console.log(maSub);
      
}