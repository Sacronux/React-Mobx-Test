import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'src/store/context';

import InfoForm from 'components/InfoForm/InfoForm';

export const App = observer(({  }) => {
  const store = useStore();

  return (
      <InfoForm />   
  );
});
