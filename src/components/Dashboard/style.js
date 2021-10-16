import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: var(--main-gray);
  padding: 0 16px;
`;

export const Logo = styled.img`
  height: 20px;
`;
