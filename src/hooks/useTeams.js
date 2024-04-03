const { useState } = require('react');

import getApi from '../services/getApi';
import { ROUTE } from '../config';

const useTeams = () => {
  const { showAlertSuccess, showAlertError } = useAlerts();
  const [nameTeam, setNameTeams] = useState('');
  const [categoryId, setCategoryId] = useState(1);

  const handleChangeCategory = ({ target }) => setCategoryId(target.value);

  const handleSendData = async () => {
    try {
      const { data } = await getApi({
        ...ROUTE.TEAMS.create,
        info: {
          name: nameTeam,
          category_id: categoryId,
        },
      });

      showAlertSuccess(data.message);
    } catch (error) {
      showAlertError(error.message);
    }
  };

  return {
    nameTeam,
    setNameTeams,
    handleChangeCategory,
    handleSendData,
  };
};

export default useTeams;
