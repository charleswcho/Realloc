import React from 'react';
import { Link } from 'react-router';
// Components
import DonutChart from './DonutChart';
import Paper from 'material-ui/Paper';
// Constants
import { PROFILES, PORTFOLIOS } from '../constants/profileConstants';
import { BUTTON } from '../constants/contentConstants';

const RiskProfile = ({ riskVal, submitDesiredPortfolio }) => {
  let profile;

  if (riskVal < 3) {
    profile = PORTFOLIOS[0];
  } else if (riskVal >= 3 && riskVal <= 6) {
    profile = PORTFOLIOS[1];
  } else {
    profile = PORTFOLIOS[2];
  }

  submitDesiredPortfolio(PROFILES[profile]);

  return (
    <Paper className="risk-profile" zDepth={3}>
      <h1>{profile}</h1>

      <DonutChart data={PROFILES[profile]} />

      <Link className="continue" to={'/alloc'}>
        {BUTTON.name}
      </Link>
    </Paper>
  );
};

export default RiskProfile;
