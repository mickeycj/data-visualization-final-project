export const GROSS_INCOME_TITLE = 'Gross income since the start of the MCU';

export const GROSS_INCOME_DESCRIPTION = `
  An American film franchise and shared superhero universe that is centered on the stories created
  by Marvel Comics. It has been independently produced by Marvel Studios over a decade and made
  billions worldwide.
`;

export const GROSS_INCOME = {
  chart: {
    height: 500,
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
  },
  legend: {
    position: 'top',
    offsetY: -24,
    markers: {
      offsetY: '-2px'
    },
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

export const BY_MOVIE = {
  toggle: {
    title: 'By movie',
    value: 'by-movie'
  },
  title: {
    text: 'Gross Income by Movie',
    align: 'left',
    style: {
      fontSize: '28px'
    }
  },
  series: [
    {
      name: 'Worldwide',
      data: [
        585174222,
        263427551,
        623933331,
        449326618,
        370569774,
        1518812988,
        1214811252,
        644571402,
        714264267,
        773328629,
        1405403694,
        519311965,
        1153304495,
        677718395,
        863756051,
        880166924,
        853977126,
        1346913161,
        2048359754,
        622674139,
        1123169767,
        2485499739
      ]
    },
    {
      name: 'Overseas',
      data: [
        266762121,
        128620638,
        311500000,
        268295994,
        193915269,
        895455078,
        805797258,
        438209262,
        454497695,
        440152029,
        946397826,
        339109802,
        745220146,
        445076475,
        473942950,
        545965784,
        538918837,
        646853595,
        1369544272,
        406025399,
        699392688,
        1762000000
      ]
    },
    {
      name: 'Domestic',
      data: [
        318412101,
        134806913,
        312433331,
        181030624,
        176654505,
        623357910,
        409013994,
        206362140,
        259766572,
        333176699,
        459005868,
        180202163,
        408084349,
        232641920,
        389813101,
        334201140,
        315058289,
        700059566,
        678815482,
        216648740,
        423777079,
        723499739
      ]
    }
  ],
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
      'Guardian of the Galaxy Vol.2',
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
  }
};

export const BY_YEAR = {
  toggle: {
    title: 'By year',
    value: 'by-year'
  },
  title: {
    text: 'Gross Income by Year',
    align: 'left',
    style: {
      fontSize: '28px'
    }
  },
  series: [
    {
      name: 'Worldwide',
      data: [
        848601773,
        0,
        623933331,
        819896392,
        1518812988,
        1859382654,
        1487592896,
        1924715659,
        1831022890,
        2597900101,
        4017947054,
        3608669506
      ]
    },
    {
      name: 'Overseas',
      data: [
        395382759,
        0,
        311500000,
        462211263,
        895455078,
        1244006520,
        894649724,
        1285507628,
        1190296621,
        1558827571,
        2422423266,
        2461392688
      ]
    },
    {
      name: 'Domestic',
      data: [
        452219014,
        0,
        312433331,
        357685129,
        623357810,
        612376134,
        592943271,
        639208031,
        640726269,
        1039072530,
        1595523788,
        1147276818
      ]
    }
  ],
  xaxis: {
    title: {
      text: 'Year',
      style: {
        fontSize: '28px'
      }
    },
    categories: [
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019'
    ],
    labels: {
      style: {
        fontSize: '16px'
      }
    }
  }
};
