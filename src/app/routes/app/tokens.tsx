import { QueryClient } from '@tanstack/react-query';

import { ContentLayout } from '@/components/layouts';
import { getTokensQueryOptions } from '@/features/tokens/api/get-tokens';
import { TokensList } from '@/features/tokens/components/tokens-list';

export const clientLoader = (queryClient: QueryClient) => async () => {
  const query = getTokensQueryOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const TokensRoute = () => {
  return (
    <ContentLayout title="Users">
      <TokensList />
    </ContentLayout>
  );
};

export default TokensRoute;
