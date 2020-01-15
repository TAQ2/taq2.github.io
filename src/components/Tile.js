import styled from "styled-components";

const Tile = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ colour }) => colour || "white"};
`;

export default Tile;
