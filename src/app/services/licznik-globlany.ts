import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class LicznikGloblany {
  private readonly licznikSubject = new BehaviorSubject<number>(0);

  public get licznik$(): Observable<number> {
    return this.licznikSubject.asObservable();
  }

  public podniesLicznik(): void {
    this.licznikSubject.next(this.licznikSubject.value + 1);
  }
}
