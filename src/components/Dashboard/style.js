import styled from 'styled-components';
import { Content } from 'globalStyles';

export const DashContent = styled(Content)`
  padding-top: 50px;
`;

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