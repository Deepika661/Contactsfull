import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContentArea from './ContentArea';
import PostsData from './PostsData';
import PostButtonDisplay from './PostButtonDisplay';
import PostContentForm from './PostContentForm';

class App extends Component {
  
  render() {
    return (
          <div>

            <Route path="/" component={ContentArea} />
              <Route exact path="/" component={PostButtonDisplay} />
              <Route exact path="/:category" component={PostButtonDisplay} />
              <Switch>
                <Route path="/post/new" component={PostContentForm} />
                <Route path="/post/edit/:postId" component={PostContentForm} />
                <Route path="/:category/:postId" component={PostsData} />
              </Switch>
            </div>
    );
  }
}

export default App;
