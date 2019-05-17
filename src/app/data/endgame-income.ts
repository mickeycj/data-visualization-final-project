export const ENDGAME_INCOME_TITLE = 'Gross income from Avengers: Endgame worldwide';

export const ENDGAME_INCOME_DESCRIPTION = `
  Avengers: Endgame, the latest installment of the Marvel Cinematic Universe, the second-to-last
  installment of Phase 3, grossed home over 2.5 billion dollars worldwide. It became the top grossing
  superhero film of all time, and the second most profitable film after Titanic.
`;

export const ENDGAME_INCOME = {
  type: 'GeoChart',
  options: {
    colorAxis: {
      colors: ['#AE9FFF', '#1A1A64']
    },
    backgroundColor: '#C6E2FF',
    tooltip: {
      textStyle: {
        fontName: 'Marvel'
      }
    },
    legend: {
      textStyle: {
        fontName: 'Marvel'
      }
    }
  },
  columnNames: ['Country', 'Gross Income'],
  data: [
    ['Argentina', { v: 14961813, f: '$ 15.0 M' }],
    ['Australia', { v: 52067559, f: '$ 52.0 M' }],
    ['Austria', { v: 7295802, f: '$ 7.3 M' }],
    ['Belgium', { v: 7082274, f: '$ 7.1 M' }],
    ['Bolivia', { v: 2612447, f: '$ 2.6 M' }],
    ['Brazil', { v: 72534333, f: '$ 72.5 M' }],
    ['Bulgaria', { v: 1333473, f: '$ 1.3 M' }],
    ['Canada', { v: 73797837, f: '$ 73.8 M' }],
    ['Chile', { v: 15871727, f: '$ 15.9 M' }],
    ['China', { v: 601595201, f: '$ 601.6 M' }],
    ['Colombia', { v: 15487111, f: '$ 15.5 M' }],
    ['Croatia', { v: 1057992, f: '$ 1.1 M' }],
    ['Czech Republic', { v: 5939209, f: '$ 5.9 M' }],
    ['Denmark', { v: 8518416, f: '$ 8.5 M' }],
    ['Finland', { v: 4089204, f: '$ 4.1 M' }],
    ['France', { v: 52317721, f: '$ 52.3 M' }],
    ['Germany', { v: 54313636, f: '$ 54.3 M' }],
    ['Greece', { v: 3794759, f: '$ 3.8 M' }],
    ['Hong Kong', { v: 26404242, f: '$ 26.4 M' }],
    ['Hungary', { v: 3991916, f: '$ 4.0 M' }],
    ['Iceland', { v: 672184, f: '$ 672.2 K' }],
    ['India', { v: 58385468, f: '$ 58.4 M' }],
    ['Indonesia', { v: 33417666, f: '$ 33.4 M' }],
    ['Italy', { v: 31904047, f: '$ 31.9 M' }],
    ['Japan', { v: 42786826, f: '$ 42.8 M' }],
    ['Lithuania', { v: 556705, f: '$ 556.7 K' }],
    ['Malaysia', { v: 19839976, f: '$ 19.8 M' }],
    ['Mexico', { v: 69640223, f: '$ 69.6 M' }],
    ['Netherlands', { v: 12868103, f: '$ 12.9 M' }],
    ['New Zealand', { v: 8598970, f: '$ 8.6 M' }],
    ['Nigeria', { v: 1285963, f: '$ 1.3 M' }],
    ['Norway', { v: 7122441, f: '$ 7.1 M' }],
    ['Paraguay', { v: 1214855, f: '$ 1.2 M' }],
    ['Philippines', { v: 31344799, f: '$ 31.3 M' }],
    ['Poland', { v: 9215075, f: '$ 9.2 M' }],
    ['Portugal', { v: 3888473, f: '$ 3.9 M' }],
    ['Romania', { v: 2553091, f: '$ 2.6 M' }],
    ['Russia', { v: 42501812, f: '$ 42.5 M' }],
    ['Serbia', { v: 675434, f: '$ 675.4 K' }],
    ['Singapore', { v: 12493287, f: '$ 12.5 M' }],
    ['Slovakia', { v: 1841865, f: '$ 1.8 M' }],
    ['Slovenia', { v: 551814, f: '$ 551.8 K' }],
    ['South Africa', { v: 6319718, f: '$ 6.3 M' }],
    ['South Korea', { v: 96465163, f: '$ 96.5 M' }],
    ['Spain', { v: 28609379, f: '$ 28.6 M' }],
    ['Sweden', { v: 9850460, f: '$ 9.9 M' }],
    ['Switzerland', { v: 7623071, f: '$ 7.6 M' }],
    ['Taiwan', { v: 26181696, f: '$ 26.2 M' }],
    ['Thailand', { v: 25574766, f: '$ 25.6 M' }],
    ['Turkey', { v: 7059414, f: '$ 7.1 M' }],
    ['Ukraine', { v: 5424965, f: '$ 5.4 M' }],
    ['United Arab Emirates', { v: 11336078, f: '$ 11.3 M' }],
    ['United Kingdom', { v: 104405677, f: '$ 104.4 M' }],
    ['United States', { v: 664180537, f: '$ 664.2 M' }],
    ['Uruguay', { v: 1036908, f: '$ 1.0 M' }],
    ['Venezuela', { v: 375040, f: '$ 375.0 K' }],
    ['Vietnam', { v: 11128696, f: '$ 11.1 M' }]
  ]
};
