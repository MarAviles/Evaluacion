import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl  } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { Plazo } from 'src/app/interfaces/plazo';
import { PlazoService } from 'src/app/services/plazos/plazo.service';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {

  formulario = this.FormBuilder.group({
    semanas: ''
  });

  nombre: FormControl = new FormControl('');
  precio: number = 0;
  status = false;
  plazos: Plazo[] = [];
  abonoNominal: number = 0;
  obonoPuntual: number = 0;

  productos: Producto[] = [];

  constructor(private ProductoService: ProductoService, private PlazoService: PlazoService, private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerPlazos();
  }

  //Obtener lista de productos registrados
  private obtenerProductos(){
    this.ProductoService.obtenerProductos().subscribe((res) =>{
    this.productos = res;
    });
  }

  buscarProducto(){
    console.log(this.nombre.value);
      this.ProductoService.buscarPalabra(this.nombre.value).subscribe((res: any)=>{
        this.productos = res;       
      });
  }

  obtenerProducto(precio: number){
    this.status = true;
    this.precio = precio;
  }

  calcularCotizacion(){
    console.log(this.formulario.value)
  }

  private obtenerPlazos(){
    this.PlazoService.obtenerPlazos().subscribe((res) =>{
    console.log(res);
    this.plazos = res;
    });
  }

}
