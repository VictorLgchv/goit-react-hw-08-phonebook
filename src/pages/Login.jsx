import { useDispatch } from 'react-redux';
import {FormStyled, Label, Input, Btn} from '../components/Form/Form.styled'
import Section from 'components/Section/Section';
import { logIn } from 'redux/auth/operations';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(
      logIn({
        email: form.email.value,
        password: form.password.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <Section title="Log in">
      <FormStyled onSubmit={handleSubmit}>
        <Label htmlFor="email">
          Email
        </Label>
        <Input type="email" id="email" name="email" />
        <Label htmlFor="password">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          name="password"
        />
        <Btn type="submit">
          Log in
        </Btn>
      </FormStyled>
    </Section>
  );
}