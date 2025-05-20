export interface IDbCardConfig {
  title: string;
  value: string;
  bgColor: string;
  textColor: string;
  svgPath: string;
}

export interface ICalendarDay {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  event?: string;
}