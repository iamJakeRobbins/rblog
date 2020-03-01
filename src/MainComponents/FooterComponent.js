import React from 'react';

export default class FooterComponent extends React.Component {

  render() {
    return (
      <div>
        <h2>this be the footer section</h2>
      </div>
    )
  }

  constructor() {
    super();
    console.log('footer is in')
  }
}