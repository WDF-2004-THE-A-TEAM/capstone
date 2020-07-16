import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 500
  },
  media: {
    height: 700
  }
})

const SingleStoryCard = props => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/${props.userId}/gallery/stories/${props.story.id}/pages`}>
          <CardMedia className={classes.media} image={props.story.coverImage} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.story.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is my story!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}

export default SingleStoryCard
