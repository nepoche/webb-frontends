import { Loadable } from '@nepoche/stats-dapp/provider/hooks/types';
import { Metadata, useStatsContext } from '@nepoche/stats-dapp/provider/stats-provider';
import { useMemo } from 'react';

export function useCurrentMetaData(): Loadable<Metadata> {
  const { isReady, metaData } = useStatsContext();
  return useMemo(() => {
    if (isReady) {
      return {
        val: metaData,
        isFailed: false,
        isLoading: false,
      };
    }
    return {
      val: null,
      isLoading: true,
      isFailed: false,
    };
  }, [metaData, isReady]);
}
