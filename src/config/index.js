export const ROUTE = {
  SOCCER: {
    GENERAL: {
      getCategoriesAndTeams: {
        url: '/sports/soccer/get_info',
        method: 'GET',
      },
      getInfo: (first_team_id, first_value, second_team_id, second_value) => ({
        url: `/sports/soccer/get_goals_teams?first_team_id=${first_team_id}&second_team_id=${second_team_id}&first_value=${first_value}&second_value=${second_value}`,
        method: 'GET',
      }),
    },
    TEAMS: {
      create: {
        url: '/sports/soccer/create_team',
        method: 'POST',
      },
    },
    CATEGORIES: {
      create: {
        url: '/sports/soccer/create_category',
        method: 'POST',
      },
    },
    MATCH: {
      create: {
        url: '/sports/soccer/save_match',
        method: 'POST',
      },
    },
  },
};
