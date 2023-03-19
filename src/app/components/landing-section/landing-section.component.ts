import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.css']
})
export class LandingSectionComponent implements OnInit{

  landingSection:any;

  constructor(private dataPortfolio:PortfolioService) {}

  ngOnInit(): void{
    this.dataPortfolio.obtainData().subscribe(data => {
      console.log(data);
      this.landingSection = data.landingSection;
    });
  }

}
