import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-administrator-window',
  templateUrl: './main-administrator-window.component.html',
  styleUrls: ['./main-administrator-window.component.css']
})
export class MainAdministratorWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public logout() {
    localStorage.removeItem('token')
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
