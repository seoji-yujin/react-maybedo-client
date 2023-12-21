import styled from '@emotion/styled';

export const MenuList = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0.5rem;
`;

export const MenuButton = styled.div`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  padding: 1rem;
  background-color: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
  transition-duration: 0.1s;
  ${(props) => props.hovering && 'padding: 1.1rem'};
`;

export const MenuItemButton = styled(MenuButton)`
  border: none;
  background-color: white;
  color: var(--color-primary);
  transition: all 0.2s;
  ${(props) => !props.show && 'height:0'};
  ${(props) => !props.show && 'width:0'};
  ${(props) => !props.show && 'padding:0'};
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  align-items: center;
  overflow: hidden;
`;

export const MenuItemLabel = styled.div`
  background-color: #fbfbfd;
`;
