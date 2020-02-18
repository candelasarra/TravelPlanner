import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import hex2rgb from 'hex2rgb';
import { ReactComponent as Threedots } from '../components/images/threedots.svg';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  mainListDiv: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    borderRadius: '4px',
    margin: '10px',
    border: '1px solid #E5E9F1',
    backgroundColor: '#FFFFFF',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      alignSelf: 'center'
    }
  }
}));
const cards = [
  {
    title: 'Ricky Mount',
    dueDate: 'Jan 16, 2020 9:00 PM',
    status: 'Pending'
  },
  {
    title: 'Ricky Mount',
    dueDate: 'Jan 16, 2020 9:00 PM',
    status: 'Pending'
  },
  {
    title: 'Ricky Mount',
    dueDate: 'Jan 16, 2020 9:00 PM',
    status: 'Pending'
  },
  {
    title: 'Ricky Mount',
    dueDate: 'Jan 16, 2020 9:00 PM',
    status: 'Pending'
  },
  {
    title: 'Ricky Mount',
    dueDate: 'Jan 16, 2020 9:00 PM',
    status: 'Pending'
  },
  {
    title: 'Ricky Mount',
    dueDate: 'Jan 16, 2020 9:00 PM',
    status: 'Pending'
  }
];

const colors = {
  Pending: hex2rgb('#E39800')
};

const List = ({ cardTitle }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.mainListDiv}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 8,
        borderRadius: '4px',
        margin: '10px',
        border: '1px solid #E5E9F1',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div
        style={{
          flexGrow: 1,
          textAlign: 'left',
          margin: '5px'
        }}
      >
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          {cardTitle}
        </Typography>
      </div>
      <div style={{ flexGrow: 5, overflow: 'scroll', maxHeight: '400px' }}>
        {cards.map(({ title, status, dueDate }) => {
          return (
            <Card
              className={classes.card}
              elevation={0}
              style={{ margin: '10px 0px' }}
            >
              <CardContent
                className={classes.cardContent}
                style={{
                  border: '1px solid #E5E9F1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '10px 4px'
                }}
              >
                <Typography
                  variant="body1"
                  style={{ fontWeight: 'bold', textAlign: 'left' }}
                >
                  {title}
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <Typography
                    className={classes.pos}
                    style={{
                      color: '#000000AB',
                      whiteSpace: 'pre',
                      alignSelf: 'center',
                      margin: '3px',
                      marginRight: '50px'
                    }}
                    variant="body2"
                  >
                    Due Date: {dueDate}
                  </Typography>

                  <div
                    style={{
                      backgroundColor: `Rgb(${colors[status].rgb[0]},${colors[status].rgb[1]},${colors[status].rgb[2]}, 0.2 )`,
                      borderRadius: '2px',
                      padding: '5px',
                      width: 'fit-content'
                    }}
                  >
                    <Typography
                      variant="caption"
                      component="p"
                      style={{
                        whiteSpace: 'nowrap',
                        color: `Rgb(${colors[status].rgb[0]},${colors[status].rgb[1]},${colors[status].rgb[2]}, 1 )`
                      }}
                    >
                      {status}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div style={{ flexGrow: 1, margin: '4px' }}>
        <Typography variant="caption" style={{ opacity: '0.6' }}>
          Total {cards.length}
        </Typography>
      </div>
    </div>
  );
};
export default List;
