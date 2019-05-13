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
    this.title = "Marvel Cinematic Universe";

    this.setGrossIncome('by-movie');
    this.setProfits('by-revenue');
  }

  onGrossIncomeToggleClicked(value: string) {
    this.setGrossIncome(value);
  }

  onProfitsToggleClicked(value: string) {
    this.setProfits(value)
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
        yaxis: BY_REVENUE.yaxis
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
        yaxis: BY_PERCENTAGE.yaxis
      };
    }
    this.profitsTitle = PROFITS_TITLE;
    this.profitsDescription = PROFITS_DESCRIPTION;
    this.byRevenueToggle = BY_REVENUE.toggle;
    this.byPercentageToggle = BY_PERCENTAGE.toggle;
  }

}
