import { Component } from '@angular/core';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
 public title = 'Details';
 constructor(public detailsService: DetailsService) {}
 
}

// user-details.model.ts
export interface UserDetails {
  name: string;
  address: string;
  education: string;
  
}
