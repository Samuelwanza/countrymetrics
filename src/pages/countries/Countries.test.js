import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Countries from './Countries';

test('snapshot of countries page', () => {
  const rocketsList = render(
    <Provider store={store}>
      <Countries />
    </Provider>,
  );

  expect(rocketsList).toMatchSnapshot();
});
