import { Component } from '@angular/core';
import { DbCardComponent } from '../../shared/components/db-card/db-card.component';
import { IDbCardConfig } from '../../shared/interfaces/ui.interface';
import { CalendarComponent } from '../../shared/components/calendar/calendar.component';

@Component({
  selector: 'app-dashboard',
  imports: [DbCardComponent, CalendarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected dbCardConfigArr: IDbCardConfig[] = [
    {
      title: 'Total Applications',
      value: '20',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-500',
      svgPath:
        'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    },
    {
      title: 'Interviews Today',
      value: '2',
      bgColor: 'bg-green-100',
      textColor: 'text-green-500',
      svgPath:
        'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    },
    {
      title: 'Success Rate',
      value: '18%',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-500',
      svgPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];
}
