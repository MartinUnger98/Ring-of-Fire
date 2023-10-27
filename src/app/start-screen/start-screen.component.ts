import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection, doc, docData, onSnapshot, } from '@angular/fire/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit{
  firestore: Firestore = inject(Firestore);
  constructor(private router: Router) { }
  ngOnInit(): void {};
  newGame() {
    let game = new Game();
    this.addNewGame(game.getJSON());
  }

  async addNewGame(item:object) {
    await addDoc(this.getGamesRef(), item)
    .catch((err) => {
      console.error(err);
    })
    .then((docRef) => {
      this.router.navigateByUrl('/game/' + docRef?.id);
    });
  }

  getGamesRef() {
    return collection(this.firestore, 'games');
  }
}
