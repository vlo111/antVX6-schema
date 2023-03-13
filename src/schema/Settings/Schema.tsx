import { data } from '../FakeData';

export const InitPortColors: any = (item: any) => {
  const source = data.find((d) => d.id === item.source.cell);
  const target = data.find((d) => d.id === item.target.cell);

  const sport = source?.ports?.find((p) => p.id === item.source.port);
  const tport = target?.ports?.find((p) => p.id === item.target.port);

  if (sport !== undefined) {
    const stroke = source?.attrs?.body?.stroke ?? '';

    sport.attrs.portBody = {
      fill: {
        type: 'linearGradient',
        stops: [
          { offset: '15%', color: `${stroke}B3` },
          { offset: '88%', color: `${stroke}33` }
        ]
      }
    };
  }

  if (tport !== undefined) {
    const stroke = target?.attrs?.body?.stroke ?? '';

    tport.attrs.portBody = {
      fill: {
        type: 'linearGradient',
        stops: [
          { offset: '15%', color: `${stroke}B3` },
          { offset: '88%', color: `${stroke}33` }
        ]
      }
    };
  }
};
