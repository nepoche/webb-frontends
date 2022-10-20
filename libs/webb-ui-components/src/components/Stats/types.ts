import { PropsOf, WebbComponentBase } from '@nepoche/webb-ui-components/types';

import { TitleWithInfoProps } from '../TitleWithInfo/types';

export interface StatItem {
  titleProps: TitleWithInfoProps;
  value: string | number;
}

export interface StatsProps extends PropsOf<'div'>, WebbComponentBase {
  items: Array<StatItem>;
}
