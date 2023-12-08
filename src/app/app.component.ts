import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from './services/header.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'insure-landing-page';
  mobileView!: boolean;
  menuOpen!: boolean;
  menuSub!: Subscription;
  constructor(private headerService: HeaderService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 678) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }

  ngOnInit(): void {
    this.onResize();
    this.menuSub = this.headerService.headerSub.subscribe(
      (val) => (this.menuOpen = val)
    );
  }

  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
  }
}
