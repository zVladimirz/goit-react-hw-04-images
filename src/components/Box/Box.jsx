import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  textAlign,
} from 'styled-system';

const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  textAlign
);

export default Box;
