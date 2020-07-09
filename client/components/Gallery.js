import React from 'react'
import {connect} from 'react-redux'
import {fetchAllStories} from '../store/stories'
import SingleStoryCard from './SingleStoryCard'

import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

class Gallery extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllStories()
  }

  render() {
    const {classes} = this.props
    return (
      //create gallery card here
      <div className={classes.root}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {this.props.stories.map(story => {
                return (
                  <Grid key={story.id} item xs={12} sm={3}>
                    <Link to="/page">
                      <SingleStoryCard key={story.id} story={story} />
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </React.Fragment>
      </div>
    )
  }
}

const mapState = state => {
  return {
    stories: state.stories.allStories
  }
}

const mapDispatch = dispatch => {
  return {
    fetchAllStories: () => dispatch(fetchAllStories())
  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Gallery))
