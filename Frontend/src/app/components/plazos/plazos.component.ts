import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Plazo } from 'src/app/interfaces/plazo';
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
  status = false;

  constructor(private FormBuilder: FormBuilder, private PlazoService: PlazoService) { }

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
        console.log("Plazo guardado correctamente"); 
        this.status = false;      
      });
      this.obtenerPlazos();
  }

  registroPlazo(){
    if(this.status == false){
      this.status = true;
    }else {
      this.status = false;
    } 
  }
}
