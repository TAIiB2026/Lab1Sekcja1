import { Component } from '@angular/core';
import { Person } from '../../classes/person';
import { PeopleRepositoryService } from '../../services/people-repsitory.service';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.html',
  styles: ``
})
export class People {
  public people: Person[] = [];

  constructor(peopleRepository: PeopleRepositoryService) {
    this.people = peopleRepository.get();
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
