import React from 'react';
import styled from 'styled-components';
import { primaryFont, typeScale } from '../utils';

const Button = styled.button`
    padding: 8px 12px;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: ${primaryFont};
    font-size: ${typeScale.paragraph};
    transition: background-color 0.2s linear, color 0.2s linear;
`;

export {Button};