import styled from "styled-components";
import { useContext } from "react";
import ApiContext from "../../context/ApiContext";
import SearchBarResult from "./SearchBarResult";
import { useState } from "react";

const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  & a {
    top: 50px;
  }
`;

const StyledSearch = styled.input`
  border: none;
  border-radius: 50px;
  font-size: 20px;
  width: 400px;
  max-width: 95%;
  margin: 20px auto;
  padding: 10px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
`;

const SearchResultContainer = styled.div`
  position: absolute;
  border: none;
  border-radius: 50px;
  top: 70px;
  background-color: ${(props) => props.theme.colors.White};
  width: 400px;
  max-width: 95%;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
`;

const SearchNoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default function SearchBar(props) {
  const [search, setSearch] = useState([]);
  const [searchLength, setLength] = useState([]);
  const [apiData] = useContext(ApiContext);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearch(
      searchQuery.length > 0 && apiData.length > 0
        ? apiData.filter((item) =>
            item.attributes.name.toLowerCase().includes(searchQuery)
          )
        : []
    );
    setLength(searchQuery);
  };

  return (
    <StyledSearchContainer>
      <StyledSearch {...props} onClick={handleSearch} onChange={handleSearch} />
      {searchLength.length > 0 && search.length > 0 ? (
        <SearchResultContainer>
          <SearchBarResult data={search} />
        </SearchResultContainer>
      ) : searchLength.length > 0 ? (
        <SearchResultContainer>
          <SearchNoResult>No hotel match your query</SearchNoResult>
        </SearchResultContainer>
      ) : (
        ""
      )}
    </StyledSearchContainer>
  );
}
