import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-left: 20px;
  margin-bottom: 1px;
  label {
    display: block;
    margin-bottom: 2px;
    font-size: 24px;
    margin-left: 4px;
  }
  input {
    display: block;
    font-size: 20px;
    width: 300px;
    height: 40px;
    pudding-left: 20px;
    margin-bottom: 8px;
    border: 1px solid black;
    border-radius: 4px;
  }

`;