import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import hex2rgb from 'hex2rgb';
import { ReactComponent as Threedots } from '../components/images/threedots.svg';

const getRelativeTime = inputTime => {
  const today = new Date().getTime();
  const milliInput = new Date(inputTime).getTime();

  const diff = Math.abs((today - milliInput) / 1000);
  if (diff >= 604800) {
    const weeks = Math.floor(diff / 604800);
    return `${weeks} weeks`;
  } else if (diff >= 86400) {
    const days = Math.floor(diff / 86400);
    return `${days} days`;
  } else if (diff >= 3600) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hours`;
  } else if (diff >= 60) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} minutes`;
  }
  const seconds = Math.floor(diff);
  return `${seconds} seconds`;
};

const useStyles = makeStyles({
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
  }
});
const cards = [
  {
    title: 'Trip to Destination',
    ref: 339,
    amt: 0,
    name: 'Jimmy Dean',
    extras: '+10',
    img: 'image',
    standing: 'Just Shopping',
    tasks: '1/4',
    date: Date.now()
  },
  {
    title: 'Trip to Destination',
    ref: 339,
    amt: 0,
    name: 'Jimmy Dean',
    extras: '+10',
    img: 'image',
    standing: 'New Inquiry',
    tasks: '1/4',
    date: Date.now()
  },
  {
    title: 'Trip to Destination',
    ref: 339,
    amt: 0,
    name: 'Jimmy Dean',
    extras: '+10',
    img: 'image',
    standing: 'No Payments Made',
    tasks: '1/4',
    date: Date.now()
  }
];

const colors = {
  'Just Shopping': hex2rgb('#6F43D9'),
  'New Inquiry': hex2rgb('#042460'),
  'Ready to Book': hex2rgb('#005324'),
  'No Payments Made': hex2rgb('#C01823'),
  'Paid in Full': hex2rgb('#005324'),
  'Payments Applied': hex2rgb('#4D3300')
};

const CardsList = ({ cardTitle }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 310,
        backgroundColor: '#F2F3F5',
        padding: 8,
        borderRadius: '4px',
        margin: '10px'
      }}
    >
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          {cardTitle}
        </Typography>
        <Threedots />
      </div>
      <div style={{ flexGrow: 5, overflow: 'scroll', maxHeight: '600px' }}>
        {cards.map(
          ({ title, ref, amt, img, name, tasks, standing, date, extras }) => {
            return (
              <Card
                className={classes.card}
                elevation={0}
                style={{ margin: '10px 0px' }}
              >
                <CardContent className={classes.cardContent}>
                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                    {title}
                  </Typography>
                  <Typography
                    className={classes.pos}
                    style={{ color: '#000000AB', whiteSpace: 'pre' }}
                    variant="body2"
                  >
                    Ref #{ref}. {'    '} Pending Amt. ${amt}
                  </Typography>
                  <div style={{ display: 'flex', alignContent: 'center' }}>
                    <div>{img}</div>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        fontWeight: 'bold',
                        padding: '12%',
                        width: 'fit-content',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography variant="body2" style={{ alignSelf: 'center' }}>
                      {extras}
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: `Rgb(${colors[standing].rgb[0]},${colors[standing].rgb[1]},${colors[standing].rgb[2]}, 0.2 )`,
                        borderRadius: '2px',
                        padding: '2%',
                        width: 'fit-content'
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {standing}
                      </Typography>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#E0F4FA',
                        borderRadius: '2px',
                        padding: '2%',
                        width: 'fit-content'
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        Tasks {tasks}
                      </Typography>
                    </div>
                  </div>
                  <Typography
                    style={{
                      color: '#00000061',
                      position: 'relative',
                      bottom: '-17px'
                    }}
                    variant="caption"
                  >
                    {getRelativeTime(date)} ago
                  </Typography>
                </CardContent>
              </Card>
            );
          }
        )}
      </div>
      <div style={{ flexGrow: 1 }}>
        <Typography variant="caption"> total {cards.length}</Typography>
      </div>
    </div>
  );
};
export default CardsList;
