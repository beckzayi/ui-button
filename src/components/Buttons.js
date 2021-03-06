import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { defaultTheme, typeScale } from '../utils';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px;
    `,
    warning: () => `
        background-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.textColorInverted};
        &:hover, &:focus {
            background-color: ${defaultTheme.status.warningColorHover};
            outline: 3px solid ${defaultTheme.status.warningColorHover};
            outline-offset: 2px;
            border: 2px solid transparent;
        }
        &:active {
            background-color: ${defaultTheme.status.warningColorActive};
        }
    `,
    primaryButtonWarning: () => `
        background-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.textColorInverted};
    `,
    secondaryButtonWarning: () => `
        border: 2px solid ${defaultTheme.status.warningColor};
    `,
    error: () => `
        background-color: ${defaultTheme.status.errorColor};
        color: ${defaultTheme.textColorInverted};
        &:hover, &:focus {
            background-color: ${defaultTheme.status.errorColorHover};
            outline: 3px solid ${defaultTheme.status.errorColorHover};
            outline-offset: 2px;
            border: 2px solid transparent;
        }
        &:active {
            background-color: ${defaultTheme.status.errorColorActive};
        }
    `,
    primaryButtonError: () => `
        background-color: ${defaultTheme.status.errorColor};
        color: ${defaultTheme.textColorInverted};
    `,
    secondaryButtonError: () => `
        border: 2px solid ${defaultTheme.status.warningColor};
    `,
    success: () => `
        background-color: ${defaultTheme.status.successColor};
        color: ${defaultTheme.textColorInverted};
        &:hover, &:focus {
            background-color: ${defaultTheme.status.successColorHover};
            outline: 3px solid ${defaultTheme.status.successColorHover};
            outline-offset: 2px;
            border: 2px solid transparent;
        }
        &:active {
            background-color: ${defaultTheme.status.successColorActive};
        }
    `
}

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

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};

    &:disabled {
        border: 2px solid ${defaultTheme.disabled};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${defaultTheme.primaryColor};
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton
};