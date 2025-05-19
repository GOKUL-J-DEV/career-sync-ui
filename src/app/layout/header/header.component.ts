import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isSidebarToggled = model<boolean>(false);

  protected onClickSidebarToggle() {
    this.isSidebarToggled.set(!this.isSidebarToggled());
  }
}
