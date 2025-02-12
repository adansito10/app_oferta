import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone:false
})
export class MenuComponent {
  constructor(private navCtrl: NavController, private menuCtrl: MenuController) {}

  navigateTo(page: string) {
    this.navCtrl.navigateRoot(`/${page}`);
    this.menuCtrl.close(); 
  }
}
