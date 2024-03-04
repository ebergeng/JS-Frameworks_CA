import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const SearchButton = () => {
  return (
    <Button>
      <SearchIcon />
    </Button>
  );
};

const Button = styled.button`
  height: 30px;
  border: none;
  border-left: 4px solid #2e2e2e;
  background-color: #2e2e2e;
  :hover {
    cursor: pointer;
    .searchIcon:hover {
      fill: #27e027;
    }
  }
`;
export default SearchButton;
