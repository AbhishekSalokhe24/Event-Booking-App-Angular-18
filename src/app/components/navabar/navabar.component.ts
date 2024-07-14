import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-navabar',
  standalone: true,
  imports: [MenubarModule,RouterLink],
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.css'
})
export class NavabarComponent implements OnInit {
  
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'EventAPP',
        icon: '',
        routerLink:'home'
    },
      {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink:'home'
      },
      {
          label: 'My Bookings',
          icon: 'pi pi-bookmark',
          routerLink:'bookings'
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          routerLink:'contact'
      }
  ]
  }

 


  
}
