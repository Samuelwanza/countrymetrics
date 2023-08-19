import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Country from './Country';

test('snapshot of Rockets page', () => {
  const rocketsList = render(
    <Provider store={store}>
      <Country />
    </Provider>,
  );

  expect(rocketsList).toMatchSnapshot();
});
