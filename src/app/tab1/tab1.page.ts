import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  isSearchVisible = false;
  searchQuery = '';
  priceOrder = 'asc';
  selectedPlatform = 'all';  
  favorites: any[] = [];    

  games = [
    { 
      name: 'Fifa 25', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QIfHZhMdEwiQqtGLs6JawSeq7-QRfDNx1nYapCaFniE_d_KCtaKj6SiPZi3C03NXrcc&usqp=CAU', 
      platform: 'PlayStation', 
      discount: -31, 
      price: 23.67,
      offers: [
        { store: 'Amazon', storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zPuYvmIY7M4I0fEqrF42idfgt2e4vYMd7Q&s', finalPrice: 50.99 },
        { store: 'Mercado Libre', storeLogo: 'https://http2.mlstatic.com/storage/cx-support-fcm-api/fcm-pub-os-prod/cx-support-mario-frontend/cvasquezcord/mercadolibre-og.png', finalPrice: 43.99 }
      ]
    },
   
    
   
   
    { 
      name: 'Call of Duty: Modern Warfare III', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg', 
      platform: 'Xbox', 
      discount: -45, 
      price: 29.99,
      offers: [
        { store: 'G2A', storeLogo: 'assets/img/g2a.png', finalPrice: 27.49 },
        { store: 'CDKeys', storeLogo: 'assets/img/cdkeys.png', finalPrice: 28.99 }
      ]
    },
 
   
   
    { 
      name: 'Cyberpunk 2077: Phantom Liberty', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2138330/header.jpg', 
      platform: 'PC', 
      discount: -60, 
      price: 19.99,
      offers: [
        { store: 'GOG', storeLogo: 'assets/img/gog.png', finalPrice: 18.49 },
        { store: 'CDKeys', storeLogo: 'assets/img/cdkeys.png', finalPrice: 17.99 }
      ]
    },
    { 
      name: 'Minecraft Legends', 
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1928870/header.jpg', 
      platform: 'Xbox', 
      discount: -20, 
      price: 23.99,
      offers: [
        { store: 'Microsoft Store', storeLogo: 'assets/img/microsoft.png', finalPrice: 21.50 }
      ]
    },
    { 
      name: 'Elden Ring', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg', 
      platform: 'PC', 
      discount: -35, 
      price: 38.99,
      offers: [
        { store: 'Kinguin', storeLogo: 'assets/img/kinguin.png', finalPrice: 33.49 },
        { store: 'Steam', storeLogo: 'assets/img/steam.png', finalPrice: 36.00 }
      ]
    },
    { 
      name: 'Super Mario Bros. Wonder', 
      image: 'https://cdn.vox-cdn.com/thumbor/hOZX5E-0xw41KNkdd3NTRn40Y-c=/0x0:2560x1440/920x613/filters:focal(1076x452:1484x860):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72622053/super_mario_bros_wonder_nintendo_direct_2560.0.jpg', 
      platform: 'Switch', 
      discount: -12, 
      price: 44.99,
      offers: [
        { store: 'Nintendo eShop', storeLogo: 'assets/img/nintendo.png', finalPrice: 39.50 }
      ]
    },
    { 
      name: 'Assassin\'s Creed Mirage', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/368210/header.jpg', 
      platform: 'PlayStation', 
      discount: -28, 
      price: 31.99,
      offers: [
        { store: 'Ubisoft Store', storeLogo: 'assets/img/ubisoft.png', finalPrice: 29.99 },
        { store: 'Amazon', storeLogo: 'assets/img/amazon.png', finalPrice: 30.49 }
      ]
    },
    { 
      name: 'Diablo IV', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg', 
      platform: 'PC', 
      discount: -55, 
      price: 27.49,
      offers: [
        { store: 'Battle.net', storeLogo: 'assets/img/battlenet.png', finalPrice: 24.99 },
        { store: 'Instant Gaming', storeLogo: 'assets/img/instantgaming.png', finalPrice: 26.00 }
      ]
    },
    { 
      name: 'Resident Evil 4 Remake', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg', 
      platform: 'PlayStation', 
      discount: -40, 
      price: 35.99,
      offers: [
        { store: 'Kinguin', storeLogo: 'assets/img/kinguin.png', finalPrice: 31.99 },
        { store: 'Amazon', storeLogo: 'assets/img/amazon.png', finalPrice: 33.49 }
      ]
    },
    { 
      name: 'Red Dead Redemption 2', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg', 
      platform: 'PC', 
      discount: -55, 
      price: 27.49,
      offers: [
        { store: 'Epic Games', storeLogo: 'assets/img/epicgames.png', finalPrice: 24.99 },
        { store: 'Steam', storeLogo: 'assets/img/steam.png', finalPrice: 26.00 }
      ]
    },
    { 
      name: 'God of War Ragnarök', 
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/0311/UbnJzU0MlVmzQJwrXZ2BDTG0.png', 
      platform: 'PlayStation', 
      discount: -30, 
      price: 42.00,
      offers: [
        { store: 'CDKeys', storeLogo: 'assets/img/cdkeys.png', finalPrice: 38.99 },
        { store: 'PlayStation Store', storeLogo: 'assets/img/playstation.png', finalPrice: 40.50 }
      ]
    },
    { 
      name: 'Forza Horizon 5', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg', 
      platform: 'Xbox', 
      discount: -35, 
      price: 29.99,
      offers: [
        { store: 'Microsoft Store', storeLogo: 'assets/img/microsoft.png', finalPrice: 26.99 },
        { store: 'G2A', storeLogo: 'assets/img/g2a.png', finalPrice: 28.49 }
      ]
    },
    { 
      name: 'Pokémon Scarlet & Violet', 
      image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_fill,w_300/ncom/en_US/games/switch/p/pokemon-scarlet-switch/hero', 
      platform: 'Switch', 
      discount: -18, 
      price: 48.99,
      offers: [
        { store: 'Nintendo eShop', storeLogo: 'assets/img/nintendo.png', finalPrice: 44.99 }
      ]
    },
    { 
      name: 'Battlefield 2042', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg', 
      platform: 'PC', 
      discount: -60, 
      price: 21.99,
      offers: [
        { store: 'Origin', storeLogo: 'assets/img/origin.png', finalPrice: 19.99 },
        { store: 'CDKeys', storeLogo: 'assets/img/cdkeys.png', finalPrice: 20.50 }
      ]
    },
    { 
      name: 'Mortal Kombat 1', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/header.jpg', 
      platform: 'PlayStation', 
      discount: -25, 
      price: 44.99,
      offers: [
        { store: 'Instant Gaming', storeLogo: 'assets/img/instantgaming.png', finalPrice: 39.99 },
        { store: 'Amazon', storeLogo: 'assets/img/amazon.png', finalPrice: 42.00 }
      ]
    },
    { 
      name: 'The Sims 4 Bundle', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg', 
      platform: 'PC', 
      discount: -75, 
      price: 9.99,
      offers: [
        { store: 'Origin', storeLogo: 'assets/img/origin.png', finalPrice: 8.49 },
        { store: 'G2A', storeLogo: 'assets/img/g2a.png', finalPrice: 9.00 }
      ]
    },
    { 
      name: 'The Last of Us Part I', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg', 
      platform: 'PC', 
      discount: -50, 
      price: 29.99,
      offers: [
        { store: 'Steam', storeLogo: 'assets/img/steam.png', finalPrice: 27.49 },
        { store: 'Epic Games', storeLogo: 'assets/img/epicgames.png', finalPrice: 28.00 }
      ]
    },
    { 
      name: 'Marvel\'s Guardians of the Galaxy', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1088850/header.jpg', 
      platform: 'Xbox', 
      discount: -45, 
      price: 24.99,
      offers: [
        { store: 'Microsoft Store', storeLogo: 'assets/img/microsoft.png', finalPrice: 22.49 },
        { store: 'Amazon', storeLogo: 'assets/img/amazon.png', finalPrice: 23.99 }
      ]
    },
    
    
    { 
      name: 'Call of Duty: Modern Warfare III', 
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg', 
      platform: 'PC', 
      discount: -33, 
      price: 39.99,
      offers: [
        { store: 'Battle.net', storeLogo: 'assets/img/battlenet.png', finalPrice: 35.99 },
        { store: 'CDKeys', storeLogo: 'assets/img/cdkeys.png', finalPrice: 34.50 }
      ]
    },
    { 
      name: 'Netflix Gift Card - 30€', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', 
      platform: 'Digital', 
      discount: -5, 
      price: 28.50,
      offers: [
        { store: 'Amazon', storeLogo: 'assets/img/amazon.png', finalPrice: 27.99 },
        { store: 'Instant Gaming', storeLogo: 'assets/img/instantgaming.png', finalPrice: 28.00 }
      ]
    },
    { 
      name: 'Assassin’s Creed Mirage', 
      image: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AssassinsCreedMirage_Ubisoft_S1_2560x1440-6e4b0cbfc939e731ff8eb5f21eb0d204', 
      platform: 'PlayStation', 
      discount: -40, 
      price: 35.99,
      offers: [
        { store: 'Ubisoft Store', storeLogo: 'assets/img/ubisoft.png', finalPrice: 29.99 },
        { store: 'G2A', storeLogo: 'assets/img/g2a.png', finalPrice: 31.50 }
      ]
    },
    { 
      name: 'Disney+ - 1 Año', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg', 
      platform: 'Digital', 
      discount: -12, 
      price: 79.00,
      offers: [
        { store: 'Disney+', storeLogo: 'assets/img/disney.png', finalPrice: 69.99 },
        { store: 'Amazon', storeLogo: 'assets/img/amazon.png', finalPrice: 74.50 }
      ]
    
    }


    
    
    
    
    
  ];

  filteredGames = [...this.games];

  constructor(private router: Router) {
    this.loadFavorites(); 
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  filterGames() {
    this.filteredGames = this.games.filter(game =>
      (this.selectedPlatform === 'all' || game.platform === this.selectedPlatform) &&
      game.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.sortGamesByPrice(); 
  }

  sortGamesByPrice() {
    this.filteredGames.sort((a, b) =>
      this.priceOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

  changePriceOrder(order: 'asc' | 'desc') {
    this.priceOrder = order;
    this.sortGamesByPrice();
  }

  verComparacion(game: any) {
    this.router.navigate(['/comparacion'], { state: { game } });
  }

  toggleFavorite(game: any) {
    const index = this.favorites.findIndex(fav => fav.name === game.name);
    if (index > -1) {
      this.favorites.splice(index, 1); 
    } else {
      this.favorites.push(game);       
    }
    this.saveFavorites();              
  }

  isFavorite(game: any): boolean {
    return this.favorites.some(fav => fav.name === game.name);
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  selectPlatform(platform: string) {
    this.selectedPlatform = platform;
    this.filterGames();
  }
  navigateTo(page: string) {
    switch (page) {
      case 'home':
        this.router.navigate(['/tabs/tab1']);
        break;
      case 'favorites':
        this.router.navigate(['/tabs/tab3']); 
        break;
      case 'offers':
        this.router.navigate(['/tabs/tab2']); 
        break;
      case 'settings':
        this.router.navigate(['/settings']); 
        break;
      default:
        this.router.navigate(['/tabs/tab1']);
    }
  }
}
