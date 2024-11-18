import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faCopyright, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  rightArrow=faAngleRight
  location = faLocationDot
  contact=faPhone
  email = faEnvelope
  instgram = faInstagram
  facebook = faFacebook
  twitter = faXTwitter
  youtube = faYoutube
  copyRight = faCopyright
  
  

}
