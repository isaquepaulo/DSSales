import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as DoneIcon } from '../../assets/imgs/done.svg';
import { ReactComponent as BarchartIcon } from '../../assets/imgs/bar-chart.svg';
import { ReactComponent as AvatarIcon } from '../../assets/imgs/avatar.svg';
import { ReactComponent as SyncIcon } from '../../assets/imgs/sync.svg';
import './styles.css';
import { FilterData, SalesSummaryData } from '../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function SalesSummary({ filterData }: Props) {
  const [summary, setsummary] = useState<SalesSummaryData>(initialSummary);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setsummary(response.data);
      })
      .catch(() => {
        console.log('Error to fetch sales summary');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg?.toFixed(2)} label={'Média'} icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label={'Quantidade'} icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label={'Minima'} icon={<BarchartIcon />} />
      <SalesSummaryCard value={summary?.max} label={'Máxima'} icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
