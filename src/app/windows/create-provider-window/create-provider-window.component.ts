import { Component, OnInit } from '@angular/core';
import { FieldTypesService } from '../../services/field-types.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-create-provider-window',
  templateUrl: './create-provider-window.component.html',
  styleUrls: ['./create-provider-window.component.css']
})
export class CreateProviderWindowComponent implements OnInit {

  public personType: any = [];
  public documentType: any = [];
  public addressType: string[] = [];

  public id_proveedor: number = 0;
  public apellidos_proveedor: string = '';
  public nombres_proveedor: string = '';
  public correo_electronico_proveedor: string = '';
  public fecha_nacimiento_proveedor: string = '';
  public tipo_direccion_proveedor: string = '';
  public numero1_direccion_proveedor: string = '';
  public numero2_direccion_proveedor: string = '';
  public numero3_direccion_proveedor: string = '';
  public numero_telefono_proveedor: string = '';
  public id_tipo_persona: number = 0;
  public id_tipo_documento: number = 0;

  public isLoad: boolean = false;

  constructor(private router: Router, private fieldTypes: FieldTypesService, private providerService: ProvidersService) { }

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

  public getAddressType() {
    this.addressType = this.fieldTypes.getAddress();
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

  public createProvider() {
    this.isLoad = true;
    const provider = {
      id_proveedor: this.id_proveedor,
      apellidos_proveedor: this.apellidos_proveedor,
      nombres_proveedor: this.nombres_proveedor,
      direccion_facturacion_proveedor: this.validateAddressFields(),
      correo_electronico_proveedor: this.correo_electronico_proveedor,
      fecha_nacimiento_proveedor: this.fecha_nacimiento_proveedor,
      numero_telefono_proveedor: this.numero_telefono_proveedor,
      id_tipo_persona: this.id_tipo_persona,
      id_tipo_documento: this.id_tipo_documento
    };
    this.providerService.createProvider(provider).subscribe((res) => {
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
    if (this.numero2_direccion_proveedor != '' && this.numero3_direccion_proveedor != '') {
      return this.tipo_direccion_proveedor+' '+this.numero1_direccion_proveedor+' # '+this.numero2_direccion_proveedor+'-'+this.numero3_direccion_proveedor;
    } else {
      return this.tipo_direccion_proveedor+' '+this.numero1_direccion_proveedor;
    }
  }
}
