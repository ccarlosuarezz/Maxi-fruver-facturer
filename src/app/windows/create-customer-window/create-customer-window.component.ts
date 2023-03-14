import { Component, OnInit } from '@angular/core';
import { FieldTypesService } from '../../services/field-types.service';
import Swal from 'sweetalert2';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer-window',
  templateUrl: './create-customer-window.component.html',
  styleUrls: ['./create-customer-window.component.css']
})
export class CreateCustomerWindowComponent implements OnInit {

  public personTypes: any = [];
  public documentTypes: any = [];
  public addressTypes: string[] = [];

  public id_cliente: string = '';
  public apellidos_cliente: string= '';
  public nombres_cliente: string = '';
  public tipo_direccion_cliente: string = '';
  public numero1_direccion_cliente: string = '';
  public numero2_direccion_cliente: string = '';
  public numero3_direccion_cliente: string = '';
  public correo_electronico_cliente: string = '';
  public fecha_nacimiento_cliente: string = '';
  public numero_telefono_cliente: string = '';
  public recibir_ofertas: boolean = false;
  public id_tipo_documento: number = 0;
  public id_tipo_persona: number = 0;

  public isLoad: boolean = false;

  constructor(private router: Router, private fieldTypes: FieldTypesService, private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getPersonType();
    this.getDocumentType();
    this.getAddressTypes();
  }

  public getPersonType() {
    this.fieldTypes.getPersonTypes().subscribe((res) => {
      if (res.ok) {
        this.personTypes = res.result;
      } else {
        console.log(res.error);
      }
    });
  }

  public getDocumentType() {
    this.fieldTypes.getDocumentTypes().subscribe((res) => {
      if (res.ok) {
        this.documentTypes = res.result;
      } else {
        console.log(res.error);
      }
    });
  }

  public getAddressTypes() {
    this.addressTypes = this.fieldTypes.getAddress();
  }

  public createProvider() {
    this.isLoad = true;
    const customer = {
      id_cliente: this.id_cliente,
      apellidos_cliente: this.apellidos_cliente,
      nombres_cliente: this.nombres_cliente,
      direccion_facturacion_cliente: this.validateAddressFields(),
      correo_electronico_cliente: this.correo_electronico_cliente,
      fecha_nacimiento_cliente: this.fecha_nacimiento_cliente,
      numero_telefono_cliente: this.numero_telefono_cliente,
      recibir_ofertas: this.recibir_ofertas,
      id_tipo_documento: Number(this.id_tipo_documento),
      id_tipo_persona: Number(this.id_tipo_persona)
    };
    this.customersService.createCustomer(customer).subscribe((res) => {
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
    if (this.numero2_direccion_cliente != '' && this.numero3_direccion_cliente != '') {
      return this.tipo_direccion_cliente+' '+this.numero1_direccion_cliente+' # '+this.numero2_direccion_cliente+'-'+this.numero3_direccion_cliente;
    } else {
      return this.tipo_direccion_cliente+' '+this.numero1_direccion_cliente;
    }
  }
}
