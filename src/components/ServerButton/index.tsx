import React from 'react';

import { Button, DiscordIcon } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => (
  <Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? 'active' : ''}
  >
    {isHome && <DiscordIcon />}
  </Button>
);

export default ServerButton;
