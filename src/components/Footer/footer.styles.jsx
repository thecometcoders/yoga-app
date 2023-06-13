import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 100%;
  padding: 30px clamp(20px, 10vw, 200px);

  background: linear-gradient(
    265.56deg,
    rgba(202, 50, 219, 0.12) 1.38%,
    rgba(68, 51, 196, 0.12) 100%
  );
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: clamp(200px, 200px, 200px);
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`;
