import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public loadingCtrl:LoadingController) {}

  async mensajeCargando() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 3000
    });

    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    
  }

}

