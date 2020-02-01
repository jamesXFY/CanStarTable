
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardsComponent , CardComponent],
  imports: [CommonModule],
  providers: []
})
export class CardsModule {}
