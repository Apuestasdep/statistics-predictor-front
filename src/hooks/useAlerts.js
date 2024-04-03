import Swal from 'sweetalert2';

const useAlerts = () => {
  const showAlertSuccess = (
    text = 'Operacion completada',
    title = 'Felicidades',
    icon = 'success'
  ) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  };

  const showAlertError = (
    text = 'Error de la operacion',
    title = 'Error',
    icon = 'error'
  ) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  };

  return {
    showAlertSuccess,
    showAlertError,
  };
};

export default useAlerts;
