import { Box, Button, Text } from '@chakra-ui/react';
import { profileSelect } from 'components/redux/selectors';
import { logoutThunk } from 'components/redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(profileSelect);

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate('/login');
  };

  return (
    <Box
      ml="auto"
      display="flex"
      justifyContent="center"
      alignItems="baseline"
      gap="5"
    >
      <Text fontSize="18">{user?.email}</Text>
      <Button colorScheme="telegram" variant="outline" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};