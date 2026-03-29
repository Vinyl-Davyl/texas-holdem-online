import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EyeIcon from '../icons/EyeIcon';
import EyeClosedIcon from '../icons/EyeClosedIcon';
import styled from 'styled-components';

const StyledShowPasswordButton = styled.div`
  position: absolute;
  z-index: 40;
  right: 15px;
  bottom: 3px;
  cursor: pointer;

  svg {
    width: 30px;
  }
`;

const ShowPasswordButton = ({ passwordRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    if (passwordRef.current) {
      passwordRef.current.type = isVisible ? 'password' : 'text';
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <StyledShowPasswordButton onClick={handleClick}>
      {isVisible ? <EyeIcon /> : <EyeClosedIcon />}
    </StyledShowPasswordButton>
  );
};

ShowPasswordButton.propTypes = {
  passwordRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default ShowPasswordButton;
