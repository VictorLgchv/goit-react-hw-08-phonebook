import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 12px;
  margin: 0;
  font-weight: 700;
`;

export const Span = styled.span`
  font-weight: 400;
`;

export const Btn = styled.button`
  cursor: pointer;
  padding: 4px 12px;
  background-color: white;
  border-radius: 4px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
