import React from 'react';
import cx from 'classnames';

const Box = ({as: BoxElement = 'div', pt = 0, ...props}) => (
  <BoxElement className={cx('box', `pt-${pt}`)} {...props} />
);

const App = () => (
  <main>
    <Box pt={2}>Hello, World!</Box>
    <Box pt={4}>Hello, World!</Box>
  </main>
);

export default App;
