import { Component } from '@angular/core';

interface feature {
  imgSrc: string;
  title: string;
  data: string;
}

@Component({
  selector: 'app-different',
  templateUrl: './different.component.html',
  styleUrls: ['./different.component.css'],
})
export class DifferentComponent {
  heading: string = "We're different";
  featureList: feature[] = [
    {
      imgSrc: '../../assets/icon-snappy-process.svg',
      title: 'Snappy Process',
      data: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
    },
    {
      imgSrc: '../../assets/icon-affordable-prices.svg',
      title: 'Affordable Prices',
      data: "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible",
    },
    {
      imgSrc: '../../assets/icon-people-first.svg',
      title: 'People First',
      data: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    },
  ];
  bannerTitle: string = 'Find out more about how we work';
  btnTitle: string = 'HOW WE WORK';
}
