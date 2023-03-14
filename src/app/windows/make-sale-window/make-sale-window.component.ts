import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FieldTypesService } from '../../services/field-types.service';

@Component({
  selector: 'app-make-sale-window',
  templateUrl: './make-sale-window.component.html',
  styleUrls: ['./make-sale-window.component.css']
})
export class MakeSaleWindowComponent implements OnInit {

  public table_header: string[] = ['Código', 'Producto', 'Unidad', 'Cantidad', 'Valor unitario', 'Total', ''];
  public default_data: string[] = ['-', '-', '-', '-', '-', '-', '-'];
  public isActiveModal: boolean = false;
  public showModal: string = 'animate__animated animate__fadeOutUp';
  public searchProduct: string = '';
  public productsForSale: any[] = [];
  public unitName: string = '';
  
  constructor(private fieldTypesService: FieldTypesService) { }
  
  ngOnInit(): void {
    
  }

  public showSearchProductsModal() {
    if(this.searchProduct !== '') {
      this.isActiveModal = true;
      this.showModal = 'animate__animated animate__fadeInDown';
    } else {
      Swal.fire({
        title: '',
        text: 'No hay parametros de busqueda',
        icon:'warning',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    }
  }

  public closeSearchProductsModal() {
    this.showModal = 'animate__animated animate__fadeOutUp';
    setTimeout(() => {
      this.isActiveModal = false;
    }, 1000);
  }

  public addProductForSale(newProduct: any) {
    this.productsForSale.push(newProduct);
    console.log(this.productsForSale);
  }

  public getMeasurementUnitByID(id_unit: number): string {
    let nameUnit = '';
    switch (id_unit) {
      case 400:
        nameUnit = 'Kg';
        break;
      case 401:
        nameUnit = 'lb';
        break;
      case 402:
        nameUnit = 'Unidad';
        break;
      default:
        nameUnit = '';
    }
    return nameUnit;
    // return id_unit+'123';
    // this.fieldTypesService.getMeasurementUnitByID(id_unit).subscribe((res) => {
    //   if(res.ok) {
    //     this.unitName = res.result.nombre_unidad_medida;
    //   }
    // });
  }

  public notFound() {
    Swal.fire({
      title: '',
      text: 'Función aun no disponible',
      icon:'info',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  }
}