'use client';

import useTeams from '@/src/hooks/useTeams';
import { categoriesList } from '@/src/utils';
import React from 'react';

const Teams = () => {
  const { 
    nameTeam,
    setNameTeams,
    handleChangeCategory,
    handleSendData,
    } = useTeams();

  return (
    <div className="container bg-secondary-subtle h-40 d-inline-block p-5 d-flex flex-column align-items-center rounded w-50">
      <span className="fs-3 fw-bold">Crear un nuevo equipo</span>
      <div className="d-flex flex-column align-items-center">
        <select
          className="form-select mt-5 p-3 mb-3"
          aria-label="Default select example"
          onChange={handleChangeCategory}
          defaultValue={'1'}
        >
          <option selected>Seleciona una categoria</option>
          {categoriesList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <div className="input-group mb-3 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese un nombre"
            value={nameTeam}
            onChange={(e) => setNameTeams(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary mt-5"
          onClick={handleSendData}
          disabled={nameTeam.length === 0}
        >
          Crear equipo
        </button>
      </div>
    </div>
  );
};

export default Teams;
