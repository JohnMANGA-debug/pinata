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
      price: '15 000 FCFA',
      img: ['image/im1.jpg']
    },
    {
      id: 2,
      name: 'Piñata 2',
      price: '15 000 FCFA',
      img: ['image/im2.jpg']
    },
    {
      id: 3,
      name: 'Piñata 3',
      price: '12 000 FCFA',
      img: ['image/im3.jpeg','image/im31.jpeg']
    },
    {
      id: 4,
      name: 'Piñata 4', 
      price: '12 000 FCFA',
      img: ['image/im4.jpg', 'image/im41.jpg']
    },
    {
      id: 5,
      name: 'Piñata 5',   
      price: '15 000 FCFA',
      img: ['image/im5.jpg', 'image/im51.jpg']
    },
    {
      id: 6,
      name: 'Piñata 6', 
      price: '15 000 FCFA',
      img: ['image/im6.jpeg']
    },
    {
      id: 7,
      name: 'Piñata 7',
      price: '15 000 FCFA',
      img: ['image/im7.jpg']
    },
    {
      id: 8,
      name: 'Piñata 8',
      price: '15 000 FCFA',
      img: ['image/im8.jpg']
    },
    {
      id: 9,
      name: 'Piñata 9',
      price: '15 000 FCFA',
      img: ['image/im9.jpg', 'image/im91.jpg']
    },
    {
      id: 10,
      name: 'Piñata 10',
      price: '15 000 FCFA',
      img: ['image/im10.png']
    },
    {
      id: 11,
      name: 'Piñata 11',
      price: '25 000 FCFA', 
      img: ['image/im11.jpg']
    },
    { 
      id: 12,
      name: 'Piñata 12',
      price: '15 000 FCFA',
      img: ['image/im12.jpg']
    },
    {
      id: 13,
      name: 'Piñata 13',
      price: '25 000 FCFA',
      img: ['image/im13.jpg', 'image/im131.jpg']
    },
    

    {
      id: 14,
      name: 'Piñata 14',
      price: '15000 FCFA',
      img: ['image/im14.jpg']
    },
    
    {
      id: 15,
      name: 'Piñata 15',
      price: '15000 FCFA',
      img: ['image/im15.jpeg']
    },

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
// ===== TELECHARGER IMAGE AVEC FILIGRANE ===== //
  // ⚠️ ATTENTION: Cette fonction peut poser des risques de sécurité
  // Elle permet le téléchargement d'images avec filigrane
  // Utilisez uniquement avec des images de domaines autorisés
  downloadImageWithWatermark(imageUrl: string): void {
  // Vérifier que l'URL est d'un domaine autorisé (optionnel mais recommandé)
  // const allowedDomains = ['image/', 'yourdomain.com'];
  // if (!allowedDomains.some(domain => imageUrl.includes(domain))) return;
  
  const img = new Image();
  // ⚠️ crossOrigin 'anonymous' peut poser des risques - à restreindre en production
  // img.crossOrigin = 'anonymous';
  img.src = imageUrl;

  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    canvas.width = img.width;
    canvas.height = img.height;

    // Dessiner l'image
    ctx.drawImage(img, 0, 0);

    // Style du texte
    ctx.font = 'bold 48px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // blanc transparent
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Rotation pour rendre le vol plus difficile
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-Math.PI / 6);

    // Texte du filigrane
    ctx.fillText('Thiès Piñata', 0, 0);

    // Télécharger l'image
    const link = document.createElement('a');
    link.download = 'thies-pinata.jpg';
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
  };
}
  
}




