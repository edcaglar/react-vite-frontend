import { Spinner } from '@/components/ui/spinner';
import { Table } from '@/components/ui/table';
import { formatDate } from '@/utils/format';

import { useTokens } from '../api/get-tokens';

export const TokensList = () => {
  const usersQuery = useTokens();

  if (usersQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const users = usersQuery.data?.data;

  if (!users) return null;

  return (
    <Table
      data={users}
      columns={[
        {
          title: 'Token Name',
          field: 'token_name',
        },
        {
          title: 'Description',
          field: 'description',
        },
        {
          title: 'Decimal Precision',
          field: 'decimal_precision',
        },
        {
          title: 'Mint Authority',
          field: 'mint_authority',
        },
        {
          title: 'Freeze Authority',
          field: 'freeeze_authority',
        },
        {
          title: 'Mint Public Key',
          field: 'mint_public_key',
        },
        {
          title: 'Created At',
          field: 'createdAt',
          Cell({ entry: { createdAt } }) {
            return <span>{formatDate(createdAt)}</span>;
          },
        },
      ]}
    />
  );
};
