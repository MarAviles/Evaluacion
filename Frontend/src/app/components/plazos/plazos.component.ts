import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Plazo } from 'src/app/interfaces/plazo';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PlazoService } from 'src/app/services/plazos/plazo.service';

@Component({
  selector: 'app-plazos',
  templateUrl: './plazos.component.html',
  styleUrls: ['./plazos.component.css']
})
export class PlazosComponent implements OnInit {

  formularioRegistroPlazo = this.FormBuilder.group({
    semanas: 0,
    tasanormal: 0,
    tasapuntual: 0
  });

  plazos: Plazo[]=[];
  closeResult = '';

  constructor(private FormBuilder: FormBuilder, private PlazoService: PlazoService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerPlazos();
  }

  private obtenerPlazos(){
    this.PlazoService.obtenerPlazos().subscribe((res) =>{
    console.log(res);
    this.plazos = res;
    });
  }

  guardarPlazo(){
  console.log(this.formularioRegistroPlazo.value);
      this.PlazoService.registrarPlazo(this.formularioRegistroPlazo.value).subscribe((res: any)=>{
        console.log(res);  
        this.obtenerPlazos(); 
      }, (err) =>{
        this.obtenerPlazos();
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
