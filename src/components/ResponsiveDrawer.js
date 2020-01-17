import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import {
  Dashboard,
  Person,
  Business,
  Check,
  Description,
  Receipt,
  InsertInvitation,
  BarChart,
  SettingsApplications,
  HelpOutline
} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import hex2rgb from 'hex2rgb';
import { ReactComponent as Suitcase } from '../components/images/suitcase.svg';

const drawerItems = [
  { name: 'Dashboard', icon: <Dashboard />, color: '#C01823' },
  { name: 'Contacts', icon: <Person />, color: '#E39800' },
  { name: 'Suppliers', icon: <Business />, color: '#A3BF2D' },
  { name: 'Tasks', icon: <Check />, color: '#01C255' },
  { name: 'Quotes', icon: <Description />, color: '#3195F8' },
  { name: 'Invoices', icon: <Receipt />, color: '#2A5FB9' },
  { name: 'Calendar', icon: <InsertInvitation />, color: '#6F43D9' },
  { name: 'Reports', icon: <BarChart />, color: '#EC00E4' },
  { name: 'Settings', icon: <SettingsApplications />, color: '#EC0066' },
  { name: 'Help', icon: <HelpOutline />, color: '#43424B' }
];
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 256,
      flexShrink: 0
    },
    [theme.breakpoints.down('xs')]: {
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${256}px)`,
      marginLeft: 256
    }
  },
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
    margin: '2%'
  },
  HelpOutline: {
    margin: '2%'
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
    margin: '2%'
  }
}));

const ResposiveDrawer = ({ user, mobileOpen, handleDrawerToggle }) => {
  const [selectedListItem, setSelectedListItem] = useState(null);

  const classes = useStyles();
  const theme = useTheme();
  // const [mobileOpen, setMobileOpen] = useState(false);
  const [listColor, setListColor] = useState(null);
  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };
  console.log();

  const drawer = (
    <div style={{ backgroundColor: '#F2F3F5', height: '100%' }}>
      <div
        className={classes.toolbar}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Suitcase style={{ padding: '4%', marginLeft: '5%' }} />
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
          Suitcase CRM
        </Typography>
      </div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{
          height: 100,
          padding: 15,
          borderTop: '0.5px solid #00000029',
          borderBottom: '0.5px solid #00000029'
        }}
      >
        <Grid item xs>
          <Typography>{user.img}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle2" style={{ opacity: '0.87' }}>
            {user.name}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="caption" style={{ opacity: '0.6' }}>
            {user.email}
          </Typography>
        </Grid>
      </Grid>

      <List
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 16
        }}
      >
        {drawerItems.map((item, index) => (
          <ListItem
            button
            key={item.name}
            onClick={() => selectItem(index)}
            selected={index === selectedListItem ? true : false}
            style={{
              backgroundColor:
                listColor && index === selectedListItem
                  ? `Rgb(${listColor.rgb[0]},${listColor.rgb[1]},${listColor.rgb[2]}, 0.1 )`
                  : '#F2F3F5',
              borderRadius: 4,
              width: '95%',
              height: 40,
              padding: '8px'
            }}
          >
            <ListItemIcon
              style={{
                color: `${item.color}`,
                minWidth: 'min-content',
                margin: '8px',
                marginRight: '15px'
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              style={{
                color:
                  index === selectedListItem ? `${item.color}` : '#000000AB'
              }}
            >
              <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                {' '}
                {item.name}{' '}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const selectItem = index => {
    setSelectedListItem(index);
    setListColor(hex2rgb(drawerItems[index].color));
  };

  return (
    <React.Fragment>
      {/* <AppBar
        position="fixed"
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
                  inputProps={{ 'aria-label': 'search', color: '#000000DE' }}
                />
              </div>
            </Hidden>
            <Hidden smUp implementation="css" className={classes.hiddenSearch}>
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
      </AppBar> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
};

export default ResposiveDrawer;
