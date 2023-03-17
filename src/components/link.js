import React from 'react';

export default function Link(props) {
  let linkText = props.linkText;
  let linkURL = props.linkURL;
  return (
      <a className="App-link" href={linkURL} target="_blank" rel="noopener noreferrer">
      {linkText}
    </a>
  );
}