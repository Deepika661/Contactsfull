import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import CommentFormDisplay from './CommentFormDisplay';
import { timeOrder } from '../utils/configure';
import PropTypes from 'prop-types';
import { Edit, DeleteForever } from 'material-ui-icons';
import VoteCounter from './VoteCounter';
import moment from 'moment';
import Card from 'material-ui/Card';

const Container = ({ item }) => (
    <div style={{ paddingLeft: 15 }}>

      <ListItemText primary={item.body} secondary={`${moment(item.timestamp)
              .format(timeOrder)} - Author: ${item.author}`}
              />

            </div>
      );

const CommentShow = ({items,
  handleDelete,
  handleVote,
  editComment,
  handleEditButton,
  FormatFinish}) => 
  {

  return (
    <List> {items && items.length > 0 && items.map((item, i) => (
          <div key={i}>
            <Card style=
            {{ padding: 5, 
              margin: 5 
            }}>

              {!(editComment && editComment.id === item.id) && (
                <ListItem>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flex: '1 1 auto'
                    }}
                  >
                    <VoteCounter
                     item={item}
                      handleVote={handleVote}
                       />
                    <Container
                     item={item} />
                    <div
                      style=
                      {{
                        flex: '1 1 auto'
                      }}
                    />
                    <div>
                      <Edit 
                      onClick={() => handleEditButton(item)}
                       />
                      <DeleteForever
                       onClick={() => 
                        handleDelete(item)} />
                    </div>
                  </div>
                </ListItem>
              )}

              {editComment &&
                editComment.id === item.id
                 && (
                  <CommentFormDisplay comment={item}
                    FormatFinish={FormatFinish}
                  />
                )}
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

  CommentShow.propTypes =
   {
      
      items: PropTypes.array.isRequired,
      handleDelete: PropTypes.func.isRequired,
      handleVote: PropTypes.func.isRequired,
      editComment: PropTypes.bool,
      handleEditButton: PropTypes.func.isRequired,
      FormatFinish: PropTypes.func.isRequired
      
};

export default CommentShow;
