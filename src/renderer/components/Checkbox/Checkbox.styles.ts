import styled, { css } from 'styled-components';
import { centerIcon, centerBoth } from '../../mixins';

export const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  &:hover .checkbox::before {
    width: 40px;
    height: 40px;
    opacity: 0.08;
  }
`;

interface CheckboxProps {
  toggled: boolean;
}
export const StyledCheckbox = styled.div<CheckboxProps>`
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  position: relative;
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  transition: 0.15s background-color, 0.15s border-color;

  ${({ toggled, theme }) => css`
    background-color: ${toggled
      ? theme.button.primary.background
      : 'transparent'};
    border-color: ${toggled
      ? theme.button.primary.background
      : 'rgba(0, 0, 0, 0.54)'};

    &::before {
      background-color: ${toggled ? theme.button.primary.background : '#000'};
      content: '';
      width: 0;
      height: 0;
      border-radius: 100%;
      display: block;
      position: absolute;
      pointer-events: none;
      opacity: 0;
      transition: 0.1s width ${theme.easingFunction},
        0.1s height ${theme.easingFunction}, 0.15s opacity,
        0.15s background-color;
      ${centerBoth()};
    }
  `}
`;

export const Icon = styled.div<{
  toggled?: boolean;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-font-smoothing: antialiased;
  filter: invert(100%);
  ${centerIcon(22)};

  ${({ toggled, theme }) => css`
    clip-path: ${toggled ? 'inset(0 0 0 0)' : 'inset(100% 50% 0 50%)'};

    transition: 0.3s clip-path ${theme.easingFunction};
  `};
`;