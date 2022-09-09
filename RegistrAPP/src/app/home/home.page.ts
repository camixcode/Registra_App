import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { from } from 'rxjs';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder

} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {

    this.formularioLogin=this.fb.group({

      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)

    });



  }
async ingresar(){

    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre ==f.nombre && usuario.password == f.password){
      console.log('Ingresado');

    }else{ 
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos son incorrectos',
        buttons:['Aceptar']

      });
      await alert.present();
      return;

    }


}



}
