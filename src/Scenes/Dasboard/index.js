'use client';

import useDashboard from '@/src/hooks/useDashboard';
import { EQUIPOS, categoriesList } from '@/src/utils';
import React from 'react';

const Dasboard = () => {
  const {
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
  } = useDashboard();

  return (
    <div className="container bg-secondary-subtle h-40 pb-5 rounded w-50 overflow-y-auto mt-3">
      <nav class="container nav nav-pills flex-column flex-sm-row">
        <li
          class={`d-flex justify-content-center align-items-center ${
            scene === AUTOMATIC
              ? 'flex-sm-fill text-sm-center nav-link active '
              : 'flex-sm-fill text-sm-center nav-link'
          }`}
        >
          <button
            className={`${
              scene === AUTOMATIC ? 'nav-link active' : 'nav-link'
            } `}
            onClick={() => handleChangeScene(AUTOMATIC)}
          >
            Automatico
          </button>
        </li>
        <li
          class={`d-flex justify-content-center align-items-center ${
            scene === MANUAL
              ? 'flex-sm-fill text-sm-center nav-link active '
              : 'flex-sm-fill text-sm-center nav-link'
          }`}
        >
          <button
            className={`${scene === MANUAL ? 'nav-link active' : 'nav-link'} `}
            onClick={() => handleChangeScene(MANUAL)}
          >
            Manual
          </button>
        </li>
      </nav>

      <div className="container">
        <div className="d-flex flex-column align-items-center bg-warning-subtle mt-4 p-2 pb-3">
          <select
            className="form-select p-3 w-50"
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
          <div className="d-flex justify-content-evenly w-100 text-center fw-bold">
            <div className="d-flex flex-column ">
              <select
                className="form-select mt-3 p-3 mb-3"
                name="name"
                aria-label="Default select example"
                onChange={handleChangeTeamLocal}
                defaultValue={0}
              >
                <option selected>Seleciona equipo local</option>
                {EQUIPOS.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <input
                min={0}
                type="number"
                name="points"
                className="form-control"
                placeholder="Ingrese goles"
                value={teamLocal.points}
                onChange={(e) => handleChangeTeamLocal(e)}
                disabled={isAutomatic}
              />
            </div>
            <div className="d-flex flex-column">
              <select
                className="form-select mt-3 p-3 mb-3"
                name="name"
                aria-label="Default select example"
                onChange={handleChangeTeamVisit}
                defaultValue={0}
              >
                <option selected>Seleciona equipo visitante</option>
                {EQUIPOS.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <input
                min={0}
                name="points"
                type="number"
                className="form-control"
                placeholder="Ingrese goles"
                value={teamVisit.points}
                onChange={(e) => handleChangeTeamVisit(e)}
                disabled={isAutomatic}
              />
            </div>
          </div>
          {scene === MANUAL && (
            <div className="d-flex justify-content-center mt-3">
              <button
                className="btn btn-primary mt-3"
                onClick={handleCalculate}
              >
                Calcular
              </button>
            </div>
          )}
        </div>

        <div className="d-flex flex-column align-items-center bg-success-subtle mt-4 p-2 pb-3 fw-bold">
          <span className="fs-3"> PROMEDIOS </span>
          <div className="d-flex justify-content-evenly w-100 text-center fw-bold mt-3">
            <div
              className="d-flex flex-row align-items-center justify-content-around w-100
            "
            >
              <span style={{ width: '35%' }}>RESULTADO PARTIDO</span>
              <input
                style={{ width: '32%' }}
                min={0}
                type="number"
                name="result"
                className="form-control"
                placeholder="Goles local"
                value={teamLocal.result}
                onChange={(e) => handleChangeTeamLocal(e)}
              />
            </div>
            <input
              style={{ width: '32%' }}
              min={0}
              name="result"
              type="number"
              className="form-control"
              placeholder="Goles visitante"
              value={teamVisit.result}
              onChange={(e) => handleChangeTeamVisit(e)}
            />
          </div>

          <div className="d-flex justify-content-evenly w-100 text-center fw-bold mt-3">
            <div
              className="d-flex flex-row align-items-center justify-content-around w-100
            "
            >
              <span style={{ width: '35%' }}>PROMEDIO X EQUIPO</span>
              <input
                style={{ width: '32%' }}
                min={0}
                type="number"
                name="averageMatch"
                className="form-control"
                placeholder="Resultado local"
                value={teamLocal.averageMatch}
                onChange={(e) => handleChangeTeamLocal(e)}
                disabled
              />
            </div>
            <input
              style={{ width: '32%' }}
              min={0}
              name="number"
              type="averageMatch"
              className="form-control"
              placeholder="Resultado visitante"
              value={teamVisit.averageMatch}
              onChange={(e) => handleChangeTeamVisit(e)}
              disabled
            />
          </div>

          <div className="d-flex justify-content-evenly w-100 text-center fw-bold mt-3">
            <div
              className="d-flex flex-row align-items-center justify-content-between w-100
            "
            >
              <span style={{ width: '40%' }}>PROMEDIO DE PARTIDO</span>
              <input
                style={{ width: '55%' }}
                min={0}
                type="number"
                name="result"
                className="form-control "
                placeholder="Resultado local"
                value={predictioMatch.averageMatch}
                onChange={(e) => handlePredictionMatch(e)}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center bg-primary-subtle mt-4 p-2 pb-3 fw-bold">
          <div className="column d-flex w-100">
            <span className="col-3 fs-4 text-center"> GOLES</span>
            <span className="col-9 fs-4 text-center"> PROMEDIOS ESPERADOS</span>
          </div>
          <div className="d-flex justify-content-evenly w-100 text-center fw-bold mt-3 column align-items-center">
            <span style={{ width: '30%' }}>MAS DE</span>
            <input
              style={{ width: '35%' }}
              min={0}
              type="number"
              name="over"
              className="form-control col-2"
              placeholder="Resultado local"
              value={teamLocal.over}
              onChange={(e) => handleChangeTeamLocal(e)}
              disabled
            />
            <input
              style={{ width: '35%' }}
              min={0}
              name="over"
              type="number"
              className="form-control col-2"
              placeholder="Resultado visitante"
              value={teamVisit.over}
              onChange={(e) => handleChangeTeamVisit(e)}
              disabled
            />
          </div>

          <div className="d-flex w-100 text-center fw-bold mt-3 align-items-center">
            <span style={{ width: '30%' }}>MENOS DE</span>
            <input
              style={{ width: '35%' }}
              min={0}
              type="number"
              name="under"
              className="form-control"
              placeholder="Resultado local"
              value={teamLocal.under}
              onChange={(e) => handleChangeTeamLocal(e)}
              disabled
            />
            <input
              style={{ width: '35%' }}
              min={0}
              name="under"
              type="number"
              className="form-control"
              placeholder="Resultado visitante"
              value={teamVisit.under}
              onChange={(e) => handleChangeTeamVisit(e)}
              disabled
            />
          </div>

          <div className="d-flex justify-content-evenly w-100 text-center fw-bold mt-3 ">
            <div className="d-flex flex-row align-items-center justify-content-between w-100">
              <span
                className="d-flex align-items-center mt-4 justify-content-center"
                style={{ width: '30%', height: '100%' }}
              >
                PROM X PART ESPERADO
              </span>
              <div style={{ width: '35%' }}>
                <span>ENCIMA</span>
                <input
                  min={0}
                  type="number"
                  name="over"
                  className="form-control"
                  placeholder="Resultado local"
                  value={predictioMatch.over}
                  onChange={(e) => handlePredictionMatch(e)}
                  disabled
                />
              </div>
              <div style={{ width: '35%' }}>
                <span>ENCIMA</span>
                <input
                  min={0}
                  type="number"
                  name="under"
                  className="form-control"
                  placeholder="Resultado local"
                  value={predictioMatch.under}
                  onChange={(e) => handlePredictionMatch(e)}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary mt-3" onClick={handleSumit}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Dasboard;
