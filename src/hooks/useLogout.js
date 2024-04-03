import { useRouter } from 'next/navigation';
import useSesion from './useSesion';

const useLogout = () => {
  const { resetSession } = useSesion();
  const router = useRouter();

  const logout = () => {
    resetSession();
    router.push('/');
  };

  return { logout, router };
};

export default useLogout;
