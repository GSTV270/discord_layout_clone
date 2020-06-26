import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelData from '../ChannelData';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;
