import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public loadingCtrl:LoadingController) { }

  ngOnInit() {
  }

  async mensajeCargando() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 1000
    });

    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    window.location.href="/home";
  }

}


