import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';


export interface Campaign{
  id : number,
  name : string;
}

const campaignsMock = [
  {id : 123, name : 'Mega September Sale'},
  {id : 124, name : 'Mega October Sale'},
  {id : 125, name : 'Mega November Sale'},
  {id : 126, name : 'Mega December Sale'},
  {id : 127, name : 'Mega January Sale'},
]

@Injectable({
  providedIn: 'root'
})

export class ProductsResolverResolver implements Resolve<Campaign[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Campaign[]> {
    // returning mock data with 1s delay to conceptualise this better!
    return of(campaignsMock).pipe(delay(1000));
  }
}


