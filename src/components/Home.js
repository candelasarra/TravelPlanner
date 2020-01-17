import React, { useState } from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import SimpleTabs from '../components/SimpleTabs';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Hidden,
  Fab
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { ReactComponent as Helpoutline } from '../components/images/helpoutline.svg';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CardsList from './CardsList';
import { useWindowSize } from './Hooks';
import List from './List';
import Graph from './Graph';
const useStyles = makeStyles(theme => ({
  HomeMainDiv: {
    display: 'flex'
  },
  // appBar: {
  //   [theme.breakpoints.up('sm')]: {
  //     width: `calc(100% - ${256}px)`
  //   }
  // },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 256,

    [theme.breakpoints.down('xs')]: {
      width: '90%'
    }
  },
  search: {
    marginRight: '3%',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#43424B', 0.15),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '400px'
    },
    [theme.breakpoints.down('sm')]: {}
  },
  searchIcon: {
    [theme.breakpoints.down('xs')]: {
      width: 'min-content',
      position: 'relative'
    },
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000DE'
  },
  notificationIcon: {
    color: 'black',
    margin: '10px'
  },
  HelpOutline: {
    margin: '10px'
  },
  inputRoot: {
    display: 'flex',
    color: '#000000DE'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  },
  hiddenSearch: {
    margin: '10px'
  },
  GraphListsDiv: {
    backgroundColor: '#F9F9F9',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}));
const Home = () => {
  const { width } = useWindowSize();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const user = {
    name: 'Candela Sarrabayrouse',
    email: 'candela.sarra@gmail.com',
    img: 'image'
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.HomeMainDiv}>
      <ResponsiveDrawer
        user={user}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <div style={{ width: '100%' }}>
          <AppBar
            position="static"
            className={classes.appBar}
            style={{ backgroundColor: 'white', boxShadow: 'unset' }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon style={{ color: 'black' }} />
              </IconButton>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}
              >
                <Hidden xsDown implementation="css">
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      inputProps={{
                        'aria-label': 'search',
                        color: '#000000DE'
                      }}
                    />
                  </div>
                </Hidden>
                <Hidden
                  smUp
                  implementation="css"
                  className={classes.hiddenSearch}
                >
                  <div className={classes.searchIcon} style={{ margin: '2%' }}>
                    <SearchIcon />
                  </div>
                </Hidden>
                <Helpoutline className={classes.HelpOutline} />
                <div className={classes.notificationIcon}>
                  <NotificationsNoneOutlinedIcon />
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div>
            <SimpleTabs />
          </div>
          <div
            style={{
              padding: '10px',
              display: 'flex',
              overflow: 'scroll',
              maxWidth: mobileOpen || width <= 600 ? width - 20 : width - 276
            }}
          >
            <CardsList cardTitle="Leads" />
            <CardsList cardTitle="Quotes" />
            <CardsList cardTitle="Book/Invoice" />
            <CardsList cardTitle="Departing" />
            <CardsList cardTitle="Returned" />
          </div>
        </div>
        <div className={classes.GraphListsDiv}>
          <Graph graphTitle="Gross Sales" width={width} />
          <List cardTitle="To Dos & Remainders" />
          <List cardTitle="Upcoming Trips" />
        </div>
      </div>
      <Fab
        color="secondary"
        aria-label="add"
        style={{
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed',
          zIndex: 1000
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
export default Home;
