import { inject, Injectable } from '@angular/core';
import { PeopleRepositoryInterface } from './interfaces/people-repository.interface';
import { map, Observable } from 'rxjs';
import { Person } from './classes/person';
import { HttpClient } from '@angular/common/http';
import { PersonDTOInterface } from './interfaces/person-dto.interface';

@Injectable()
export class PeopleWebapi implements PeopleRepositoryInterface {
  private readonly URL: string = 'http://localhost:5199/api/People';

  private readonly httpClient = inject(HttpClient);

  Post(name: string, surname: string, dateOfBirth: Date): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  Get(): Observable<Person[]> {
    return this.httpClient.get<PersonDTOInterface[]>(this.URL)
      .pipe(map(x => x.map(y => {
        const [year, month, date] = y.dateOfBirth.split("-").map(Number);
        const dateOfBirth = new Date(year, month, date);
        return new Person(y.id, y.name, y.surname, dateOfBirth);
      })));
  }

  GetByID(id: number): Observable<Person> {
    throw new Error('Method not implemented.');
  }
}
