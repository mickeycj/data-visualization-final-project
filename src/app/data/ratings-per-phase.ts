export const RATINGS_PER_PHASE_TITLE = 'Movie ratings of the last three MCU phases';

export const RATINGS_PER_PHASE_DESCRIPTION = `
  Marvel Stuidos chose to split the universe into different phases, where each phase had a clear
  goal in mind on what it wanted to establish to the audiences.<br/>Phase 1 introduced us to the world's
  mightiest heroes, the original six, and ended with the assemble of the team against an alien
  invasion.<br/>Phase 2 followed with the growth of each pre-existing characters, along with
  the introduction of the Guardian of the Galaxies. It ended with establishing an internal conflict
  among the Avengers.<br/>Phase 3 showed the aftermath of the conflicts created, introduced
  the new generation of potential earth-bound heroes, as well as the most powerful hero within the
  MCU: Captain Marvel. In this phase, Thanos was shown to be unstoppable, succedding in causing
  the 'Decimation' which affected all the living things across the universe. Can the surviving
  Avengers undo what Thanos did?
`;

export const RATINGS_PER_PHASE = {
  pieTitle: {
    text: 'Gross Income',
    style: {
      fontSize: '28px'
    }
  },
  pieChart: {
    height: 400,
    width: 400,
    fontFamily: 'Marvel, arial, sans-serif',
    foreColor: '#1A1A64',
    type: 'pie',
    zoom: {
      enabled: false
    }
  },
  pieYaxis: {
    labels: {
      formatter: (value: number) => {
        if (value >= 1000000000) {
          return `$ ${(value / 1000000000).toFixed(1)} B`;
        } else if (value >= 1000000) {
          return `$ ${(value / 1000000).toFixed(1)} M`;
        } else {
          return `$ ${value}`;
        }
      }
    }
  },
  pieLegend: {
    position: 'bottom',
    markers: {
      offsetY: '-2px'
    },
    fontSize: '16px'
  },
  radialChart: {
    height: 400,
    width: 400,
    fontFamily: 'Marvel, arial, sans-serif',
    foreColor: '#1A1A64',
    type: 'radialBar',
    zoom: {
      enabled: false
    }
  },
  radialPlotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '24px',
          color: '#FA3209',
          offsetY: 120
        },
        value: {
          offsetY: 76,
          fontSize: '30px',
          color: undefined,
          formatter: (value: number) => {
              return `${value} %`;
          }
        }
      }
    }
  },
  radialFill: {
    colors: ['#FA3209'],
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  radialStroke: {
    dashArray: 4
  },
  radialLabels: ['Rotten Tomatoes']
};

export const PHASE_1 = {
  toggle: {
    title: 'Phase 1',
    value: 'phase-1'
  },
  pieLabels: [
    'The Avengers',
    'Iron Man 2',
    'Iron Man',
    'Thor',
    'Captain America: The First Avenger',
    'The Incredible Hulk'
  ],
  pieSeries: [
    1518812988,
    623933331,
    585174222,
    449326618,
    370569774,
    263427551
  ],
  radialSeries: [
    92,
    73,
    93,
    77,
    80,
    67
  ]
};

export const PHASE_2 = {
  toggle: {
    title: 'Phase 2',
    value: 'phase-2'
  },
  pieLabels: [
    'Avengers: Age of Ultron',
    'Iron Man 3',
    'Guardians of the Galaxy',
    'Captain America: The Winter Soldier',
    'Thor: The Dark World',
    'Ant-Man'
  ],
  pieSeries: [
    1405403694,
    1214811252,
    773328629,
    714264267,
    644571402,
    519311965
  ],
  radialSeries: [
    75,
    79,
    91,
    90,
    66,
    82
  ]
};

export const PHASE_3 = {
  toggle: {
    title: 'Phase 3',
    value: 'phase-3'
  },
  pieLabels: [
    'Avengers: Endgame',
    'Avengers: lnfinity War',
    'Black Panther',
    'Captain America: Civil War',
    'Captain Marvel',
    'Spider-Man: Homecoming',
    'Guardian of the Galaxy Vol.2',
    'Thor: Ragnaork',
    'Doctor Strange',
    'Ant-Man and the Wasp',
  ],
  pieSeries: [
    2485499739,
    2048359754,
    1346913161,
    1153304495,
    1123169767,
    880166924,
    863756051,
    853977126,
    677718395,
    622674139,
  ],
  radialSeries: [
    95,
    85,
    97,
    91,
    78,
    92,
    84,
    93,
    89,
    88,
  ]
};
