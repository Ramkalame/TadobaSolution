import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface CarouselData {
  imgUrl: string;
  imgTitle: string;
  imgDescription: string;
  navUrl: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit, OnDestroy {
  carouselData: CarouselData[] = [
    {
      imgUrl:
        'https://res.cloudinary.com/dziu7iyz1/image/upload/v1731841312/solar-8244680_1280_hldyre.jpg',
      imgTitle: 'INSTALLATION',
      imgDescription:'To make the sliding transition smoother between images, we need to adjust both the CSS and TypeScript to ensure that transitions between images are fluid and instantaneous, ',
      navUrl: 'path/to/nav1',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dziu7iyz1/image/upload/v1731841312/Tadoba_solar_service_20211222081314_omaxok.jpg',
      imgTitle: 'MAINTANANCE',
      imgDescription:'To make the sliding transition smoother between images, we need to adjust both the CSS and TypeScript to ensure that transitions between images are fluid and instantaneous',
      navUrl: 'path/to/nav2',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dziu7iyz1/image/upload/v1731841312/cyber-2377718_1280_wau8ad.jpg',
      imgTitle: 'ELECTRONIC DEVICES',
      imgDescription:'To make the sliding transition smoother between images, we need to adjust both the CSS and TypeScript to ensure that transitions between images are fluid and instantaneous, ',
      navUrl: 'path/to/nav3',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dziu7iyz1/image/upload/v1731841311/Tadoba_solar_service_20211221113632_zpmrlp.jpg',
      imgTitle: 'COMMISSIONING',
      imgDescription:'To make the sliding transition smoother between images, we need to adjust both the CSS and TypeScript to ensure that transitions between images are fluid and instantaneous',
      navUrl: 'path/to/nav4',
    },
  ];

  @Input() indicators: boolean = true;
  @Input() autoSlide: boolean = false;
  @Input() slideInterval: number = 1000;

  selectedIndex: number = 0;
  private autoSlideInterval: any;

  private swipeCoord: [number, number] = [0, 0];
  private swipeTime: number = new Date().getTime();

  ngOnInit(): void {
    if (this.autoSlide && this.carouselData.length > 0) {
      this.autoSlideImages();
    }
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  autoSlideImages() {
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number) {
    this.selectedIndex = index;
    this.triggerTransition();
  }

  onPrevClick() {
    this.selectedIndex = this.selectedIndex === 0 ? this.carouselData.length - 1 : this.selectedIndex - 1;
    this.triggerTransition();
  }

  onNextClick() {
    this.selectedIndex = this.selectedIndex === this.carouselData.length - 1 ? 0 : this.selectedIndex + 1;
    this.triggerTransition();
  }

  triggerTransition() {
    // Ensure smooth transition on each image change
    setTimeout(() => {
      this.carouselData.forEach((_, i) => {
        // Reset transitions after a short delay to allow the transitions to occur.
        const imgElement = document.querySelector(`.img-container img:nth-child(${i + 1})`);
        if (imgElement) {
          imgElement.classList.remove('slide-out', 'slide-in');
        }
      });
    }, 500); // Adjust time to match transition duration
  }

  onSwipe(e: TouchEvent, when: string) {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 && Math.abs(direction[0]) > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
        if (direction[0] < 0) {
          // Swipe left - next image
          this.onNextClick();
        } else {
          // Swipe right - previous image
          this.onPrevClick();
        }
      }
    }
  }
}
