import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientService } from '../../client.service';
// Importacion de clases necesarias para manejar formularios reactivos y el routing
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consult-event',
  templateUrl: './consult-event.component.html',
  styleUrls: ['./consult-event.component.css']
})
export class ConsultEvent implements OnInit {
  dataSource = new MatTableDataSource();
  customers!: Array<any>;
  displayedColumns: string[] = ['fecha', 'descripcion', 'tipo'];
  form!: FormGroup;

  @Input() data: any;
  @Input() hideInicio: any;
  @Output() cambioEstado = new EventEmitter<any>();

  //inyeccion de dependencias
  constructor(private client: ClientService, private fb: FormBuilder, private router: Router) { }

  //en ngOnInit() metemos todas las instrucciones que queremos que se ejecuten apenas se cree nuestro componente
  ngOnInit(): void {
     this.form = this.fb.group({
      tipo: [],
      fechaInicio: [],
      fechaFin: [],
    }); 

  }

  onSubmit() {
    if (this.form.valid) {
      let tipo="", fechaIni= "", fechaFin="";
      if(this.form.value.tipo != null || this.form.value.fechaIni != null || this.form.value.fechaFin != null){
        tipo=this.form.value.tipo;
      }
      console.log('Valores del formulario:', this.form.value);
      let url = `https://r948b5z3pd.execute-api.us-east-1.amazonaws.com/dev/event/consult?tipo=${tipo}&fechaInicio=${fechaIni}&fechaFin=${fechaFin}`;
      this.client.getWallet(url, {
      }).subscribe(
        (response: any) => {
          console.log(response);
          this.customers = response;
          this.dataSource.data = this.customers;

          Swal.fire({
            icon: 'info',
            title:  response.mensaje,
            background: '#fff',
            confirmButtonColor: '#0d6efd'
          });
        },
        (error:any) => {
          console.log(error.status);
          Swal.fire({
            icon: 'error',
            title: error.error.mensaje,
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
