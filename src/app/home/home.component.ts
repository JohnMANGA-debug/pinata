import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

products = [
    {
      id: 1,
      name: 'Piñata 1',
      price: '10 000 FCFA',
      img: ['image/im1.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 2,
      name: 'Piñata 2',
      price: '12 000 FCFA',
      img: ['image/im2.jpg','image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 3,
      name: 'Piñata 3',
      price: '15 000 FCFA',
      img: ['image/im3.jpg','image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 4,
      name: 'Piñata 4', 
      price: '9 000 FCFA',
      img: ['image/im4.jpg','image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 5,
      name: 'Piñata 5',   
      price: '11 000 FCFA',
      img: ['image/im5.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 6,
      name: 'Piñata 6', 
      price: '14 000 FCFA',
      img: ['image/im6.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 7,
      name: 'Piñata 7',
      price: '13 000 FCFA',
      img: ['image/im7.jpg','image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 8,
      name: 'Piñata 8',
      price: '16 000 FCFA',
      img: ['image/im8.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 9,
      name: 'Piñata 9',
      price: '10 500 FCFA',
      img: ['image/im9.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 10,
      name: 'Piñata 10',
      price: '12 500 FCFA',
      img: ['image/im10.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 11,
      name: 'Piñata 11',
      price: '15 500 FCFA', 
      img: ['image/im11.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    { 
      id: 12,
      name: 'Piñata 12',
      price: '17 000 FCFA',
      img: ['image/im12.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 13,
      name: 'Piñata 13',
      price: '18 500 FCFA',
      img: ['image/im13.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 14,
      name: 'Piñata 14',
      price: '20 000 FCFA',
      img: ['image/im14.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    },
    {
      id: 15,
      name: 'Piñata 15',
      price: '22 500 FCFA',
      img: ['image/im15.jpg', 'image/im2.jpg', 'image/im6.jpg', 'image/im8.jpg', 'image/im10.jpg']
    }
  ];


/* Pagination */
  itemsPerPage = 6;
  visibleCount = this.itemsPerPage;

  get visibleProducts() {
    return this.products.slice(0, this.visibleCount);
  }

  showMore(): void {
    this.visibleCount = Math.min(
      this.visibleCount + this.itemsPerPage,
      this.products.length
    );
  }

  showLess(): void {
    this.visibleCount = this.itemsPerPage;
  }

  hasMore(): boolean {
    return this.visibleCount < this.products.length;
  }

  canShowLess(): boolean {
    return this.visibleCount > this.itemsPerPage;
  }

  /* ===== GALERIE MODAL ===== */
  showGallery = false;
  selectedProduct: any = null;
  currentImageIndex = 0;

  openGallery(product: any): void {
    this.selectedProduct = product;
    this.currentImageIndex = 0;
    this.showGallery = true;
    document.body.style.overflow = 'hidden';
  }

  closeGallery(): void {
    this.showGallery = false;
    document.body.style.overflow = 'auto';
  }

  nextImage(): void {
    if (this.currentImageIndex < this.selectedProduct.img.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  /* defiler les images avec les fleches du clavier */
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.showGallery) return;

    switch (event.key) {
      case 'ArrowRight':
        this.nextImage();
        break;

      case 'ArrowLeft':
        this.prevImage();
        break;

      case 'Escape':
        this.closeGallery();
        break;
    }
  }
}









