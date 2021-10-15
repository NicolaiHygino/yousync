import { Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components';
import { Content } from 'globalStyles';

export const LoginContent = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  width: 100%;
`;

export const StyledField = styled(Field)`
  border: 1px solid var(--lines);
  background-color: var(--black-gray);
  padding: .8em;
  color: white;
  width: 100%;
`;

export const StyledError = styled(ErrorMessage)`
  font-size: .8em;
  color: var(--main-red);
`;

export const Button = styled.button`
  border: 0;
  border-radius: 0;
  background-color: var(--black-gray);
  padding: .7em 1.5em;
  color: white;
  font-weight: 600;
  font-size: .8em;
  cursor: pointer;
  transition: all 500ms ease;

  &:hover {
    background-color: var(--main-red);
    border-radius: 5px;
  }
`;

export const Image = styled.img`
  margin-bottom: 40px;
`;

export const Required = styled.span`
  color: var(--main-red);
`;

export const FieldWrapper = styled.div`
  margin-bottom: 20px;
`;