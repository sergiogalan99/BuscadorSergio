import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../core/model/hotel';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.page.html',
  styleUrls: ['./habitacion.page.scss'],
})
export class HabitacionPage implements OnInit {

  public nombreHotel;
  public hotelesOriginales: Hotel[];
  public hotelAImprimir: Hotel[];
  constructor(public router: Router) {
    this.nombreHotel = this.router.getCurrentNavigation().extras.state.habitacionEspecicifica;
    this.hotelesOriginales = this.router.getCurrentNavigation().extras.state.hoteles;
    this.hotelAImprimir=this.filtrarPorNombre(this.nombreHotel,this.hotelesOriginales);
   
  }
  ngOnInit() {
  }
  private filtrarPorNombre(nombreHotel: string, hotelesOriginales: Hotel[]): Hotel[] {

    let hotelFiltrado = hotelesOriginales.filter(hotel => hotel.nombre == nombreHotel);
    return hotelFiltrado;
  }

}
