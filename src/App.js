import React from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => {
  return (
    <div className="App">
      <div>
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>
      </div>
      <div>
        <PrimaryButton disabled>Primary Disabled</PrimaryButton>
        <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
      </div>
      <GlobalStyle />
    </div>
  );
}

export default App;
