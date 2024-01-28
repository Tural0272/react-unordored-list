import React from 'react';
import './style.css';

const ListComponent = (props) => {
  const { header, children } = props;

  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {children.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

import React from 'react';
import ListComponent from './ListComponent';

const App = () => {
  return (
    <div>
      <h1>Custom List Component Example</h1>
      <ListComponent header="My List">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ListComponent>
    </div>
  );
};

export default App;
