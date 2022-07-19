import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};
function PieChardCard({ labels, name, series }: Props) {
  return (
    <div className="pie-chard-card base-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="400"
        height="400"
        series={series}
      />
    </div>
  );
}

export default PieChardCard;
