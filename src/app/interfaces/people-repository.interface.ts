import { Observable } from "rxjs";

export interface PeopleRepositoryInterface {
    Post(name: string, surname: string, 
        dateOfBirth: Date): Observable<boolean>;
}