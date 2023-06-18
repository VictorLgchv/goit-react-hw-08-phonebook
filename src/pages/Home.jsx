import Section from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';
import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;   
    padding: 4px 12px;
    background-color: white;
    border-radius: 4px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;npm start
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export default function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const navigate = useNavigate();
  return (
    <>
      <Section>
        <h3>Welcome to your Phone Book</h3>
        {!isLoggedIn && (
          <p>
            <Button
              onClick={() => {
                navigate(`/register`);
              }}
            >
              Register
            </Button>
            {'  '}
            to create a new account or{'  '}
            <Button
              onClick={() => {
                navigate(`/login`);
              }}
            >
              Log in
            </Button>
            {'  '} to enter an existing one.
          </p>
        )}
        {isLoggedIn && (
          <p>
            You may enter your{'  '}
            <Button
              onClick={() => {
                navigate(`/contacts`);
              }}
            >
              Contacts
            </Button>
            {'  '}.
          </p>
        )}
        <img
          width={400}
          src="https://blogs-images.forbes.com/oliverchiang/files/2010/11/wuphf.jpg"
          alt="logo"
        />
      </Section>
    </>
  );
}