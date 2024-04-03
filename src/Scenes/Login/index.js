import React from 'react';

const Login = ({ router }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="d-flex flex-column align-items-center fw-bold fs-4">
      <div>
        <h1 className="mb-5">Bienvenidos futuros millonarios</h1>
      </div>
      <button onClick={handleSubmit} type="button" className="btn btn-primary fs-4">
        Entrar
      </button>
    </div>
  );
};

export default Login;
