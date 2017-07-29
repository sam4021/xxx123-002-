import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapDirective } from '../../directives/map/map';
import { ChatsPage } from '../../pages/chats/chats';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  // @ViewChild('map') mapElement: ElementRef;
  // map: any;

  constructor(public navCtrl: NavController) {

  }

  goToChats(){
    this.navCtrl.push(ChatsPage)
  }

}
