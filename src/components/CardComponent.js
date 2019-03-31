import React, { Component } from 'react'
import styles from './styleCard.module.css';

// Show UI cards - and hold other components as children
class CardComponent extends Component {

  render() {
    return (
      <div>
        <div className={styles.myClass} >
          <React.Fragment>
            {this.props.children}
          </React.Fragment>
          <hr />
        </div>
      </div>
    )
  }
}

export default CardComponent
