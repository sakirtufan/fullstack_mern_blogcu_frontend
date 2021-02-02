import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'


const useStyles = makeStyles((theme) => ({
  
}))



export const PostsList = () => {

  const posts = useSelector((state) => state.posts.posts);

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} alignContent="stretch">
        {posts.length > 0 && posts.map((post) => (
          <Grid item key={post?._id} xs={12} md={4}>
            <Post {...post} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
