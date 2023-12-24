import styled from '@emotion/styled';

export const TitleDiv = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary);
  display: flex;
  gap: 0.7rem;
  align-items: end;
`;

export const ContentDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--color-primary);
  font-weight: 500;
`;

export const NoContent = styled.div`
  font-size: 0.9rem;
  color: var(--color-textgray);
`;

export const EditButton = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  gap: 0.1rem;
  align-items: center;
  margin-bottom: 2px;
  color: var(--color-disabled);
`;
