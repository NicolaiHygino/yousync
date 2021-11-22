import styled from 'styled-components';

export const StyledSearch = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: var(--main-gray);
  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid gray;
  color: white;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 1.4em;
  text-align: center;
  line-height: 0;
  width: 2em;
  color: white;
  margin-right: 20px;
  cursor: pointer;
`;

export const SearchListWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 50px;
  background-color: var(--bg-color);
`;

export const Title = styled.p`
  font-size: .9em;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Thumb = styled.img`
  width: 50px;
  margin-left: 20px;
`;
