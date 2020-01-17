import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const SimpleTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square elevation={0} style={{ boxShadow: '0px 1px 0px #E8E8E8' }}>
      <Tabs
        value={value}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={handleChange}
        aria-label="tabs"
      >
        <Tab label="TODAY" />
        <Tab label="INBOX" />
      </Tabs>
    </Paper>
  );
};

export default SimpleTabs;
