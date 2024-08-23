import React from "react";
import { Container, DropdownContainer, ErrorText } from "./style";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  showError?: boolean;
}
const Dropdown = ({ title, children, showError }: DropdownProps) => {
  return (
    <div>
      <Container>
        <h4>{title}</h4>
        <DropdownContainer  showError={showError}>{children}</DropdownContainer>
        {showError && <ErrorText>Please choose breed</ErrorText>}
      </Container>
    </div>
  );
};

export default Dropdown;
