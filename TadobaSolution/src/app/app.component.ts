import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     HeaderComponent,
      HomeComponent,
       FooterComponent,
        TermsAndConditionComponent,
         AboutUsComponent,
          ContactUsComponent,
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TadobaSolution';
}
