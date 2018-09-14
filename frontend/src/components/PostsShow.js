import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Edit, DeleteForever } from 'material-ui-icons';
import VoteCounter from './VoteCounter';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Card from 'material-ui/Card';
import { timeOrder } from '../utils/configure';
import PropTypes from 'prop-types';

const Container = ({ item }) => (
  <div style=
  {{paddingLeft: 15
 }}>
    <ListItemText
      primary={<Link to={`/${item.category}/${item.id}`}
          style={{ 
            textDecoration: 'none', 
            color: 'black' 
          }}
        >
          
          {item.title}
        </Link>
      }


      secondary={`${moment(item.timestamp).format(timeOrder)} - Author: ${item.author} - Comments: ${item.commentCount}`}
    />
  </div>
);

const PostShow = ({ items, handleDelete, handleVote }) => {
  return (
    <List>{items && items.length > 0 && items.map((item, i) => (
          <div key={i}>
          <Card 
          style=
          {{ 
            padding: 5, 
            margin: 5 }}>
              <ListItem>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flex: '1 1 auto'
                  }}
                >
                  <VoteCounter item={item}
                   handleVote={handleVote} />
                  <Container item={item} />
                  <div style={{
                      flex: '1 1 auto'}}
                  />
                  <div>
                    <Link to={`post/edit/${item.id}`}
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      <Edit />
                    </Link>
                      <DeleteForever onClick={() => handleDelete(item)} />
                    </div>
                  </div>
                </ListItem>
              </Card>
            </div>
          ))}
      </List>
    );
  };

Container.propTypes = 
{
  item: PropTypes.object.isRequired
};

PostShow.propTypes =
 {
   handleDelete: PropTypes.func.isRequired,
  handleVote: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
 
};

export default PostShow;
