import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  formularioRegistro = this.FormBuilder.group({
    nombre:'',
    precio: 0,
  });

  productos: Producto[]=[];
  producto: Producto = {} as Producto;
  
  status = false;
  statusFormEditar = false;
  
  nombre: FormControl = new FormControl('')
  precio: FormControl = new FormControl(null)
  idProducto = 0;
    
  closeResult = '';

  constructor(private ProductoService: ProductoService, private FormBuilder: FormBuilder,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  //Obtener lista de productos registrados
  private obtenerProductos(){
    this.ProductoService.obtenerProductos().subscribe((res) =>{
    this.productos = res;
    });
  }

  //Mostrar y oculatar formulario de registro de productos
  registro(){
    if(this.status == false){
      this.status = true;
    }else {
      this.status = false;
    }  
  }

  //Guardar nuevo producto y editar producto
  guardarProducto(){
    let nombre = this.nombre.value;
    let precio = this.precio.value;
    if(this.idProducto === 0){
      console.log(this.formularioRegistro.value);
      this.ProductoService.registrarProducto(this.formularioRegistro.value).subscribe((res: any)=>{
        console.log(res);
        this.obtenerProductos();
      }, (err) =>{
        this.obtenerProductos();
      });
    }else{
      this.ProductoService.editarProducto(this.idProducto,nombre,precio).subscribe(() =>{
        this.obtenerProductos();
        this.idProducto= 0;
        this.nombre.setValue("")
        this.precio.setValue("")
        this.statusFormEditar = false;  
      })
    }
    this.obtenerProductos();
  }

  limpiarForm(){
    this.formularioRegistro.reset();
  }

  //Mostrar y ocultar formulario de edición de producto
  editar(){
    if(this.statusFormEditar == false){
      this.statusFormEditar = true;
    }else {
      this.statusFormEditar = false;
    }  
  }

  //Obtener producto por id
  obtenerProducto(id: number, content: any):void{
    this.ProductoService.obtenerProducto(id).subscribe(res => {
      this.statusFormEditar = true;
      console.log(res); 
      this.nombre.setValue(res.nombre)
      this.precio.setValue(res.precio)
      this.idProducto = res.id;
      this.open(content);
    })
  }

  
  eliminarProducto(id:number){
    this.ProductoService.eliminarProducto(id).subscribe(res =>{
      this.obtenerProductos();
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
