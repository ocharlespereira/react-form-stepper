import styled from "styled-components";

export const Container = styled.div`
  width: 520px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;

  position: relative;
`;

export const StepNumber = styled.div`
  width: 20px;
  height: 20px;
  padding: 4px;
  align-items: center;
  text-align: center;
  border-radius: 80%;
  border: 1px solid #d1d3d4;
  color: #7c7c7c;
  margin-bottom: 10px;

  font: 15px Amil Typeface;
  /* background: #dea22f 0% 0% no-repeat padding-box; */
  /* color: #ffffff; */
`;

export const StepDescription = styled.div`
  text-align: center;
  font: 12px Amil Typeface;
  /* letter-spacing: 0px; */
  color: #7c7c7c;
  opacity: 1;
`;

export const Divider = styled.div`
  height: 1px;
  background: #d1d3d4;
  position: absolute;
  width: 63px;
  top: 25%;
  left: 70%;
`;
