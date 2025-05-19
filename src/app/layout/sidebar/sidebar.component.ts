import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public isSidebarToggled = model<boolean>(false);

  protected closeSidebar() {
    this.isSidebarToggled.set(false);
  }
}
