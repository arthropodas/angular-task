// details.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  userDetails: any = {};

  // constructor() {}

  setUserDetails(userDetails: any) {
    this.userDetails = userDetails;
  }
}

