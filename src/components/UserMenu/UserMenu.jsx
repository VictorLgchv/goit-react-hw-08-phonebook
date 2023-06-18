import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';

import { Wrapper, Text, Span, Btn } from './UserMenu.styled';

export default function UserMenu() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogOut = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <Text>
        <Span>Welcome,</Span> {user.name}
      </Text>
      <Btn onClick={handleLogOut}>
        Log out
      </Btn>
    </Wrapper>
  );
}