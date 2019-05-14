import { Component, OnInit } from '@angular/core';

import {
  GROSS_INCOME_TITLE,
  GROSS_INCOME_DESCRIPTION,
  GROSS_INCOME,
  BY_MOVIE,
  BY_YEAR
} from './data/gross-income';
import {
  PROFITS_TITLE,
  PROFITS_DESCRIPTION,
  PROFITS,
  BY_REVENUE,
  BY_PERCENTAGE
} from './data/profits-and-losses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;
  shortTitle: string;

  isSmall: boolean;
  cols: number;
  chartColSpan: number;

  grossIncome: any;
  grossIncomeTitle: string;
  grossIncomeDescription: string;
  byMovieToggle: any;
  byYearToggle: any;

  profits: any;
  profitsTitle: string;
  profitsDescription: string;
  byRevenueToggle: any;
  byPercentageToggle: any;

  ngOnInit() {
    this.title = 'Marvel Cinematic Universe';
    this.shortTitle = 'MCU';

    this.resize();

    this.setGrossIncome(BY_MOVIE.toggle.value);
    this.setProfits(BY_REVENUE.toggle.value);
  }

  onResize(event: Event) {
    this.resize();
  }

  onGrossIncomeToggleClicked(value: string) {
    this.setGrossIncome(value);
  }

  onProfitsToggleClicked(value: string) {
    this.setProfits(value);
  }

  private resize() {
    this.isSmall = window.innerWidth < 1000;
    this.cols = (window.innerWidth < 1000) ? 1 : 3;
    this.chartColSpan = (window.innerWidth < 1000) ? 1 : 2;
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
        legend: GROSS_INCOME.legend,
        responsive: GROSS_INCOME.responsive
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
        legend: GROSS_INCOME.legend,
        responsive: GROSS_INCOME.responsive
      };
    }
    this.grossIncomeTitle = GROSS_INCOME_TITLE;
    this.grossIncomeDescription = GROSS_INCOME_DESCRIPTION;
    this.byMovieToggle = BY_MOVIE.toggle;
    this.byYearToggle = BY_YEAR.toggle;
  }

  private setProfits(value: string) {
    if (value === 'by-revenue') {
      this.profits = {
        title: PROFITS.title,
        chart: PROFITS.chart,
        dataLabels: PROFITS.dataLabels,
        stroke: PROFITS.stroke,
        grid: PROFITS.grid,
        series: BY_REVENUE.series,
        xaxis: PROFITS.xaxis,
        yaxis: BY_REVENUE.yaxis,
        responsive: PROFITS.responsive
      };
    } else {
      this.profits = {
        title: PROFITS.title,
        chart: PROFITS.chart,
        dataLabels: PROFITS.dataLabels,
        stroke: PROFITS.stroke,
        grid: PROFITS.grid,
        series: BY_PERCENTAGE.series,
        xaxis: PROFITS.xaxis,
        yaxis: BY_PERCENTAGE.yaxis,
        responsive: PROFITS.responsive
      };
    }
    this.profitsTitle = PROFITS_TITLE;
    this.profitsDescription = PROFITS_DESCRIPTION;
    this.byRevenueToggle = BY_REVENUE.toggle;
    this.byPercentageToggle = BY_PERCENTAGE.toggle;
  }

}
