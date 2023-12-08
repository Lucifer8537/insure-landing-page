import { Component, Input } from '@angular/core';

interface footerLabel {
  header: string;
  value: string[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() mobileView!: boolean;
  footerList: footerLabel[] = [
    {
      header: 'OUR COMPANY',
      value: ['HOW WE WORK', 'WHY INSURE?', 'VIEW PLANS', 'REVIEWS'],
    },
    {
      header: 'HELP ME',
      value: ['FAQ', 'TERMS OF USE', 'PRIVACY POLICY', 'COOKIES'],
    },
    {
      header: 'CONTACT',
      value: ['SALES', 'SUPPORT', 'LIVE CHAT'],
    },
    {
      header: 'OTHERS',
      value: ['CAREERS', 'PRESS', 'LICENSES'],
    },
  ];
}
