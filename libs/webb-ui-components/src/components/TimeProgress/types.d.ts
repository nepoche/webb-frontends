import { ISubQlTime } from '@nepoche/dapp-types';
import { WebbComponentBase } from '@nepoche/webb-ui-components/types';

/**
 * The `TimeProgress` props
 */
export interface TimeProgressProps extends WebbComponentBase {
  /**
   * The start time
   */
  startTime: Date | string | null;
  /**
   * The end time
   */
  endTime: Date | string | null;

  /**
   * Coustome time object
   * */
  now?: ISubQlTime;
}
