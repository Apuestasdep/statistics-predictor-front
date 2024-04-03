const localStorage = () => {
  const setItem = (key, value) => {
    localStorage.setItem;
  };

  const getItem = (key) => {
    localStorage.getItem;
  };

  return {
    setItem,
    getItem,
  };
};

export default localStorage;
