import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title = '', stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(stat => (
          <StatEl
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
function StatEl({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: randomColor(10) }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}
StatEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function randomColor(brightness) {
  function randomChannel(brightness) {
    var r = 255 - brightness;
    var n = 0 | (Math.random() * r + brightness);
    var s = n.toString(16);
    return s.length === 1 ? '0' + s : s;
  }
  return (
    '#' +
    randomChannel(brightness) +
    randomChannel(brightness) +
    randomChannel(brightness)
  );
}
