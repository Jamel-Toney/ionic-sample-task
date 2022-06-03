import { Component } from '@angular/core';
import { ModalPage } from '../modal/modal.page';
import { ModalController} from '@ionic/angular';  

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController) {}

  async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: ModalPage  
    });  
    return await modal.present();  
  }
}
