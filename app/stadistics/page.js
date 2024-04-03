import App from '../_app';
import { LoadStadistics } from '@/src/Scenes';
import { getApi } from '@/src/services/getApi';
import { ROUTE } from '@/src/config/constanst';

export async function getServerSideProps() {
  // Aquí se realizaría la lógica para obtener datos

  try {
    // const { data } = await getApi({
    //   ...ROUTE.SOCCER.GENERAL.getCategoriesAndTeams,
    // });

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => json);

    console.log('julian', data);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error al obtener julian', error);
    return {
      props: {
        data: {},
      },
    };
  }
}

export default function Home(props) {
  console.log('julian', props);
  return (
    <main>
      <App>
        <LoadStadistics />
      </App>
    </main>
  );
}
