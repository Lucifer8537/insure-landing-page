import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  headerSub: Subject<boolean> = new Subject<boolean>();
  setHeaderSub = (val: boolean) => {
    this.headerSub.next(val);
  };
}
