import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SidebarComponent, LoaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
