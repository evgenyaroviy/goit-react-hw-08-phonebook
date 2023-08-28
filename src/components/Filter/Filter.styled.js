import styled from 'styled-components';

export const FilterSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
  label {
    font-size: 20px;
    display: block;
    margin-bottom: 12px;
    margin-left: 20px;
  }
  input {
    width: 280px;
    height: 25px;
    margin-bottom: 12px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 4px;
  }
`;