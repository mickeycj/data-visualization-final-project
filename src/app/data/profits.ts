export const PROFITS_TITLE = 'Profits made over the years';

export const PROFITS_DESCRIPTION = `
  Movies in the MCU has never failed to delivered in terms of entertainment to the fans and general
  audiences, as well as in terms of revenue to Marvel Studios. While some may have bombed at the box
  office, many of them have raised the bar for modern movies to follow and even set up the standard
  for how a shared universe must be done.
`;

export const PROFITS = {
  title: {
    text: 'Profits',
    style: {
      fontSize: '28px'
    }
  },
  chart: {
    height: 600,
    width: 1050,
    fontFamily: 'Marvel, arial, sans-serif',
    foreColor: '#1A1A64',
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#F3F3F3', 'transparent'],
      opacity: 0.5
    }
  },
  colors: ['#7B6FDE'],
  xaxis: {
    title: {
      text: 'Movie',
      style: {
        fontSize: '28px'
      }
    },
    categories: [
      'Iron Man',
      'The Incredible Hulk',
      'Iron Man 2',
      'Thor',
      'Captain America: The First Avenger',
      'The Avengers',
      'Iron Man 3',
      'Thor: The Dark World',
      'Captain America: The Winter Soldier',
      'Guardians of the Galaxy',
      'Avengers: Age of Ultron',
      'Ant-Man',
      'Captain America: Civil War',
      'Doctor Strange',
      'Guardians of the Galaxy Vol.2',
      'Spider-Man: Homecoming',
      'Thor: Ragnaork',
      'Black Panther',
      'Avengers: Inf. War',
      'Ant-Man and the Wasp',
      'Captain Marvel',
      'Avengers: Endgame'
    ],
    labels: {
      style: {
        fontSize: '16px'
      }
    }
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

export const BY_REVENUE = {
  toggle: {
    title: 'By revenue',
    value: 'by-revenue'
  },
  series: [
    {
      name: 'Profit',
      type: 'column',
      data: [
        445174222,
        113427551,
        423933331,
        299326618,
        230569774,
        1298812988,
        1036411252,
        491871402,
        537264267,
        577428629,
        1039903694,
        410011965,
        923304495,
        512718395,
        663756051,
        705166924,
        673977126,
        1146913161,
        1732359754,
        460674139,
        975411720,
        2186165879,
      ]
    }
  ],
  yaxis: {
    title: {
      text: 'Profit ($)',
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

export const BY_PERCENTAGE = {
  toggle: {
    title: 'By percentage',
    value: 'by-percentage'
  },
  series: [
    {
      name: 'Profit',
      type: 'column',
      data: [
        317.98,
        75.62,
        211.97,
        199.55,
        164.69,
        590.37,
        580.95,
        322.12,
        303.54,
        294.76,
        284.52,
        375.13,
        401.44,
        310.74,
        331.88,
        402.95,
        374.43,
        573.46,
        548.22,
        284.37,
        650.27,
        614.09
      ]
    }
  ],
  yaxis: {
    title: {
      text: 'Profit (%)',
      style: {
        fontSize: '28px'
      }
    },
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
