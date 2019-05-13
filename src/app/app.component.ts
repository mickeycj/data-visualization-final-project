import { Component, OnInit } from '@angular/core';

import {
  GROSS_INCOME_TITLE,
  GROSS_INCOME_DESCRIPTION,
  GROSS_INCOME,
  BY_MOVIE,
  BY_YEAR
} from './data/gross-income';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;

  grossIncome: any;
  grossIncomeTitle: string;
  grossIncomeDescription: string;

  ngOnInit() {
    this.title = "Marvel Cinematic Universe";

    this.setGrossIncome('by-movie');
    this.grossIncomeTitle = GROSS_INCOME_TITLE;
    this.grossIncomeDescription = GROSS_INCOME_DESCRIPTION;
  }

  onToggleClicked(value: string) {
    this.setGrossIncome(value);
  }

  private setGrossIncome(value: string) {
    if (value === 'by-movie') {
      this.grossIncome = {
        title: BY_MOVIE.title,
        chart: GROSS_INCOME.chart,
        dataLabels: GROSS_INCOME.dataLabels,
        stroke: GROSS_INCOME.stroke,
        grid: GROSS_INCOME.grid,
        series: BY_MOVIE.series,
        xaxis: BY_MOVIE.xaxis,
        yaxis: GROSS_INCOME.yaxis,
        legend: GROSS_INCOME.legend 
      };
    } else {
      this.grossIncome = {
        title: BY_YEAR.title,
        chart: GROSS_INCOME.chart,
        dataLabels: GROSS_INCOME.dataLabels,
        stroke: GROSS_INCOME.stroke,
        grid: GROSS_INCOME.grid,
        series: BY_YEAR.series,
        xaxis: BY_YEAR.xaxis,
        yaxis: GROSS_INCOME.yaxis,
        legend: GROSS_INCOME.legend
      };
    }
  }

}
