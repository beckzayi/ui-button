import React from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from './utils';
import { SignUpModal} from './components';

const App = () => {
  return (
    <div className="App">
      <div>
        <PrimaryButton modifiers={["large", "warning"]}>Primary Button</PrimaryButton>
        <SecondaryButton modifiers={["small", "error", "secondaryButtonError"]}>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>
      </div>
      <div>
        <PrimaryButton disabled modifiers={["large", "success"]}>Primary Disabled</PrimaryButton>
        <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
      </div>
      <div>
        <SignUpModal />
      </div>
      <GlobalStyle />
    </div>
  );
}

export default App;
