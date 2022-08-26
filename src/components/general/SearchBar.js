import styled from "styled-components";

const StyledSearch = styled.input`
    width: 400px;
    max-width: 95%;
    margin: 20px auto;
    padding: 10px;
`

export default function SearchBar() {


    const handleSearch = (e) => {
        console.log(e.target.value)
    }


    return <StyledSearch onChange={handleSearch} />
}