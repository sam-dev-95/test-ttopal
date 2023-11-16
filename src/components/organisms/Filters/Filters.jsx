import styled from "styled-components";
import { SelectFilter } from "../../atoms";
import { FlexBox } from "../../styled";
import useBreakpoint from "../../../hooks/useBreakpoint";

const FilterBox = styled.div`
  padding: 12px 0 40px;
`;

const Filters = ({
  teams,
  locations,
  selectTeam,
  selectLocation,
  selectedTeam,
  selectedLocation,
}) => {
  const { isMobile } = useBreakpoint();

  return (
    <FilterBox>
      <FlexBox
        justify="center"
        direction={isMobile ? "column" : "row"}
        align={isMobile ? "center" : "flex-start"}
      >
        <SelectFilter
          data={teams}
          option="Team"
          selectItem={selectTeam}
          currentItem={selectedTeam}
        />
        <SelectFilter
          data={locations}
          option="Location"
          selectItem={selectLocation}
          currentItem={selectedLocation}
        />
      </FlexBox>
    </FilterBox>
  );
};

export default Filters;
