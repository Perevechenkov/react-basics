import ChartBar from './ChartBar';
import './Chart.scss';

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map(point => point.value);
  const totalMaxValue = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
