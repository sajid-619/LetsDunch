import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React from 'react';
import './SuggestedBox.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 220,
  },
});

const SuggestedBox = ({
  image,
  location,
  date,
  title,
  cost,
  attendingPeople,
  avatar,
}) => {
  const classes = useStyles();
  return (
    <div className="suggested my-4">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h5">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              <div>
                <AccessTimeIcon /> <span>{date}</span>
              </div>
              <div className="d-flex align-items-center joinedPeople">
                <AvatarGroup max={2}>
                  <Avatar src={avatar} />
                  <Avatar src={avatar} />
                </AvatarGroup>
                <p style={{ marginLeft: '20px', marginBottom: '0' }}>
                  {attendingPeople}
                </p>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card-actions d-flex align-items-center justify-content-between">
          <div className="action">
            <p>
              <LocationOnIcon /> <span>{location}</span>
            </p>
            <p>
              <AttachMoneyIcon /> <span>{cost}</span>{' '}
            </p>
          </div>
          <Button className="ui-button">view</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SuggestedBox;
