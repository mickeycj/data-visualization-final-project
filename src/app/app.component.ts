import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = {
    test: 'Median Ratio'
  };
  chart = {
    height: 350,
    type: 'radialBar'
  };
  series = [67];
  labels = ['Median Ratio'];
  plotOptions = {
    radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
            name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
            },
            value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: (val: any) => val + "%"
            }
        }
    }
  };
  fill = {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
  };
  stroke = {
      dashArray: 4
  }
}
