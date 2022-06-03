import { Component, OnInit } from '@angular/core';  
import { ModalController} from '@ionic/angular';
import { UserService } from './../services/user.service';
import { Observable } from 'rxjs';
  
@Component({  
  selector: 'app-modal',  
  templateUrl: './modal.page.html',  
  styleUrls: ['./modal.page.scss'],  
})  
export class ModalPage implements OnInit {
  results: Observable<any>;
  
  constructor(public modalCtrl: ModalController, private userService: UserService) {}  
  
  ngOnInit() {
    this.results = this.userService.loadUser();
  }  
  dismiss() {  
    this.modalCtrl.dismiss();  
  }  
}