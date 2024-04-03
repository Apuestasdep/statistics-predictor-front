export const API = 'http://localhost:3000';
export const DB = 'NOSE';

export const AUTOMATIC = 'automatic';
export const MANUAL = 'manual';

// RESTAMOS - como debemos mercar la prediccion a fallo restamos 1.5 a la media de goles
export const GOL_UP = 1.5;
// SUMAMOS - como debemos mercar la prediccion a acierto sumamos 3 a la media de goles
export const GOL_DONW = 3;
// RESTAMOS - CUANDO ES POR ENCIMA Y  SUMAMOS CUANDO ES POR DEBAJO
export const MATCH_AVERAGE = 2;

export const DEFAULT_TEAM_LOCAL = {
  id: 0,
  name: 'Equipo local',
  points: '',
  result: '',
  over: '',
  under: '',
  averageMatch: '',
};

export const DEFAULT_TEAM_VISIT = {
  id: 0,
  name: 'Equipo visitante',
  points: '',
  result: '',
  over: '',
  under: '',
  averageMatch: '',
};

export const DEFAULT_PREDICTION_MATCH = {
  over: '',
  under: '',
  averageMatch: '',
};
