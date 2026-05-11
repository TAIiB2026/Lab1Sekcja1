import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PEOPLE_REPOSITORY_TOKEN } from '../tokens/people-repository.token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formularz',
  standalone: false,
  templateUrl: './formularz.html',
  styles: ``,
})
export class Formularz {
  private readonly service = inject(PEOPLE_REPOSITORY_TOKEN);
  private readonly router = inject(Router);

  onSubmit(form: NgForm) {
    console.log(form.value);
    const dateOfBirth: Date = new Date(form.value['dateOfBirth']);
    this.service.Post(form.value['imie'], form.value['nazwisko'], 
    dateOfBirth).subscribe({
        next: (res) => {
          if(res) {
            this.router.navigateByUrl('osoby');
          } else {
            alert("Nie udało się dodać nowej osoby.")
          }
        }
      });
  }
}
