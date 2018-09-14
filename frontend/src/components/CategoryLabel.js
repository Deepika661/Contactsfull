import React from 'react';
import { Link } from 'react-router-dom';
import { VOTE_COUNTER, TIMESTAMP_ORDER } from '../utils/configure';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import Input from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { MenuItem } from 'material-ui/Menu';


const CategoryLabel = ({ categories, order, changeOrder }) => (
    <AppBar position="static">
      <Toolbar>
        {
          categories && categories.length > 0 && categories.map((category, i) => (
            <Link to={`/${category.path}`}key={i}style={{ textDecoration: 'none' }} >
            <Button color="contrast">{category.name}</Button>
              </Link>
          ))
        }

        <FormControl>
          <Select style={{ color: 'black' }} value={order} onChange={changeOrder}input={<Input id="order-tag" />}
          >
            <MenuItem value={VOTE_COUNTER}>
            OrderByVote
            </MenuItem>
            <MenuItem value={TIMESTAMP_ORDER}>
            OrderByTime
            </MenuItem>
            
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
);

    CategoryLabel.propTypes =
     {
      categories: PropTypes.array.isRequired,
      order: PropTypes.string.isRequired,
      changeOrder: PropTypes.func.isRequired
    };

export default CategoryLabel;
