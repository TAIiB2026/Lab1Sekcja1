import { InjectionToken } from "@angular/core";
import { PeopleRepositoryInterface } from "../interfaces/people-repository.interface";

export const PEOPLE_REPOSITORY_TOKEN = 
    new InjectionToken<PeopleRepositoryInterface>("PEOPLE_REPOSITORY_TOKEN");