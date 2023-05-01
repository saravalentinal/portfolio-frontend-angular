import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerData: any;
  navData: any;

  constructor(private dataPortfolio: PortfolioService, private router: Router) { }

  ngOnInit(): void {
    this.dataPortfolio.obtainData().subscribe(data => {
      console.log(data);
      this.headerData = data.header;
      this.navData = data.nav;

      const element = document.querySelector("#" + window.location.hash.replace("#", ""));
      if (element) element.scrollIntoView();
    });
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isFragmentActive(fragment: string) {
    const currentFragment = this.router.parseUrl(this.router.url).fragment;
    if (fragment === currentFragment) {
      return true;
    }

    if (fragment === this.navData.options[0].id && !currentFragment) {
      return true;
    }
    return false;
  }
  

}
