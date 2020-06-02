import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';

const Button = styled.button`
    padding: 8px 12px;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: ${defaultTheme.primaryFont};
    font-size: ${typeScale.paragraph};
    transition: background-color 0.2s linear, color 0.2s linear;
`;

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: 2px solid transparent;
    color: white;
`;

const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};
`;

const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${defaultTheme.primaryColor};
`;

export {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton
};