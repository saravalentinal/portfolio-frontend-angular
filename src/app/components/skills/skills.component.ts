import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:any;

  constructor(private dataPortfolio:PortfolioService) {}

  ngOnInit(): void{
    this.dataPortfolio.obtainData().subscribe(data => {
      console.log(data);
      this.skills = data.skills;
    });
  }

}
