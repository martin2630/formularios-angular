import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  forma: FormGroup;

  usuario: any = {

    nombrecompleto: {
      nombre: 'martin',
      apellido: 'castillo'
    },
    correo: 'aldair.castilloc@gmail.com',
    // pasatiempos: ['dormir', 'comer', 'estudiar']


  }






  constructor() {
    console.log(this.usuario);


    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl( '' , [
          Validators.required,
          Validators.minLength(5)
        ]),
        'apellido': new FormControl('', [Validators.required, this.noherrera ]),
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', [
        Validators.required,
      ], this.existeUsuario),
      'password1': new FormControl('', [
        Validators.required,
      ]),
      'password2': new FormControl(),
    });

    // this.forma.setValue( this.usuario );
    this.forma.controls['password2'].setValidators(
      [
        Validators.required,
        this.noIguales
      ]);

    this.forma.controls['username'].valueChanges.subscribe(data => {
      console.log(data);
    });
    this.forma.controls['username'].statusChanges.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    this.forma.reset();
  }

  agregarPasatiempos() {
    console.log(this.forma);
    console.log(this.usuario);
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'strider') {
              resolve ({ existe: true });

            } else {
              resolve (null);
            }
        }, 3000);
      })

    return promesa;
  }

  noherrera(control: FormControl): { [s: string]: boolean } {

    if (control.value === 'herrera') {
      return {
        noherrera: true
      }
    }

    return null;
  }

  noIguales(control: FormControl): { [s: string]: boolean } {
    let forma: any = this;

    if (control.value !== forma.controls['password1'].value ) {
      return {
        noiguales: true
      }
    }

    return null;
  }

}
