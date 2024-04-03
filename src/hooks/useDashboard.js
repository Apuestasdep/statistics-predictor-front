import { useEffect, useMemo, useState } from 'react';

import {
  AUTOMATIC,
  DEFAULT_PREDICTION_MATCH,
  DEFAULT_TEAM_LOCAL,
  DEFAULT_TEAM_VISIT,
  GOL_DONW,
  GOL_UP,
  MANUAL,
  MATCH_AVERAGE,
} from '../config/constanst';
import { decimalRound } from '../utils';

const useDashboard = () => {
  const [scene, setScene] = useState(AUTOMATIC);
  const [category, setCategory] = useState('Seleciona categoria');
  const [teamLocal, setTeamLocal] = useState(DEFAULT_TEAM_LOCAL);
  const [teamVisit, setTeamVisit] = useState(DEFAULT_TEAM_VISIT);
  const [predictioMatch, setPredictionMatch] = useState(
    DEFAULT_PREDICTION_MATCH
  );

  const handleChangeScene = (value) => setScene(value);

  const handleChangeCategory = ({ target }) => setCategory(target.value);

  const handleChangeTeamLocal = ({ target }) => {
    if (target.name === 'points' && target.value) {
      const gol_first_team = +target.value;

      setTeamLocal({
        ...teamLocal,
        points: gol_first_team,
        over:
          decimalRound(gol_first_team / predictioMatch.averageMatch) - GOL_UP,
        under:
          decimalRound(gol_first_team / predictioMatch.averageMatch) + GOL_DONW,
        averageMatch: decimalRound(
          gol_first_team / predictioMatch.averageMatch
        ),
      });
    } else {
      setTeamLocal({
        ...teamLocal,
        [target.name]: target.value,
      });
    }
  };

  const handleChangeTeamVisit = ({ target }) => {
    setTeamVisit({
      ...teamVisit,
      [target.name]: target.value,
    });
  };

  const handlePredictionMatch = ({ target }) => {
    setPredictionMatch({
      ...predictioMatch,
      [target.name]: target.value,
    });
  };

  const handleSumit = () => {
    console.log('teamLocal', teamLocal);
    console.log('teamVisit', teamVisit);
    console.log('category', category);
    console.log('predictioMatch', predictioMatch);
  };

  const handleCalculate = () => {
    const response = {
      gol_first_team: 57,
      gol_second_team: 46,
      Number_match: 6,
    };

    const { gol_first_team, gol_second_team, Number_match } = response;

    calculateAverage(gol_first_team, gol_second_team, Number_match);
  };

  const isAutomatic = useMemo(() => scene === AUTOMATIC, [scene]);

  const calculateAverage = (gol_first_team, gol_second_team, Number_match) => {
    setTeamLocal({
      ...teamLocal,
      points: gol_first_team,
      over: decimalRound(gol_first_team / Number_match) - GOL_UP,
      under: decimalRound(gol_first_team / Number_match) + GOL_DONW,
      averageMatch: decimalRound(gol_first_team / Number_match),
    });

    setTeamVisit({
      ...teamVisit,
      points: gol_second_team,
      over: decimalRound(gol_second_team / Number_match) - GOL_UP,
      under: decimalRound(gol_second_team / Number_match) + GOL_DONW,
      averageMatch: decimalRound(gol_second_team / Number_match),
    });

    setPredictionMatch({
      ...predictioMatch,
      over: decimalRound(
        (gol_first_team + gol_second_team) / Number_match - MATCH_AVERAGE
      ),
      under:
        decimalRound((gol_first_team + gol_second_team) / Number_match) +
        MATCH_AVERAGE,
      averageMatch: decimalRound(
        (gol_first_team + gol_second_team) / Number_match
      ),
    });
  };

  useEffect(() => {
    if (scene === MANUAL) return;

    const response = {
      gol_first_team: 57,
      gol_second_team: 46,
      Number_match: 6,
    };

    const { gol_first_team, gol_second_team, Number_match } = response;

    calculateAverage(gol_first_team, gol_second_team, Number_match);

    return () => {
      setTeamLocal(DEFAULT_TEAM_LOCAL);
      setTeamVisit(DEFAULT_TEAM_VISIT);
      setPredictionMatch(DEFAULT_PREDICTION_MATCH);
    };
  }, [scene]);

  return {
    AUTOMATIC,
    category,
    handleCalculate,
    handleChangeCategory,
    handleChangeScene,
    handleChangeTeamLocal,
    handleChangeTeamVisit,
    handlePredictionMatch,
    handleSumit,
    isAutomatic,
    MANUAL,
    predictioMatch,
    scene,
    teamLocal,
    teamVisit,
  };
};

export default useDashboard;
