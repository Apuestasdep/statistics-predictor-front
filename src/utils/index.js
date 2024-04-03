export const categoriesList = [
  { id: 1, name: 'Fútbol' },
  { id: 2, name: 'Baloncesto' },
  { id: 3, name: 'Tenis' },
];

export const EQUIPOS = [
  { id: 1, name: 'Equipo 1', category_id: 1 },
  { id: 2, name: 'Equipo 2', category_id: 1 },
  { id: 3, name: 'Equipo 3', category_id: 1 },
  { id: 4, name: 'Equipo 4', category_id: 2 },
  { id: 5, name: 'Equipo 5', category_id: 2 },
  { id: 6, name: 'Equipo 6', category_id: 2 },
  { id: 7, name: 'Equipo 7', category_id: 3 },
  { id: 8, name: 'Equipo 8', category_id: 3 },
  { id: 9, name: 'Equipo 9', category_id: 3 },
];

export const decimalRound = (value) => Math.round(value * 100) / 100;
