import styled from "styled-components";
import { SelectFilter } from "../../atoms";
import { FlexBox } from "../../styled";

const FilterBox = styled.div`
  padding: 12px 0 40px;
`;

const Filters = ({ teams, locations }) => {
  return (
    <FilterBox>
      <FlexBox justify="center">
        <SelectFilter data={teams} option="Team" />
        <SelectFilter data={locations} option="Location" />
      </FlexBox>
    </FilterBox>
  );
};

export default Filters;
