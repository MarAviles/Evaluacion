import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl  } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { Plazo } from 'src/app/interfaces/plazo';
import { PlazoService } from 'src/app/services/plazos/plazo.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  status1 = false;
  plazos: Plazo[] = [];
  abonoNormal = 0;
  abonoPuntual = 0;
  semanas = 0;

  select = '';

  closeResult = '';


  productos: Producto[] = [];

  constructor(private ProductoService: ProductoService, private PlazoService: PlazoService,
              private FormBuilder: FormBuilder, private modalService: NgbModal) { }

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

  obtenerProducto(precio: number, content: any){
    this.status = true;
    this.precio = precio;
    this.open(content);

    this.plazos.forEach(element => {
      console.log(this.plazos)
    });
  }

  obtenerCotizacion(semanas: number, tasanormal: number, tasapuntual: number){
      this.semanas = semanas;
      this.abonoNormal = ((this.precio * tasanormal) + this.precio) / semanas;
      this.abonoPuntual = ((this.precio * tasapuntual) + this.precio) / semanas;
      this.status1 = true;
  }

  private obtenerPlazos(){
    this.PlazoService.obtenerPlazos().subscribe((res) =>{
    console.log(res);
    this.plazos = res;
    });
  }

  //Modal
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
