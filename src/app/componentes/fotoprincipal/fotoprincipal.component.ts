import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-fotoprincipal',
  templateUrl: './fotoprincipal.component.html',
  styleUrls: ['./fotoprincipal.component.scss']
})
export class FotoprincipalComponent implements OnInit {

  Miportfolio:any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void { 
    
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      
      console.log(data);
    this.Miportfolio=data;
  });
}}



