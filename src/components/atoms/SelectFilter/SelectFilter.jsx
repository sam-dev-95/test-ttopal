import React, { useState } from "react";
import styled from "styled-components";

const CustomSelect = styled.div`
  position: relative;
  display: inline-block;
  margin: 16px;
  @media (max-width: 768px) {
    margin: 8px;
  }
  width: 303px;
  @media (max-width: 768px) {
    width: 100%;
  }
  text-align: start;
`;

const SelectInput = styled.div`
  appearance: none;
  border: 1px solid #ccc;
  border-bottom: ${({ isOpen }) => (isOpen ? "none" : "1px solid #ccc")};
  padding: 8px 16px;
  cursor: pointer;
`;

const CustomArrow = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const DropdownPanel = styled.div`
  position: absolute;
  overflow: auto;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 600px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-top: none;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 2;
`;

const Option = styled.div`
  padding: ${({ item }) => (item ? "4px 16px 4px 32px" : "4px 16px")};
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const SelectFilter = ({ data = {}, option, selectItem, currentItem }) => {
  const defaultOption = `All ${option}s`;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClick = (item) => {
    selectItem(item);
    setIsOpen(false);
  };

  return (
    <CustomSelect>
      <SelectInput onClick={toggleDropdown} isOpen={isOpen}>
        {!!currentItem ? currentItem : defaultOption}
        <CustomArrow>▼</CustomArrow>
      </SelectInput>
      <DropdownPanel isOpen={isOpen}>
        <Option onClick={() => onOptionClick("")}>{defaultOption}</Option>
        {Object.entries(data).map(([key, items]) => (
          <div key={key}>
            <Option>
              <strong>{key === "US" ? "United States" : key}</strong>
            </Option>
            {items.map((item) => (
              <Option key={item} item onClick={() => onOptionClick(item)}>
                {item}
              </Option>
            ))}
          </div>
        ))}
      </DropdownPanel>
    </CustomSelect>
  );
};

export default SelectFilter;
