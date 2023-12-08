import { Component, Input } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() mobileView!: boolean;

  menuList: string[] = ['HOW WE WORK', 'BLOG', 'ACCOUNT'];
  btnLabel: string = 'VIEW PLANS';
  menu = false;

  constructor(private headerService: HeaderService) {}

  onClickMenu = () => {
    this.menu = !this.menu;
    this.headerService.setHeaderSub(this.menu);
  };
}
