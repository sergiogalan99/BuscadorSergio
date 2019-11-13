import { TipoHabitacion } from './tipoHabitacion';
export class Habitacion {
	private _tipoHabitacion: TipoHabitacion;
	private _imagen: string;
	private _caracteristicasGenerales: string;
	private _localidad:string;
	private _precio: number;
	private _telefono: string;

	constructor(tipoHabitacion: TipoHabitacion, precio: number, imagen: string,caracteristicasGenerales:string,localidad:string,telefono:string) {
		this._tipoHabitacion = tipoHabitacion;
		this._precio = precio;
		this._imagen = imagen;
		this._caracteristicasGenerales = caracteristicasGenerales;
		this._localidad = localidad;
		this._telefono = telefono;

	}
	public set imagen(value: string) {
		this._imagen = value;
	}

	public get imagen(): string {
		return this._imagen;
	}
	public set telefono(value: string) {
		this._telefono = value;
	}

	public get telefono(): string {
		return this._telefono;
	}

public set caracteristicasGenerales(value: string) {
		this._caracteristicasGenerales = value;
	}

	public get caracteristicasGenerales(): string {
		return this._caracteristicasGenerales;
	}
	
public set localidad(value: string) {
		this._localidad = value;
	}

	public get localidad(): string {
		return this._localidad;
	}

	public get tipoHabitacion(): TipoHabitacion {
		return this._tipoHabitacion;
	}

	public get precio(): number {
		return this._precio;
	}

	public set tipoHabitacion(value: TipoHabitacion) {
		this._tipoHabitacion = value;
	}

	public set precio(value: number) {
		this._precio = value;
	}


}
