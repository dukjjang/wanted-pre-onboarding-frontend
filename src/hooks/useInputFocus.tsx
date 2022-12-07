import { useEffect } from 'react';
export const useInputFocus = (ref: any) => {
  useEffect(() => {
    ref.current!.focus();
  }, []);
};
