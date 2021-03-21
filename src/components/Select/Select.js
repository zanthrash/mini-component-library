import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <OrigSelect value={value} onChange={onChange}>
        {children}
      </OrigSelect>
      <PresentationalBits>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBits>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const OrigSelect = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  left: 0;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`;

const PresentationalBits = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${OrigSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: -webkit-focus-ring-color auto 1px;
  }
  ${OrigSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

export default Select;
