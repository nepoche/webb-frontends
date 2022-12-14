import { ChevronRight, ExternalLinkLine } from '../../icons';
import { Typography } from '../../typography';
import { shortenString } from '../../utils';
import { forwardRef } from 'react';

import { Avatar } from '../Avatar';
import { Label } from '../Label';
import { TitleWithInfo } from '../TitleWithInfo';
import { InputWrapper } from './InputWrapper';
import { RelayerInputProps } from './types';

export const RelayerInput = forwardRef<HTMLDivElement, RelayerInputProps>(
  ({ externalLink, id, info, relayerAddress, ...props }, ref) => {
    return (
      <InputWrapper {...props} ref={ref}>
        <div className='flex flex-col space-y-1'>
          <Label htmlFor={id}>
            <TitleWithInfo
              title='Relayer'
              variant='body4'
              info={info}
              titleComponent='span'
              className='text-mono-100 dark:text-mono-80'
              titleClassName='uppercase !text-inherit'
            />
          </Label>

          {relayerAddress ? (
            <div className='flex items-center space-x-1'>
              <Avatar value={relayerAddress} />

              <Typography component='span' variant='body1' fw='bold'>
                {shortenString(relayerAddress)}
              </Typography>

              {externalLink && <ExternalLinkLine />}
            </div>
          ) : (
            <Typography variant='body1' fw='bold'>
              Add a relayer
            </Typography>
          )}
        </div>

        <ChevronRight className='inline-block' />
      </InputWrapper>
    );
  }
);
