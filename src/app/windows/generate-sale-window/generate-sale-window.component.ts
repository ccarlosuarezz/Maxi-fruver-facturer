import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generate-sale-window',
  templateUrl: './generate-sale-window.component.html',
  styleUrls: ['./generate-sale-window.component.css']
})
export class GenerateSaleWindowComponent implements OnInit {

  @Input() public searchProduct: string = '';
  @Output() public newProductEvent = new EventEmitter<any>();

  public productList: any[] = [];
  public isLoad: boolean = false;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.searchProductsByName();
  }

  public searchProductsByName() {
    this.isLoad = true;
    this.productService.findProduct(this.searchProduct).subscribe((res) => {
      this.isLoad = false;
      if(res.ok) {
        this.productList = res.result;
      } else {
        Swal.fire({
          title: '',
          text: res.message,
          icon:'info',
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

  public addNewProduct(product: any) {
    this.newProductEvent.emit(product);
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
  }
}
