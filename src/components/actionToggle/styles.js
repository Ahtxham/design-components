import styled, { css } from 'styled-components';

export const ToggleWrapper = styled.div`
  position: relative;
`;

export const OptionContainer = styled.div`
  position: absolute;
  height: 0px;
  top: 15px;
  right: 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: var(--gray);

  font-family: var(--bs-font-sans-serif) !important;
  font-size: 14px;
  font-weight: 600;
  z-index: 99;
  transition: height 0.2s;
  overflow: hidden;

  ${({ active, height }) =>
    active &&
    css`
      height: ${height}px;
      border: 2px solid var(--lightgray);
    `}
`;

export const ToggleContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 1;
  cursor: pointer;
`;

export const Options = styled.div`
  background: white;
  padding: 5px 10px;
  height: 40px;
  cursor: pointer;
  border-bottom: 2px solid green;
  &:hover {
    background: var(--bgGradient);
    color: var(--white);
  }
`;

export const Option = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin: 1px;
  background: var(--gray);
`;
