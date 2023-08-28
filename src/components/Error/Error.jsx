import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectError } from 'components/redux/selectors';

export const ErrorNotification = () => {
    const errorMessage = useSelector(selectError);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  return <></>;
};