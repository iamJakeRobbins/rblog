import React from 'react';

export default class HeaderComponent extends React.Component {

  render() {
    return (
      <div>
        <h2>this is the thing that happens when you do the thing</h2>
      </div>
    )
  }

  constructor() {
    super();
    console.log('up and running')
  }
}