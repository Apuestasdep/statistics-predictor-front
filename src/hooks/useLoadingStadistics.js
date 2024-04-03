import { useMemo, useState } from 'react';
import getApi from '../services/getApi';
import { ROUTE } from '../config';

const useLoadingStadistics = () => {
  const [teamA, setTeamA] = useState({
    id: 0,
    name: '',
    result: 0,
  });
  const [teamB, setTeamB] = useState({
    id: 0,
    name: '',
    result: 0,
  });
  const [category, setCategory] = useState('');

  const handleChangeTeamA = ({ target }) => {
    setTeamA({
      ...teamA,
      [target.name]: target.value,
    });
  };

  const handleChangeTeamB = ({ target }) =>
    setTeamB({
      ...teamB,
      [target.name]: target.value,
    });

  const handleChangeCategory = ({ target }) => setCategory(target.value);

  const handleSendData = () => {
    getApi({
      ...ROUTE.SOCCER.MATCH.create,
      info: {
        first_team_id: teamA.result,
        first_value: 0,
        second_team_id: teamB.result,
        second_value: 0,
      },
    });
  };

  const validateForm = useMemo(
    () => teamA.name !== '' && teamB.name !== '' && category !== '',
    [teamA, teamB, category]
  );

  return {
    teamA,
    teamB,
    handleChangeTeamA,
    handleChangeTeamB,
    handleSendData,
    handleChangeCategory,
    validateForm,
    category,
  };
};

export default useLoadingStadistics;
