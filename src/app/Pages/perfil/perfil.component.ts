import { Component, OnInit } from '@angular/core';
import { dPersonales,iFinanciera} from './../../Models/perfil';
import * as $ from 'jquery';
import {PerfilService} from 'src/app/Services/perfil.service';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public dPersonales: dPersonales;
  public iFinanciera: iFinanciera;
  public txt = "Vista general de la cuenta";
  public btn = "Editar";
  public btnI = "Editar";
  public perfil = "block";
  public notificaciones = "none";
  

  constructor(private servicio: PerfilService) {
    this.dPersonales = new dPersonales(); 
    this.iFinanciera = new iFinanciera(); 
   }

  ngOnInit(): void {
    this.consultaruser();
  }

  editar(){
    this.txt = "Editar datos de perfil";
    this.btn = "Guardar";
    $("#btnGuardar").addClass("deshabilitar");
    this.editUser();
  }

  editarI(){
    this.btnI = "Guardar";
    $("#editarI").addClass("deshabilitar");
  }

  getCambio(e){
    console.log(e);
    if(e == 4){
      this.perfil = "none";
      this.notificaciones = "block";
    }else{
      this.perfil = "block";
      this.notificaciones = "none";
    }
  }

  consultaruser(){
    
    this.servicio.getUsers().subscribe(data => {
      this.dPersonales = data;
      this.dPersonales.indicativo =1;
    },
    
    );
  }

  editUser(){
    
    this.servicio.editUser(this.dPersonales).subscribe(
      (data:any) => {
        console.log(data);    
      }
      )
  }

  
}




