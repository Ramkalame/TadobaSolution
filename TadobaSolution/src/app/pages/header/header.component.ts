import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBoxOpen, faBuildingCircleArrowRight, faGears, faPaste, faPeopleGroup, faUserShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hamBurgerMenu = faBars
  service=faGears
  product=faBoxOpen
  dealer=faBuildingCircleArrowRight
  course=faPaste
  about=faPeopleGroup

}
