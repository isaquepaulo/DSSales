import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as DoneIcon } from '../../assets/imgs/done.svg';
import { ReactComponent as BarchartIcon } from '../../assets/imgs/bar-chart.svg';
import { ReactComponent as AvatarIcon } from '../../assets/imgs/avatar.svg';
import { ReactComponent as SyncIcon } from '../../assets/imgs/sync.svg';

import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={430} label={'Média'} icon={<DoneIcon />} />
      <SalesSummaryCard value={44434} label={'Quantidade'} icon={<SyncIcon />} />
      <SalesSummaryCard value={43400} label={'Minima'} icon={<BarchartIcon />} />
      <SalesSummaryCard value={3434} label={'Máxima'} icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
