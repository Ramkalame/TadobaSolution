import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServiceCardComponent } from "../service-card/service-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CommonModule, MatButtonModule, MatIconModule, ServiceCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
