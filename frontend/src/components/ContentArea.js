import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CategoryLabel from './CategoryLabel';
import { basicCategory } from '../utils/configure';
import { sortBy } from '../utils/sorting';
import PropTypes from 'prop-types';
import { fetchPostsArea, deletePostsArea, votePost } from '../actions/post';
import { fetchCategoriesArea } from '../actions/category';
import { ordering } from '../actions/ordering';
import PostsShow from './PostsShow';

class ContentArea extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired, categories: PropTypes.array.isRequired,
        order: PropTypes.string, fetchPostsArea: PropTypes.func.isRequired,
        fetchCategoriesArea: PropTypes.func.isRequired, ordering: PropTypes.func.isRequired,
        deletePostsArea: PropTypes.func.isRequired, votePost: PropTypes.func.isRequired
    };

  componentDidMount() {

    this.props.fetchPostsArea();

    this.props.fetchCategoriesArea();
  }
 
  handlePostVote = (post, option) =>this.props.votePost(post.id, option);

  changeOrder = event => this.props.ordering(event.target.value);

  handleDelete = post => this.props.deletePostsArea(post);

 

  render() {

    const { posts, categories, order } = this.props;
    
    return (
      <div>
        <CategoryLabel order={order}
          categories={categories}
          changeOrder={this.changeOrder}
        />
        {categories && categories.length > 0 &&  categories.map((category, i) => (
            <Route exact path={`/${category.path}`}
              key={i} render={() => (
                <PostsShow items={
                    category.path === basicCategory.path
                      ? posts
                      : posts.filter(post => post.category === category.path)
                  }


                  handleVote=
                  {
                    this.handlePostVote
                  }
                  handleDelete={
                    this.handleDelete
                  }
                />
              )}
            />
          ))}
      </div>
    );
  }
}

function mapStateToProps({ posts, categories, order }) { return {posts: sortBy(posts, order),categories,order
      };}

export default connect(mapStateToProps, {fetchPostsArea,fetchCategoriesArea,ordering,deletePostsArea,votePost})(ContentArea);
