import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux';

// import { getPosts } from '../../actions/posts';
// // import Posts from '../Posts/Posts';
// // import Form from '../Form/Form';

const Home = () => {
//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <h1>Hi</h1>
      </Container>
    </Grow>
  );
};

export default Home;