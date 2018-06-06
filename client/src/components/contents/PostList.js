import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postActions } from 'Actions';
import PostCard from './PostCard';
import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PostList extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const posts = this.props.posts.map(post => <PostCard key={post._id} post={post} />);
    return (
      <div>
        <Button 
          primary 
          as={ Link } 
          to='/post/form' 
          content='+ Create' 
          floated='right' />
        <Card.Group itemsPerRow='3' >
          { posts }
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, postActions)(PostList);