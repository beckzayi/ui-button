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

    &:hover {
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryHoverColor};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${defaultTheme.primaryActiveColor};
        border-color: ${defaultTheme.primaryActiveColor};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:disabled {
        cursor: not-allowed;
        background: none;
        color: ${defaultTheme.disabled};
        border: none;
    }
`;

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: 2px solid transparent;
    color: ${defaultTheme.textColorOnPrimary};

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        border-color: ${defaultTheme.disabled};
    }
`;

const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};

    &:disabled {
        border: 2px solid ${defaultTheme.disabled};
    }
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