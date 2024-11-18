import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule,MatButtonModule,FontAwesomeModule,MatIconModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  icon = faScrewdriverWrench;

}
