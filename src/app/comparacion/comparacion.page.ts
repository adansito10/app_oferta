import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comparacion',
  templateUrl: './comparacion.page.html',
  styleUrls: ['./comparacion.page.scss'],
  standalone: false
})
export class ComparacionPage {
  game: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(() => {
      this.game = history.state.game; 
    });
  }
}
