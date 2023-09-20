import styled, { css, keyframes } from 'styled-components/macro';

const zIndex1 = keyframes`
  from { z-index: 1; }
  to { z-index: 1; }
`;

export const Content = styled.div`
  position: absolute;
  border-radius: 4px;
  transition: bottom 0.3s;
  left: 0;
  right: 0;
  overflow: hidden;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #8080802b;

  &-selected {
    background: rgba(255, 255, 255, 0.1);
  }
  &-disabled {
    opacity: 0.5;
  }

  > span {
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const SelectedItem = styled(Item)`
  position: absolute;
  width: 100%;
  border: 2px solid var(--lightgrey);
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  ${({ isOpened }) =>
    isOpened &&
    css`
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    `}
`;

export const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  object-fit: contain;
`;

export const Input = styled.input`
  position: absolute;
  border: none;
  background: transparent;
  left: 0;
  width: 100%;
  color: inherit;
`;

export const Wrapper = styled.div`
  position: relative;
  color: #000;
  font-size: 12px;
  height: ${(props) => props.itemHeight}px;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  ${(props) =>
    props.isOpened
      ? css`
          z-index: 1;
        `
      : css`
          animation: ${zIndex1} 0.2s;
        `}

  ${(props) =>
    props.alignTop
      ? css`
          ${Content} {
            padding-bottom: ${props.itemHeight}px;
            top: ${props.isOpened ? -props.height : 0}px;
            bottom: 0;
          }

          ${SelectedItem},
          ${Input} {
            bottom: 0;
          }
        `
      : css`
          ${Content} {
            padding-top: ${props.itemHeight}px;
            top: 0;
            bottom: ${props.isOpened ? -props.height : 0}px;
          }

          ${SelectedItem},
          ${Input} {
            top: 0;
          }
        `}

  ${SelectedItem},
  ${Input} {
    height: ${(props) => props.itemHeight}px;
  }

  .select-arrow-icon {
    width: 15px;
    margin-right: 5px;
    transform: rotate(${(props) => (props.isOpened ? 180 : 0)}deg);
    opacity: 0.5;
  }

  .select-placeholder {
    opacity: 0.5;
  }
`;
