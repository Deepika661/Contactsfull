import React from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import AddIcon from 'material-ui-icons/Add';


const PostButtonDisplay = () => 
{
  return (
    <div
        style={{position: 'fixed',right: 30,bottom: 30,width: 30,height: 55,fill: '#3f51b5'
        }}
    >
      <Link to={`/post/new`} style={{ textDecoration: 'none' }}>
          <Button fab color="contrast">
              <AddIcon />
            </Button>
          </Link>
        </div>
      );
  };

export default PostButtonDisplay;
