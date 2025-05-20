import { Component, model } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoaderComponent } from './loader/loader.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SidebarComponent, LoaderComponent, DashboardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public isSidebarToggled = model<boolean>(false);
}
