import styled from 'styled-components';

export const ErrorMessage = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.dangerColor};
  font-family: ${(props) => props.theme.fonts.fontFamilySansSerif};
  font-size: 0.9rem;
  text-align: left;
  margin: 0.25rem 0 0.75rem 0;
  padding: 0;
`;
