import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnnimation = false;
  currentCard: string ='';
  game: Game;


  constructor() {
    this.game = new Game();
    this.currentCard = '';
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    let poppedCard = this.game.stack.pop();
    if (poppedCard !== undefined && !this.pickCardAnnimation) {
      this.currentCard = poppedCard;
      this.pickCardAnnimation = true;
      
      setTimeout(() => {
        this.pickCardAnnimation = false
      }, 1500);
    }
  }
}
