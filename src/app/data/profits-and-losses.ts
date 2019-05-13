export const PROFITS_TITLE = 'Profits made over the years';

export const PROFITS_DESCRIPTION = `
  Movies in the MCU has never failed to delivered in terms of entertainment to the fans and general
  audiences, as well as in terms of revenue to Marvel Studios. While some may have bombed at the box
  office, many of them have raised the bar for modern movies to follow and even set up the standard
  for how a shared universe must be done.
`;

export const PROFITS = {
  title: {
    text: 'Profits and Losses'
  },
  chart: {
    height: 600,
    width: 1050,
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
  xaxis: {
    title: {
      text: 'Movie'
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
      'Avengers: lnfinity War',
      'Ant-Man and the Wasp',
      'Captain Marvel',
      'Avengers: Endgame'
    ]
  }
};

export const BY_REVENUE = {
  series: [
    {
      name: 'Profit/Loss',
      type: 'column',
      data: [
        445174222,
        113427551,
        423933331,
        299326618,
        230569774,
        1298812988,
        1014811252,
        474571402,
        544264267,
        603328629,
        1155403694,
        389311965,
        903304495,
        512718395,
        663756051,
        705166924,
        673977126,
        1146913161,
        1732359754,
        460674139,
        971169767,
        2129499739
      ]
    }
  ],
  yaxis: {
    title: {
      text: 'Profit/Loss ($)'
    },
    labels: {
      formatter: (value: number) => {
        if (value >= 1000000000) {
          return `$ ${(value / 1000000000).toFixed(1)}B`;
        } else if (value >= 1000000) {
          return `$ ${(value / 1000000).toFixed(1)}M`;
        } else {
          return `$ ${value}`;
        }
      }
    }
  }
};

export const BY_PERCENTAGE = {
  series: [
    {
      name: 'Profit/Loss',
      type: 'column',
      data: [
        317.98,
        75.62,
        211.97,
        199.55,
        164.69,
        590.37,
        507.41,
        279.16,
        320.16,
        534.90,
        462.16,
        299.47,
        361.32,
        310.74,
        311.88,
        402.95,
        374.43,
        573.46,
        548.22,
        284.37,
        638.93,
        598.17
      ]
    }
  ],
  yaxis: {
    title: {
      text: 'Profit/Loss (%)'
    },
    labels: {
      formatter: (value: number) => {
        return `${value} %`;
      }
    }
  }
};
