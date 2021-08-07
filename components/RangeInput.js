import styled, { css } from 'styled-components';

export default styled.input.attrs((props) => {
  const { min = 0, max = 100 } = props;
  const target = max - min;
  const percentage = (props.value / target) * 100;

  return {
    type: 'range',
    style: {
      background: `linear-gradient(to right, var(--pink-500) 0%, var(--pink-600) ${percentage}%, #fff ${percentage}%, #fff 100%)`,
    },
  };
})`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 6px;
  border-radius: 9999px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    ${(props) =>
      props.knob === 'hover' &&
      css`
        opacity: 0;
      `};

    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background-image: radial-gradient(circle, transparent, 0%, #f7f7fc 40%, var(--pink-600) 40%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
    transition: opacity 0.075s var(--cubic);
  }

  ::-moz-range-thumb {
    -moz-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  ${(props) =>
    props.knob === 'hover' &&
    css`
      &:hover {
        ::-webkit-slider-thumb {
          opacity: 1;
        }
      }
    `};
`;
