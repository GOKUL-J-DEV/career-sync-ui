import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent implements OnInit, AfterViewInit {
  protected hideLoader = false;
  @ViewChild('loader') loaderElement: ElementRef | undefined;

  ngOnInit() {
    setTimeout(() => {
      this.hideLoader = true;
    }, 2000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.loaderElement) {
        this.loaderElement.nativeElement.style.display = 'none';
      }
    }, 3000);
  }
}
