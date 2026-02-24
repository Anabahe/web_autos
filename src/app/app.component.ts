import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Car {
    id: number;
    name: string;
    brand: string;
    price: number;
    year: number;
    image: string;
    category: string;
    speed: string;
    acceleration: string;
    featured: boolean;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'NovaDrive';

    // Navigation state
    mobileMenuOpen = false;

    // Featured cars data
    cars: Car[] = [
        {
            id: 1,
            name: 'Phantom GT-R',
            brand: 'NovaDrive',
            price: 125000,
            year: 2024,
            image: 'car1',
            category: 'Supercar',
            speed: '320 km/h',
            acceleration: '0-100 in 2.8s',
            featured: true
        },
        {
            id: 2,
            name: 'Velocity X',
            brand: 'NovaDrive',
            price: 98000,
            year: 2024,
            image: 'car2',
            category: 'Sports',
            speed: '290 km/h',
            acceleration: '0-100 in 3.2s',
            featured: true
        },
        {
            id: 3,
            name: 'Thunder RS',
            brand: 'NovaDrive',
            price: 156000,
            year: 2024,
            image: 'car3',
            category: 'Hypercar',
            speed: '350 km/h',
            acceleration: '0-100 in 2.5s',
            featured: true
        },
        {
            id: 4,
            name: 'Storm Elite',
            brand: 'NovaDrive',
            price: 89000,
            year: 2024,
            image: 'car4',
            category: 'Sports',
            speed: '280 km/h',
            acceleration: '0-100 in 3.5s',
            featured: false
        },
        {
            id: 5,
            name: 'Apex Pro',
            brand: 'NovaDrive',
            price: 112000,
            year: 2024,
            image: 'car5',
            category: 'Supercar',
            speed: '310 km/h',
            acceleration: '0-100 in 2.9s',
            featured: false
        },
        {
            id: 6,
            name: 'Fusion Z',
            brand: 'NovaDrive',
            price: 95000,
            year: 2024,
            image: 'car6',
            category: 'Sports',
            speed: '295 km/h',
            acceleration: '0-100 in 3.1s',
            featured: false
        }
    ];

    // Filter state
    selectedCategory = 'all';
    categories = ['all', 'Sports', 'Supercar', 'Hypercar'];

    // Search state
    isSearchOpen = false;
    searchQuery = '';

    // Get filtered cars
    get filteredCars(): Car[] {
        let cars = this.cars;

        // Filter by category
        if (this.selectedCategory !== 'all') {
            cars = cars.filter(car => car.category === this.selectedCategory);
        }

        // Filter by search query
        if (this.searchQuery.trim()) {
            const query = this.searchQuery.toLowerCase().trim();
            cars = cars.filter(car =>
                car.name.toLowerCase().includes(query) ||
                car.brand.toLowerCase().includes(query) ||
                car.category.toLowerCase().includes(query)
            );
        }

        return cars;
    }

    // Get featured cars
    get featuredCars(): Car[] {
        return this.cars.filter(car => car.featured);
    }

    // Toggle mobile menu
    toggleMobileMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    // Toggle search
    toggleSearch(): void {
        this.isSearchOpen = !this.isSearchOpen;
        if (this.isSearchOpen) {
            // Focus input after a short delay to allow rendering
            setTimeout(() => {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }, 100);
        }
    }

    // Perform search and scroll to catalog
    performSearch(): void {
        this.isSearchOpen = false;
        this.scrollToSection('catalog');
    }

    // Filter by category
    filterByCategory(category: string): void {
        this.selectedCategory = category;
    }

    // Format price
    formatPrice(price: number): string {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        }).format(price);
    }

    // Scroll to section
    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        this.mobileMenuOpen = false;
    }
}
