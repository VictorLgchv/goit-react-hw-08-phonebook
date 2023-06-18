import { useDispatch } from 'react-redux';
import { FormStyled, Label, Input, Btn } from '../components/Form/Form.styled';
import Section from 'components/Section/Section';
import { register } from 'redux/auth/operations';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <Section title="Register">
      <FormStyled onSubmit={handleSubmit}>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="name" />
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" name="password" />
        <Btn type="submit">Register</Btn>
      </FormStyled>
    </Section>
  );
}
