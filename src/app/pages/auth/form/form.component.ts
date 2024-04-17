import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ACTIONS } from 'src/app/Shared/constants/constans';
import { AuthService } from '../services/auth.service';
import { ClientService } from 'src/app/client.service';
export interface OptionsForm {
  id: string;
  label: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hide: boolean = true;
  spinner: boolean = false;
  authForm!: FormGroup;
  signIn = ACTIONS.signIn;
  @Input() options!: OptionsForm;
  cities!: Array<any>;
  locals!: Array<any>;

  constructor(private readonly authSvc: AuthService, private clientSvc: ClientService, private readonly fb: FormBuilder, private readonly router: Router, private readonly toastrSvc: ToastrService) { }

  ngOnInit(): void {

    if (this.options.id === this.signIn) {
      this.initForm();
    } else {
      this.initFormSignUp();
    }
  }

  onSubmit(): void {
    if (this.options.id === this.signIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    });
  }

  private initFormSignUp(): void {
    this.authForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.min(1000000000)]],
      cityCode: ['', Validators.required],
      address: ['', Validators.required],
      localCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    });
  }

  login(): void {
    if (this.authForm.valid) {
      this.spinner = true;
      this.authSvc.postRequestUser('https://r948b5z3pd.execute-api.us-east-1.amazonaws.com/dev/user/login', {
        email: this.authForm.value.email,
        password: this.authForm.value.password
      }).subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem('token', response.token);
          setTimeout(() => {
            this.spinner = false;
            this.redirectUser();
          }, 1000);
        },
        (error: any) => {
          this.spinner = false;
          this.toastrSvc.warning("Usuario o contraseña incorrectos", "Advertencia");
          console.log(error.status);
        });
    } else {
      this.toastrSvc.warning("Faltan campos por llenar", "Advertencia");
      console.log("Form error");
    }
  }

  signUp(): void {
    if (this.authForm.valid) {
      this.spinner = true;
      this.authSvc.postRequestUser('https://r948b5z3pd.execute-api.us-east-1.amazonaws.com/dev/user/register', {
        name: this.authForm.value.name,
        phoneNumber: ""+this.authForm.value.phoneNumber,
        cityCode: this.authForm.value.cityCode,
        address: this.authForm.value.address,
        localCode: this.authForm.value.localCode,
        email: this.authForm.value.email,
        password: this.authForm.value.password
      }).subscribe(
        (response: any) => {
          console.log(response);
          this.toastrSvc.success("Registro exitoso", "Success");
          this.spinner = false;
          this.router.navigate(['/sign-in']);
        },
        (error: any) => {
          console.log(error.status);
        }
      );
    } else {
      this.toastrSvc.warning("Faltan campos por llenar", "Advertencia");
      console.log("Form error");
    }
  }

  private redirectUser(): void {
    this.router.navigate(['/register']);
  }
}