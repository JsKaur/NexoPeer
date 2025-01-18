import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,

  imports: [FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent {
  ngOnInit(): void {
    this.loadSplineScript();
  }

  loadSplineScript() {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js";
    script.type = "module";
    script.onload = () => {
      console.log('Spline Viewer loaded');
    };
    document.body.appendChild(script);
  }
}
