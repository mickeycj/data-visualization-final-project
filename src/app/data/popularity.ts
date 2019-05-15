export const POPULARITY_TITLE = 'Popularity among Marvel superheroes';

export const POPULARITY_DESCRIPTION = `
  Many actors are part of the MCU, such as Robert Downey Jr., Chris Evans and many more. They
  have been integral to the success of the franchise. However, are their popularity among the fans,
  casual or hardcore alike, reflected on papers? Let's take a look at the amount of revenues these
  actors and their corresponding characters as well as their popularity among the critics.
`;

export const POPULARITY = {
  chart: {
    height: 500,
    width: 1050,
    fontFamily: 'Marvel, arial, sans-serif',
    foreColor: '#1A1A64',
    type: 'bar',
    zoom: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true
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
  colors: [
    '#AA0505',
    '#A2DC48',
    '#A8A9AD',
    '#000042',
    '#3870BD',
    '#9D152C',
    '#454253',
    '#B11313',
    '#080808',
    '#CC4224'
  ],
  xaxis: {
    title: {
      text: 'Characters',
      style: {
        fontSize: '28px'
      }
    },
    categories: [
      'Iron Man',
      'The Incredible Hulk',
      'Thor',
      'Captain America',
      'Guardians of the Galaxy',
      'Ant-Man',
      'Doctor Strange',
      'Spider-Man',
      'Black Panther',
      'Captain Marvel'
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

export const BY_GROSS_INCOME = {
  toggle: {
    title: 'By income',
    value: 'by-income'
  },
  title: {
    text: 'Popularity by Gross Income',
    align: 'left',
    style: {
      fontSize: '28px'
    }
  },
  series: [
    {
      name: 'Gross Income',
      data: [
        2423918805,
        263427551,
        1947875146,
        2238138536,
        1637084680,
        1141986104,
        677718395,
        880166924,
        1346913161,
        1124767022
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

export const BY_AVG_RATING = {
  toggle: {
    title: 'By rating',
    value: 'by-rating'
  },
  title: {
    text: 'Popularity by Average Ratings',
    align: 'left',
    style: {
      fontSize: '28px'
    }
  },
  series: [
    {
      name: 'Rating',
      data: [
        81.7,
        67.0,
        78.7,
        87.0,
        87.5,
        85.0,
        89.0,
        92.0,
        97.0,
        78.0
      ]
    }
  ],
  yaxis: {
    title: {
      text: 'Rating (%)',
      style: {
        fontSize: '28px'
      }
    },
    labels: {
      formatter: (value: number) => {
        return `${value.toFixed(1)} %`;
      },
      style: {
        fontSize: '16px'
      }
    }
  }
};
