import React, { useEffect, useState } from 'react';

import { data as fakeData } from '../FakeData';
import '../Settings/InitSchema';

import Chart from './Chart';
import { IGraph } from '../Types/Schema';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<IGraph[]>();

  useEffect(() => {
    setData(fakeData);
  }, []);

  return (
    <Chart data={data}/>
  );
};

export default Dashboard;
