import { useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';

const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleStart = () => {
    try {
      if (user.data) {
        console.log('user.data', user.data);
        navigate(paths.app.dashboard.getHref());
      } else {
        console.log('user.data', user.data);
        console.log('xx');
        navigate(paths.auth.login.getHref());
      }
    } catch (error) {
      // Backend kapalıysa veya hata varsa login'e yönlendir
      console.log('yy');
      navigate(paths.auth.login.getHref());
    }
  };

  return (
    <div>
      <h1>Welcome to bulletproof react</h1>
      <Button onClick={handleStart}>Start</Button>
    </div>
  );
};

export default LandingRoute;
