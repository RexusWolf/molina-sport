import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from '../navBar';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
