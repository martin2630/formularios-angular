import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public paises: Object[] = [
    {
      codigo: 'CRI',
      pais: 'Costa rica'
    },
    {
      codigo: 'MX',
      pais: 'Mexico'
    },  {
      codigo: 'CO',
      pais: 'Colombia'
    },
    {
      codigo: 'EUA',
      pais: 'EUA'

    }]

  public usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Masculino',
    acepta: false
  }

  sexos : string[] = ['Masculino', 'Femenino'];


  guardar(forma: NgForm) {
    console.log('formulario');
    console.log(forma);
    console.log('value', forma.value);
    console.log('usuario');
    console.log(this.usuario);
  }

}
