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
    ['Argentina', { v: 12308365, f: '$ 12.3 M' }],
    ['Australia', { v: 52067559, f: '$ 52.0 M' }],
    ['Austria', { v: 6338991, f: '$ 6.3 M' }],
    ['Belgium', { v: 6024240, f: '$ 6.0 M' }],
    ['Bolivia', { v: 2612447, f: '$ 2.6 M' }],
    ['Brazil', { v: 56789726, f: '$ 56.8 M' }],
    ['Bulgaria', { v: 1137202, f: '$ 1.1 M' }],
    ['Canada', { v: 218534320, f: '$ 218.5 M' }],
    ['Chile', { v: 13541793, f: '$ 13.5 M' }],
    ['China', { v: 601595201, f: '$ 601.6 M' }],
    ['Colombia', { v: 15487111, f: '$ 15.5 M' }],
    ['Croatia', { v: 925023, f: '$ 905.0 K' }],
    ['Czech Republic', { v: 5052354, f: '$ 5.0 M' }],
    ['Denmark', { v: 7243527, f: '$ 7.2 M' }],
    ['Finland', { v: 3497170, f: '$ 3.5 M' }],
    ['France', { v: 43463629, f: '$ 43.5 M' }],
    ['Germany', { v: 46965204, f: '$ 47.0 M' }],
    ['Greece', { v: 3183673, f: '$ 3.2 M' }],
    ['Hong Kong', { v: 23179967, f: '$ 23.2 M' }],
    ['Hungary', { v: 3415551, f: '$ 3.4 M' }],
    ['Iceland', { v: 672184, f: '$ 672.2 K' }],
    ['India', { v: 52201960, f: '$ 52.2 M' }],
    ['Indonesia', { v: 30428878, f: '$ 30.4 M' }],
    ['Italy', { v: 31904047, f: '$ 31.9 M' }],
    ['Japan', { v: 34556268, f: '$ 34.6 M' }],
    ['Lithuania', { v: 556705, f: '$ 556.7 K' }],
    ['Malaysia', { v: 18368494, f: '$ 18.4 M' }],
    ['Mexico', { v: 61705960, f: '$ 61.7 M' }],
    ['Netherlands', { v: 11165203, f: '$ 11.2 M' }],
    ['New Zealand', { v: 8598970, f: '$ 8.6 M' }],
    ['Nigeria', { v: 1285963, f: '$ 1.3 M' }],
    ['Norway', { v: 7122441, f: '$ 7.1 M' }],
    ['Paraguay', { v: 1214855, f: '$ 1.2 M' }],
    ['Philippines', { v: 28715194, f: '$ 28.7 M' }],
    ['Poland', { v: 8106354, f: '$ 8.1 M' }],
    ['Portugal', { v: 3888473, f: '$ 3.9 M' }],
    ['Romania', { v: 2553091, f: '$ 2.6 M' }],
    ['Russia', { v: 35173560, f: '$ 35.2 M' }],
    ['Serbia & Montenegro', { v: 675434, f: '$ 675.4 K' }],
    ['Singapore', { v: 10933195, f: '$ 10.9 M' }],
    ['Slovakia', { v: 1631185, f: '$ 1.6 M' }],
    ['Slovenia', { v: 551814, f: '$ 551.8 K' }],
    ['South Africa', { v: 6319718, f: '$ 6.3 M' }],
    ['South Korea', { v: 82212989, f: '$ 82.2 M' }],
    ['Spain', { v: 25027466, f: '$ 25.0 M' }],
    ['Sweden', { v: 8451312, f: '$ 8.5 M' }],
    ['Switzerland', { v: 6605462, f: '$ 6.6 M' }],
    ['Taiwan', { v: 22596076, f: '$ 22.6 M' }],
    ['Thailand', { v: 22739865, f: '$ 22.7 M' }],
    ['Turkey', { v: 7059414, f: '$ 7.1 M' }],
    ['Ukraine', { v: 5424965, f: '$ 5.4 M' }],
    ['United Arab Emirates', { v: 11336078, f: '$ 11.3 M' }],
    ['United Kingdom', { v: 89926937, f: '$ 89.9 M' }],
    ['United States', { v: 509913415, f: '$ 509.9 M' }],
    ['Uruguay', { v: 1036908, f: '$ 1.0 M' }],
    ['Venezuela', { v: 375040, f: '$ 375.0 K' }],
    ['Vietnam', { v: 11128696, f: '$ 11.1 M' }]
  ]
};
