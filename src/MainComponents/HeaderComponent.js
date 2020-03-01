import React from 'react';

export default class HeaderComponent extends React.Component {

  render() {
    return (
      <div>
        <h1>this is the thing that happens when you do the thing</h1>
      </div>
    )
  }

  constructor() {
    super();
    console.log('up and running')
  }
}