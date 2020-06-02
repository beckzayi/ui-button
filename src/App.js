import React from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => {
  return (
    <div className="App">
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
      <GlobalStyle />
    </div>
  );
}

export default App;
