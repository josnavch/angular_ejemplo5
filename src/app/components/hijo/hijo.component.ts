import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string = 'Nombre Hijo';
  @Output() cambioNombreHijo = new EventEmitter<string>();

  //constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

  cambiarNombre() {
    this.nombreHijo = "Juan Carlos";
    this.cambioNombreHijo.emit (this.nombreHijo);
    //this.dataService.nombreUsuario = this.nombreHijo;
  }

}
