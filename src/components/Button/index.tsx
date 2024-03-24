import React from 'react';
import { IButtonProps } from './types';
import { ButtonContainer } from './styles';

const StyledButton: React.FC<IButtonProps> = ({ title, onClick, children }) => {
  return <ButtonContainer>Logar</ButtonContainer>;
};

export default StyledButton;
