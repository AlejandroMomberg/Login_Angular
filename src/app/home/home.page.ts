import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public loadingCtrl:LoadingController, public actionSheetController: ActionSheetController) {}
  

  async mensajeCargando() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 2000
    });

    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Información',
      cssClass: 'my-custom-class',
      buttons: [{
        text: '4to Semestre Ing. en informática',
        role: 'destructive',
        icon: 'reader',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Me dirijo hacia el sector del metro Las Mercedes.',
        icon: 'navigate',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: '+56965039767',
        icon: 'logo-whatsapp',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: '1.500',
        icon: 'logo-usd',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'Apuntarme',
        icon: 'hand-left',
        role: 'apuntarse',
        handler: () => {
          console.log('Left clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
