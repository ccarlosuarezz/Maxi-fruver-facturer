import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FieldTypesService } from '../../services/field-types.service';

@Component({
  selector: 'app-create-product-window',
  templateUrl: './create-product-window.component.html',
  styleUrls: ['./create-product-window.component.css']
})
export class CreateProductWindowComponent implements OnInit {

  public productCategories: any = [];
  public measurementUnits: any = [];
  public providers: any = [];

  public nombre_producto: string = '';
  public valor_compra: number = 0;
  public valor_venta: number = 0;
  public cantidad_stock: number = 0;
  public id_unidad_medida: number = 0;
  public id_categoria: number = 0;

  public isLoad: boolean = false;

  constructor(private router: Router, private productsService: ProductsService, private fieldTypesService: FieldTypesService) { }

  ngOnInit(): void {
    this.getProductCategories();
    this.getMeasurementUnits();
    this.getProviders();
  }

  public getProductCategories() {
    this.fieldTypesService.getProductCategories().subscribe((res) => {
      if (res.ok) {
        this.productCategories = res.result;
      } else {
        console.log(res.error);
      }
    });
  }

  public getMeasurementUnits() {
    this.fieldTypesService.getMeasurementUnits().subscribe((res) => {
      if (res.ok) {
        this.measurementUnits = res.result;
      } else {
        console.log(res.error);
      }
    });
  }

  public getProviders() {
    this.fieldTypesService.getProviders().subscribe((res) => {
      if (res.ok) {
        this.providers = res.result;
      } else {
        console.log(res.error);
      }
    });
  }

  public createProduct() {
    this.isLoad = true;
    const product = {
      nombre_producto: this.nombre_producto,
      valor_compra: this.valor_compra,
      valor_venta: this.valor_venta,
      cantidad_stock: this.cantidad_stock,
      id_unidad_medida: this.id_unidad_medida,
      id_categoria: this.id_categoria
    }
    this.productsService.createProduct(product).subscribe((res) => {
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
