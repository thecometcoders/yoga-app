import styled from "styled-components";

export const H1 = styled.h1`
  /* Text styles */
  font-size: 5vw;

  /* Margins */
  margin-top: 0;
  margin-bottom: 0.5em;
  `;

export const P = styled.p`
  
  `;

export const StyledBox = styled.button`
  width: 219px;
  height: 59px;

  border-style: solid;
  border-width: 10px;
  border-image: linear-gradient(45deg, rgb(255, 207, 61), rgb(0, 176, 56)) 1;

  background: linear-gradient(105.08deg, rgba(255, 207, 61, 0.5) 31.29%, rgba(0, 176, 56, 0.5) 73.74%);

  //filter: blur(1px);
  
`


export const Container = styled.div`
  padding: 100px 150px;
  align-items: flex-start;
  justify-content: left;
  text-align: left;

  
  display: flex;
  flex-direction: column;
  
  font-family: montserrat-semibold-600;
  
  color: white;
`
