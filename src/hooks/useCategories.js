import { useState } from 'react';
import getApi from '../services/getApi';

const useCategories = () => {
  const { showAlertSuccess, showAlertError } = useAlerts();
  const [nameCategory, setNameCategory] = useState('');

  const handleChangeCategory = (e) => setNameCategory(e.target.value);

  const handleSendData = async () => {
    try {
      const { data } = await getApi({
        ...ROUTE.SOCCER.CATEGORIES.create,
        info: { name: nameCategory },
      });

      showAlertSuccess(data.message);
    } catch (error) {
      showAlertError(error.message);
    }
  };

  return {
    nameCategory,
    handleChangeCategory,
    handleSendData,
  };
};

export default useCategories;
