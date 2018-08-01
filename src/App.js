import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    maxWidth: 400,
  },
  button : {
    backgroundColor : '#f26722',
    colors : '#ffffff'
  },
  cardHeader : {
    backgroundColor : '#49b9e7'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});
class TweetBox extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Card raised={true} className={classes.card}>
      <CardHeader className={classes.cardHeader}
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title="@demo_user"
          />
      <CardContent>
        <TextField className={classes.textField}
          InputLabelProps={{
          shrink: true,
          }}
          multiline={true}
          placeholder="What's Happening?"
          fullWidth
          margin="normal"
          inputProps={{ maxLength: 140 }}
        />
      </CardContent>
      <CardActions >
        <Button variant="contained" color="primary" className={classes.button}>
          Tweet
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </CardActions>
    </Card>
      
    );
  }

}

export default withStyles(styles)(TweetBox);
