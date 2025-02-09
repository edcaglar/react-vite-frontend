import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

const DashboardRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Dashboard">
      <h1 className="text-xl">
        Welcome <b>{`${user.data?.username}`}</b>
      </h1>
      <p className="font-medium">In this application you can:</p>
    </ContentLayout>
  );
};

export default DashboardRoute;
