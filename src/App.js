import React from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';

const App = () => {
  return (
    <div className="App">
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
    </div>
  );
}

export default App;
