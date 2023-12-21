import React, { useCallback } from 'react';
import { CreateModal } from './style';

const ModalLayout = ({ children, style, show, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <CreateModal onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}>
        {children}
      </div>
    </CreateModal>
  );
};

export default ModalLayout;
