import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insure-main',
  templateUrl: './insure-main.component.html',
  styleUrls: ['./insure-main.component.css'],
})
export class InsureMainComponent {
  @Input() mobileView!: boolean;
  mainHeading: string = 'Humanizing your insurance.';
  mainBody: string =
    "Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.";
  btnLabel: string = 'VIEW PLANS';
}
