import { Component, OnInit } from '@angular/core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  faGithubAlt = faGithubAlt;
  faLinkedin = faLinkedin;

  footer:any;

  constructor(private dataPortfolio:PortfolioService) {}

  ngOnInit(): void{
    this.dataPortfolio.obtainData().subscribe(data => {
      console.log(data);
      this.footer = data.footer;
    });
  }

}
