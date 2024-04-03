// const axios = require('axios');

// (async () => {

//   const options = {
//     method: 'GET',
//     url: 'https://therundown-therundown-v1.p.rapidapi.com/affiliates',
//     headers: {
//       'X-RapidAPI-Key': '74e2362fcfmshfb789d03377a713p185f1bjsn355c61dc3239',
//       'X-RapidAPI-Host': 'therundown-therundown-v1.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.log('====================================');
//     console.log('error');
//     console.log('====================================');
//     // console.error(error);
//   }

// })();

// // https://max-sports.com/calculator-2/
// // DIVISION 4X4

// const apikey = 'NXbK9dDSoGlGx2TiNFh6po9evLh2iWk9'
// // 22 de marzo de 2024
// const url = 'https://sc.bigsports.ru/wp-json/scout_calendar/v1'
// const a = `${url}league=256,290,324,685,7705/date=22.03.2024/status=4?apikey=${apikey}`

// // 25 de marzo de 2024
// const url2 = 'https://sc.bigsports.ru/wp-json/scout_calendar/v1'
// const a2 = `${url2}/league=256,290,324,685,7705/date=25.03.2024/status=4?apikey=${apikey}`

const axios = require('axios');
(async () => {

  const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/leagues/v2/list',
    params: { Category: 'soccer' },
    headers: {
      'X-RapidAPI-Key': '74e2362fcfmshfb789d03377a713p185f1bjsn355c61dc3239',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
})()
