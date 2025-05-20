import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  currentDate: Date = new Date();
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  days: { day: number; hasEvent?: string; isToday?: boolean }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateCalendar(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth()
    );
  }

  generateCalendar(year: number, month: number): void {
    this.days = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const dayOfWeek = firstDayOfMonth.getDay();

    for (let i = 0; i < dayOfWeek; i++) {
      this.days.push({ day: 0 });
    }

    const events = [
      {
        date: new Date(year, month, 5),
        title: 'Meeting',
        color: 'bg-blue-500',
      },
      {
        date: new Date(year, month, 12),
        title: 'Conference',
        color: 'bg-green-500',
      },
      {
        date: new Date(year, month, 15),
        title: 'Deadline',
        color: 'bg-red-500',
      },
      {
        date: new Date(year, month, 20),
        title: 'Lunch',
        color: 'bg-yellow-500',
      },
      {
        date: new Date(year, month, 25),
        title: 'Interview',
        color: 'bg-purple-500',
      },
    ];

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDateFormatted = new Date(year, month, i);
      const eventOnDay = events.find(
        (event) =>
          event.date.toDateString() === currentDateFormatted.toDateString()
      );
      const isToday =
        currentDateFormatted.toDateString() === new Date().toDateString();

      this.days.push({
        day: i,
        hasEvent: eventOnDay ? eventOnDay.color : undefined,
        isToday,
      });
    }
  }

  navigateMonth(offset: number): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + offset);
    this.generateCalendar(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth()
    );
  }

  get currentMonthDisplay(): string {
    return `${
      this.monthNames[this.currentDate.getMonth()]
    } ${this.currentDate.getFullYear()}`;
  }

  getEventTitle(day: number): string | undefined {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const eventDate = new Date(year, month, day);
    const events = [
      { date: new Date(year, month, 5), title: 'Meeting' },
      { date: new Date(year, month, 12), title: 'Conference' },
      { date: new Date(year, month, 15), title: 'Deadline' },
      { date: new Date(year, month, 20), title: 'Lunch' },
      { date: new Date(year, month, 25), title: 'Interview' },
    ];
    const foundEvent = events.find(
      (event) => event.date.toDateString() === eventDate.toDateString()
    );
    return foundEvent ? foundEvent.title : undefined;
  }
}
