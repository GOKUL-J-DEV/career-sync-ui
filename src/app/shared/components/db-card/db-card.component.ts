import { Component, input } from '@angular/core';
import { IDbCardConfig } from '../../interfaces/ui.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-db-card',
  imports: [CommonModule],
  templateUrl: './db-card.component.html',
  styleUrl: './db-card.component.scss',
})
export class DbCardComponent {
  dbCardConfig = input<IDbCardConfig>();
}
