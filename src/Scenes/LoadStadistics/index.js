'use client';

import useLoadingStadistics from '@/src/hooks/useLoadingStadistics';
import { EQUIPOS, categoriesList } from '@/src/utils';
import React from 'react';
// import { View, Text } from 'react-native';

const LoadStadistics = () => {
  const {
    teamA,
    teamB,
    handleChangeTeamA,
    handleChangeTeamB,
    handleSendData,
    handleChangeCategory,
    validateForm,
    category,
  } = useLoadingStadistics();

  return (
    <div className="container bg-secondary-subtle h-40 d-inline-block p-5 d-flex flex-column align-items-center rounded w-100">
      <span className="fs-3 fw-bold">Cargar resultados</span>
      <div className="d-flex flex-column align-items-center">
        <select
          className="form-select m-4 p-3"
          value={category}
          onChange={handleChangeCategory}
          defaultValue={0}
        >
          <option selected>Seleciona categoria</option>
          {categoriesList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="d-flex mt-5 justify-content-evenly w-100 text-center fw-bold">
        <div className="d-flex flex-column ">
          <span>EQUIPO LOCAL</span>
          <select
            className="form-select mt-3 p-3 mb-3"
            name="name"
            aria-label="Default select example"
            onChange={handleChangeTeamA}
            defaultValue={0}
          >
            <option selected>Seleciona un equipo</option>
            {EQUIPOS.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            min={0}
            type="number"
            name="result"
            className="form-control"
            placeholder="Ingrese resultado"
            value={teamA.result}
            onChange={(e) => handleChangeTeamA(e)}
          />
        </div>
        <div className="d-flex flex-column">
          <span>EQUIPO VISITANTE</span>
          <select
            className="form-select mt-3 p-3 mb-3"
            name="name"
            aria-label="Default select example"
            onChange={handleChangeTeamB}
            defaultValue={0}
          >
            <option selected>Seleciona un equipo</option>
            {EQUIPOS.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            min={0}
            name="result"
            type="number"
            className="form-control"
            placeholder="Ingrese resultado"
            value={teamB.result}
            onChange={(e) => handleChangeTeamB(e)}
          />
        </div>
      </div>
      <button
        className="btn btn-primary mt-5"
        onClick={handleSendData}
        disabled={!validateForm}
      >
        Guardar resultados
      </button>
    </div>
  );
};

export default LoadStadistics;
