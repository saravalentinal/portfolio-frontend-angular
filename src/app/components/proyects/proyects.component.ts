import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit{

  projects:any;

  constructor(private dataPortfolio:PortfolioService) {}

  ngOnInit(): void{
    this.dataPortfolio.obtainDataProject().subscribe(data => {
      this.projects = data;
      console.log("esta es la data 1 " + this.projects);
    });
    console.log('hola ramiro' + this.projects)
  }

}
