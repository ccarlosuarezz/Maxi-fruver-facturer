import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-main-system-window',
  templateUrl: './main-system-window.component.html',
  styleUrls: ['./main-system-window.component.css']
})
export class MainSystemWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  public closeWindow() {
    
  }
}
