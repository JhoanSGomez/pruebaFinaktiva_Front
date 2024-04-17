import { Component, OnInit } from '@angular/core';
// Importacion de servicios
import { ClientService } from '../../client.service';
// Importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Para las ventana modales
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEvent implements OnInit {
  hide = true;
  //grupo de controles de nuestro formulario
  form!: FormGroup;

  //inyeccion de dependencias
  constructor(private client: ClientService, private fb: FormBuilder, private router: Router) { }

  get botonDeshabilitado(): boolean {
    return !this.form.valid;
  }

  //en ngOnInit() metemos todas las instrucciones que queremos que se ejecuten apenas se cree nuestro componente
  ngOnInit(): void {

    this.form = this.fb.group({
      fecha: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });

  }

  limpiarCampos(regreso:any){
    this.form.reset();
  }


  onSubmit() {
    if (this.form.valid) {
      console.log('Valores del formulario:', this.form.value);
      this.client.postRequestEvent('https://r948b5z3pd.execute-api.us-east-1.amazonaws.com/dev/event/register', {
        fecha: this.form.value.fecha,
        descripcion: this.form.value.descripcion,
        tipo: "FORM"
      }).subscribe(
        (response: any) => {
          console.log(response);
          //this.dataResponse = response;

          Swal.fire({
            icon: 'success',
            title: response.message,
            background: '#fff',
            confirmButtonColor: '#0d6efd'
          });
          //this.hide=false;

        },
        (error:any) => {
          console.log(error.status);
          Swal.fire({
            icon: 'error',
            title: error.error.message,
            background: '#fff',
            confirmButtonColor: '#0d6efd'
          });
        }
      );
      
    } else {
      console.log('Form error');
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        background: '#fff',
        confirmButtonColor: '#0d6efd'
      });
    }
  }
}
