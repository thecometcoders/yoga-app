import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  gap: 10px;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(25px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  height: 51px;
  width: 283.7861022949219px;
  left: 479.32763671875px;
  top: 218px;

  color: white;
  font-weight: bold;
`;

export const Submit = styled.input`
  background: linear-gradient(
    105.08deg,
    rgba(255, 207, 61, 0.5) 31.29%,
    rgba(0, 176, 56, 0.5) 73.74%
  );
  border-radius: 10px;
  border-color: rgba(255, 207, 61, 50%);
  border-style: solid;
  border-width: 1px;
  padding: 10px;

  width: 180px;

  color: white;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
`;

export const Success = styled.div`
  font-weight: bold;
  color: white;
`;
