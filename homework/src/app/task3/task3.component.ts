import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
})
export class Task3Component implements OnInit {
  images: string[] = [
    'assets/ITVDN(Color).png',
    'assets/Angular.png',
    'assets/JS.png',
  ];

  currentIndex: number = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1) % this.images.length;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
  }

  @HostListener('window: keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }

  ngOnInit(): void {}
}
