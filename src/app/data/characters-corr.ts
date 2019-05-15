export const CHARACTERS_CORR_TITLE = 'Do people go for the big name superheroes?';

export const CHARACTERS_CORR_DESCRIPTION = `
  At first, not many people were aware of the existence of many of Marvel characters, excluding
  the fans themselves. People tend to be excited for team-up films more than others, including
  solo films that include other heroes in the advertising materials. 
`;

export const CHARACTERS_CORR = {
  chart: {
    height: 500,
    width: 1050,
    fontFamily: 'Marvel, arial, sans-serif',
    foreColor: '#1A1A64',
    type: 'scatter',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    row: {
      colors: ['#F3F3F3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    title: {
      text: 'Number of Characters',
      style: {
        fontSize: '28px'
      }
    },
    tickAmount: 27,
    labels: {
      formatter: (value: number) => {
        return Math.ceil(value);
      },
      style: {
        fontSize: '16px'
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -24,
    fontSize: '16px'
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          width: 900
        }
      }
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 750
        }
      }
    },
    {
      breakpoint: 1150,
      options: {
        chart: {
          width: 600
        }
      }
    },
    {
      breakpoint: 1000,
      options: {
        chart: {
          width: 750
        }
      }
    },
    {
      breakpoint: 800,
      options: {
        chart: {
          width: 600
        }
      }
    },
    {
      breakpoint: 650,
      options: {
        chart: {
          width: 450
        }
      }
    },
    {
      breakpoint: 500,
      options: {
        chart: {
          height: 400,
          width: 350
        }
      }
    }
  ]
};

export const BY_INCOME = {
  toggle: {
    title: 'By income',
    value: 'by-income'
  },
  title: {
    text: 'Correlation between Number of Key Characters and Gross Income',
    align: 'left',
    style: {
      fontSize: '28px'
    }
  },
  series: [
    {
      name: 'Solo',
      data: [
        [1, 585174222],
        [1, 263427551],
        [4, 623933331],
        [2, 449326618],
        [2, 370569774],
        [2, 1214811252],
        [2, 644571402],
        [5, 714264267],
        [7, 773328629],
        [2, 519311965],
        [1, 677718395],
        [8, 863756051],
        [2, 880166924],
        [4, 853977126],
        [1, 1346913161],
        [2, 622674139],
        [2, 1124767022],
      ]
    },
    {
      name: 'Team-up',
      data: [
        [8, 1518812988],
        [11, 1405403694],
        [12, 1153304495],
        [23, 2048359754],
        [27, 2503147735]
      ]
    }
  ],
  yaxis: {
    title: {
      text: 'Gross Income ($)',
      style: {
        fontSize: '28px'
      }
    },
    labels: {
      formatter: (value: number) => {
        if (value >= 1000000000) {
          return `$ ${(value / 1000000000).toFixed(1)} B`;
        } else if (value >= 1000000) {
          return `$ ${(value / 1000000).toFixed(1)} M`;
        } else {
          return `$ ${value}`;
        }
      },
      style: {
        fontSize: '16px'
      }
    }
  }
};

export const BY_RATING = {
  toggle: {
    title: 'By rating',
    value: 'by-rating'
  },
  title: {
    text: 'Correlation between Number of Key Characters and Ratings',
    align: 'left',
    style: {
      fontSize: '28px'
    }
  },
  series: [
    {
      name: 'Solo',
      data: [
        [1, 93],
        [1, 67],
        [4, 73],
        [2, 77],
        [2, 80],
        [2, 79],
        [2, 66],
        [5, 90],
        [7, 91],
        [2, 82],
        [1, 89],
        [8, 84],
        [2, 92],
        [4, 93],
        [1, 97],
        [2, 88],
        [2, 78],
      ]
    },
    {
      name: 'Team-up',
      data: [
        [8, 92],
        [11, 75],
        [12, 91],
        [23, 85],
        [27, 95]
      ]
    }
  ],
  yaxis: {
    title: {
      text: 'Rotten Tomatoes (%)',
      style: {
        fontSize: '28px'
      }
    },
    min: 60,
    max: 100,
    labels: {
      formatter: (value: number) => {
        return `${value} %`;
      },
      style: {
        fontSize: '16px'
      }
    }
  }
};
