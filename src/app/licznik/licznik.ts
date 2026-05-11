import { Component, inject } from '@angular/core';
import { LicznikLokalny } from '../services/licznik-lokalny';
import { LicznikGloblany } from '../services/licznik-globlany';
import { LicznikSterownika } from '../services/licznik-sterownika';

@Component({
  selector: 'app-licznik',
  standalone: false,
  templateUrl: './licznik.html',
  styles: ``,
  providers: [LicznikLokalny]
})
export class Licznik {
  public readonly licznikGlobalny = inject(LicznikGloblany);
  public readonly licznikSterownika = inject(LicznikSterownika);
  public readonly licznikLokalny = inject(LicznikLokalny);

  PodniesLicznikGlobalny(): void {
    this.licznikGlobalny.podniesLicznik();
  }

  PodniesLicznikLokalny(): void {
    this.licznikLokalny.podniesLicznik();
  }

  PodniesLicznikSterownika(): void {
    this.licznikSterownika.podniesLicznik();
  }
}
