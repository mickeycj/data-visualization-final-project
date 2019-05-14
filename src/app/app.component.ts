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
import {
  RATINGS_PER_PHASE_TITLE,
  RATINGS_PER_PHASE_DESCRIPTION,
  RATINGS_PER_PHASE,
  PHASE_1,
  PHASE_2,
  PHASE_3
} from './data/ratings-per-phase';

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

  ratingsPerPhaseIncome: any;
  ratingsPerPhaseRating: any;
  ratingsPerPhaseTitle: string;
  ratingsPerPhaseDescription: string;
  phaseOneToggle: any;
  phaseTwoToggle: any;
  phaseThreeToggle: any;

  ngOnInit() {
    this.title = 'Marvel Cinematic Universe';
    this.shortTitle = 'MCU';

    this.resize();

    this.setGrossIncome(BY_MOVIE.toggle.value);
    this.setProfits(BY_REVENUE.toggle.value);
    this.setRatingsPerPhase(PHASE_1.toggle.value);
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

  onPhasesToggleClicked(value: string) {
    this.setRatingsPerPhase(value);
  }

  private resize() {
    this.isSmall = window.innerWidth < 1000;
    this.cols = (window.innerWidth < 1000) ? 1 : 3;
    this.chartColSpan = (window.innerWidth < 1000) ? 1 : 2;
  }

  private setGrossIncome(value: string) {
    if (value === BY_MOVIE.toggle.value) {
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
    if (value === BY_REVENUE.toggle.value) {
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

  setRatingsPerPhase(value: string) {
    if (value === PHASE_1.toggle.value) {
      this.ratingsPerPhaseIncome = {
        title: RATINGS_PER_PHASE.pieTitle,
        chart: RATINGS_PER_PHASE.pieChart,
        labels: PHASE_1.pieLabels,
        series: PHASE_1.pieSeries,
        yaxis: RATINGS_PER_PHASE.pieYaxis,
        legend: RATINGS_PER_PHASE.pieLegend
      };
      this.ratingsPerPhaseRating = {
        chart: RATINGS_PER_PHASE.radialChart,
        plotOptions: RATINGS_PER_PHASE.radialPlotOptions,
        fill: RATINGS_PER_PHASE.radialFill,
        stroke: RATINGS_PER_PHASE.radialStroke,
        labels: RATINGS_PER_PHASE.radialLabels,
        series: [PHASE_1.radialSeries[0]],
        data: PHASE_1.radialSeries
      }
    } else if (value === PHASE_2.toggle.value) {
      this.ratingsPerPhaseIncome = {
        title: RATINGS_PER_PHASE.pieTitle,
        chart: RATINGS_PER_PHASE.pieChart,
        labels: PHASE_2.pieLabels,
        series: PHASE_2.pieSeries,
        yaxis: RATINGS_PER_PHASE.pieYaxis,
        legend: RATINGS_PER_PHASE.pieLegend
      };
      this.ratingsPerPhaseRating = {
        chart: RATINGS_PER_PHASE.radialChart,
        plotOptions: RATINGS_PER_PHASE.radialPlotOptions,
        fill: RATINGS_PER_PHASE.radialFill,
        stroke: RATINGS_PER_PHASE.radialStroke,
        labels: RATINGS_PER_PHASE.radialLabels,
        series: [PHASE_2.radialSeries[0]],
        data: PHASE_2.radialSeries
      }
    } else {
      this.ratingsPerPhaseIncome = {
        title: RATINGS_PER_PHASE.pieTitle,
        chart: RATINGS_PER_PHASE.pieChart,
        labels: PHASE_3.pieLabels,
        series: PHASE_3.pieSeries,
        yaxis: RATINGS_PER_PHASE.pieYaxis,
        legend: RATINGS_PER_PHASE.pieLegend
      };
      this.ratingsPerPhaseRating = {
        chart: RATINGS_PER_PHASE.radialChart,
        plotOptions: RATINGS_PER_PHASE.radialPlotOptions,
        fill: RATINGS_PER_PHASE.radialFill,
        stroke: RATINGS_PER_PHASE.radialStroke,
        labels: RATINGS_PER_PHASE.radialLabels,
        series: [PHASE_3.radialSeries[0]],
        data: PHASE_3.radialSeries
      }
    }
    this.ratingsPerPhaseIncome.chart.events = {
      dataPointSelection: (event: Event, chartContext: any, config: any) => {
        const index = config.dataPointIndex;
        this.ratingsPerPhaseRating.title = {
          text: this.ratingsPerPhaseIncome.labels[index],
          style: {
            fontSize: '28px'
          }
        };
        this.ratingsPerPhaseRating.series = [this.ratingsPerPhaseRating.data[index]];
      }
    };
    this.ratingsPerPhaseRating.title = {
      text: this.ratingsPerPhaseIncome.labels[0],
      style: {
        fontSize: '28px'
      }
    };
    this.ratingsPerPhaseTitle = RATINGS_PER_PHASE_TITLE;
    this.ratingsPerPhaseDescription = RATINGS_PER_PHASE_DESCRIPTION;
    this.phaseOneToggle = PHASE_1.toggle;
    this.phaseTwoToggle = PHASE_2.toggle;
    this.phaseThreeToggle = PHASE_3.toggle;
  }

}
