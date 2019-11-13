import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../core/model/hotel';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.page.html',
  styleUrls: ['./habitacion.page.scss'],
})
export class HabitacionPage implements OnInit {

  public nombreHotel;
  public hotelesOriginales: Hotel[];
  public hotelAImprimir: Hotel[];
  public seleccionLike: boolean=true;
  toast: any;
  
  
  constructor(public router: Router,public toastController: ToastController) {
    this.nombreHotel = this.router.getCurrentNavigation().extras.state.habitacionEspecicifica;
    this.hotelesOriginales = this.router.getCurrentNavigation().extras.state.hoteles;
    this.hotelAImprimir=this.filtrarPorNombre(this.nombreHotel,this.hotelesOriginales);
   
  }
  ngOnInit() {
  }
  like(){
    this.seleccionLike=!this.seleccionLike;
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hotel añadido a Favoritos',
      duration: 1000,
      color: "dark"
    });
    toast.present();
  }

  
  
  private filtrarPorNombre(nombreHotel: string, hotelesOriginales: Hotel[]): Hotel[] {

    let hotelFiltrado = hotelesOriginales.filter(hotel => hotel.nombre == nombreHotel);
    return hotelFiltrado;
  }

}
