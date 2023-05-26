import styled from "@emotion/styled";



export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`

export const DeleteBtn = styled.button`
  display: block;
  margin-left: auto;
  padding: 5px 15px;
  color: #fff;
  background-color: blue;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;

`

