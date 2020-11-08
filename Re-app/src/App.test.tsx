import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render fonctionnel', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
