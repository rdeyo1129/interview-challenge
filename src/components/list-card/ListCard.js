import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import './ListCard.scss'
// import PropTypes from 'prop-types';

class ListCard extends Component {

  render() {

    const {
      header,
      items
    } = this.props;

    // function(){
    //   for (let i = this.items; i < items.length; i++) {
    //     <li>{item[i]}</li>
    //   }
    // }

    return (
      <Base>
        <div className="card">
        <span className="header">{ header }</span>
        {items.map(x => <li>{x}</li>)}
        </div>
      </Base>
    );
  }
}

ListCard.propTypes = {
  /**
   * PropTypes go here.
   */
};

ListCard.defaultProps = {
};

export default ListCard;
