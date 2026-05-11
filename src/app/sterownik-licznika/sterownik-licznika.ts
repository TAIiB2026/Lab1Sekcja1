import { Component } from '@angular/core';
import { LicznikSterownika } from '../services/licznik-sterownika';
import { LicznikGloblany } from '../services/licznik-globlany';

@Component({
  selector: 'app-sterownik-licznika',
  standalone: false,
  templateUrl: './sterownik-licznika.html',
  styles: ``,
  providers: [LicznikSterownika]
})
export class SterownikLicznika {}
