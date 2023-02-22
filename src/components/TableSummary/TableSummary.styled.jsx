import styled from "styled-components";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

export const Wrapper = styled(TableContainer)`
  box-sizing: border-box;
  max-width: 624px;
  border-radius: 15px;
`;

export const TableSt = styled(Table)`
  background-color: #f5f6fb;
  border-collapse: separate;
  border-spacing: 5px;
  & tr {
    border: 2px solid white;
    border-collapse: collapse;
  }
`;

export const Head = styled(TableHead)`
  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const WrapperForm = styled.div`
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-top: 0;
    display: flex;
    width: 624px;
    margin-bottom: 32px;
  }

  @media (min-width: 1280px) {
    display: flex;
    width: 1034px;
    height: 44px;
  }
`;

export const DivInputsAndBtn = styled.div`
  @media (min-width: 1280px) {
    display: flex;
  }
`;

export const DivInputs = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 624px;
  }

  @media (min-width: 1280px) {
    width: 714px;
    margin-right: 30px;
  }
`;

export const DivProduct = styled.div`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    height: 42px;
    display: flex;
  }

  @media (min-width: 1280px) {
  }
`;
