import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  favorites: any[] = [];

  constructor() {
    this.loadFavorites();
  }

  loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  removeFavorite(game: any) {
    this.favorites = this.favorites.filter(fav => fav.name !== game.name);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
