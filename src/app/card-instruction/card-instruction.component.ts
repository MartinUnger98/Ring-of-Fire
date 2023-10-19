import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-card-instruction',
  templateUrl: './card-instruction.component.html',
  styleUrls: ['./card-instruction.component.scss']
})
export class CardInstructionComponent implements OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'All players start to drink. Drinking may only be stopped when the person sitting next to you has finished'},
    { title: 'You', description: 'You can choose a person to take a sip of their drink'},
    { title: 'Me', description: 'You have to drink a sip'},
    { title: 'Floor', description: 'Touch the floor with your hand. Last one has to take a sip'},
    { title: 'Guys', description: 'The man have to take a sip'},
    { title: 'Chicks', description: 'The women have to take a sip'},
    { title: 'Heaven', description: 'Point towards the sky. Last one has to take a sip'},
    { title: 'Mate', description: 'Pick a mate who has to drink with you from now on'},
    { title: 'Rhyme', description: 'Pick a word. The other players have to rhyme on it'},
    { title: 'Category', description: 'Pick a category. The other players have to name a word from this category'},
    { title: 'Rule', description: 'You are allowed to come up with a new rule that applies until the end of the game'},
    { title: 'Questionmaster', description: 'Nobody is allowed to give you answer otherwise they have to take a sip'},
    { title: 'King', description: 'You have to pour a drink of your choice into the Kingscup. Last King drinks the cup'},
  ];

  title: string = '';
  description: string= '';
  @Input() card!: string;

  ngOnChanges() {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }    
  }
}
