import { Component, OnInit } from '@angular/core';
import { FieldTypesService } from '../../services/field-types.service';
import { of } from 'rxjs';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cashier-window',
  templateUrl: './create-cashier-window.component.html',
  styleUrls: ['./create-cashier-window.component.css']
})
export class CreateCashierWindowComponent implements OnInit {

  public personType: any = [];
  public documentType: any = [];
  public addressType: string[] = [];

  public idUsuario: number = 0;
  public apellidosUsuario: string = '';
  public nombresUsuario: string = '';
  public correoElectronicoUsuario: string = '';
  public fechaNacimientoUsuario: string = '';
  public tipoDireccionUsuario: string = '';
  public numero1direccionUsuario: string = '';
  public numero2direccionUsuario: string = '';
  public numero3direccionUsuario: string = '';
  public numeroTelefonoUsuario: string = '';
  public idTipoPersona: number = 0;
  public idTipoDocumento: number = 0;

  public isLoad: boolean = false;

  constructor(private router: Router, private fieldTypes: FieldTypesService, private userService: UsersService) { }

  ngOnInit(): void {
    this.getPersonType();
    this.getDocumentType();
    this.getAddressType();
  }

  public getPersonType() {
    this.fieldTypes.getPersonTypes().subscribe((res) => {
      if (res.ok) {
        this.personType = res.result;
      } else {
        console.log(res.error);
      }
    });
  }

  public getDocumentType() {
    this.fieldTypes.getDocumentTypes().subscribe((res) => {
      if (res.ok) {
        this.documentType = res.result;
      } else {
        console.log(res.error);
      }
    });
  }

  public getAddressType() {
    this.addressType = this.fieldTypes.getAddress();
  }

  public createUser() {
    this.isLoad = true;
    const user = {
      idUsuario: this.idUsuario,
      apellidosUsuario: this.apellidosUsuario,
      nombresUsuario: this.nombresUsuario,
      correoElectronicoUsuario: this.correoElectronicoUsuario,
      correoElectronicoAlternativoUsuario: this.correoElectronicoUsuario,
      fechaNacimientoUsuario: this.fechaNacimientoUsuario,
      direccionUsuario: this.validateAddressFields(),
      numeroTelefonoUsuario: this.numeroTelefonoUsuario,
      idTipoPersona: Number(this.idTipoPersona),
      idTipoDocumento: Number(this.idTipoDocumento)
    };
    this.userService.createCashier(user).subscribe((res) => {
      if (res.ok) {
        this.isLoad = false;
        Swal.fire({
          title: '',
          text:res.message,
          icon:'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        this.router.navigateByUrl('/main-administrator-window');
      } else {
        this.isLoad = false;
        Swal.fire({
          title: '',
          text:res.message,
          icon:'error',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      }
    });
  }

  public validateAddressFields(): string {
    if (this.numero2direccionUsuario != '' && this.numero3direccionUsuario != '') {
      return this.tipoDireccionUsuario+' '+this.numero1direccionUsuario+' # '+this.numero2direccionUsuario+'-'+this.numero3direccionUsuario;
    } else {
      return this.tipoDireccionUsuario+' '+this.numero1direccionUsuario;
    }
  }
}
