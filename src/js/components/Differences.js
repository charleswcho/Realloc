import React from 'react';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

const colorVal = (difference, val) => (
  <span className={difference < 0 ? 'negative' : 'positive'}>{val}</span>
);

const Differences = ({ diff }) => (
  <ul className="diffs">
    {Object.keys(diff).map((asset, idx) => {
      const { desired, actual, difference, percentDiff } = diff[asset];

      return (
        <li key={idx}>
          <h3 className="title">{asset}</h3>

          <div className="metrics">
            <span className="metric">
              Current <strong>{formatter.format(actual)}</strong>
            </span>

            <span className="metric">
              {colorVal(difference, formatter.format(difference))}{' '}
              {difference < 0 ? 'less ' : 'more '}
              ({colorVal(difference, percentDiff.toFixed(1) + '%')}{' '}
              {difference < 0 ? 'decrease' : 'increase'})
            </span>

            <span className="metric">
              Target <strong>{formatter.format(desired)}</strong>
            </span>
          </div>
        </li>
      );
    })}
  </ul>
);

export default Differences;
