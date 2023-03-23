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
    this.dataPortfolio.obtainData().subscribe(data => {
      console.log(data);
      this.projects = data.projects;
    });
  }

}
