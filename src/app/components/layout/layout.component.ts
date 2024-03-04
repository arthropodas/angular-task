import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DetailsService } from '../../services/details.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,DetailsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  title: string = "value inside the title";
  name: string='';
  address:string ='';
  education:string ='';

  constructor (private detailsService: DetailsService){}
  onSubmit(){
    this.detailsService.setUserDetails({
      name : this.name,
      address: this.address,
      eduction:this.education

    })
  }

}

