import { ChangeDetectorRef, Component, inject, Inject } from '@angular/core';
import { Person } from '../../classes/person';
import { PeopleRepositoryService } from '../../people-repository';
import { PEOPLE_REPOSITORY_TOKEN } from '../../tokens/people-repository.token';
import { PeopleRepositoryInterface } from '../../interfaces/people-repository.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.html',
  styles: ``
})
export class People {
  public people: Person[] = [];

  // public people$: Observable<Person[]>;

  private readonly cdr = inject(ChangeDetectorRef);

  constructor(@Inject(PEOPLE_REPOSITORY_TOKEN) peopleRepository: PeopleRepositoryInterface) {
    // this.people$ = peopleRepository.Get();

    const people$ = peopleRepository.Get();
    const sub: Subscription = people$.subscribe({
      next: (val) => {
        console.log('next',val);
        console.log(val[0].getName());
        this.people = val;
        this.cdr.detectChanges();
      }, 
      error: (err) => {
        console.log('error', err);
      },
      complete: () => {
        console.log('complete');
      }
    })

    // sub.unsubscribe();
  }

  trackByPersonId(index: number, person: Person): number {
    return person.id;
  }

  calculateAge(person: Person): number {
    const currentDate = new Date(Date.now());
    console.log('calculateAge')
    return currentDate.getFullYear() - person.dateOfBirth.getFullYear();
  }
}
