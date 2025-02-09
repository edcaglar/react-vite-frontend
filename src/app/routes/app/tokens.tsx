import { QueryClient } from '@tanstack/react-query';

import { ContentLayout } from '@/components/layouts';

import { getUsersQueryOptions } from '@/features/users/api/get-tokens';
import { UsersList } from '@/features/users/components/users-list';

export const clientLoader = (queryClient: QueryClient) => async () => {
  const query = getUsersQueryOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const UsersRoute = () => {
  return (
    <ContentLayout title="Users">
      <UsersList />
    </ContentLayout>
  );
};

export default UsersRoute;
