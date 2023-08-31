import PropTypes from "prop-types";

import Form from "../../ui/form/Form";

import { Spinner } from "../../ui/spinner/Spinner";
import { Input } from "../../ui/input/Input.styles";
import { Button } from "../../ui/button/Button.styles";
import { FormBox } from "../../ui/form/FormBox.styles";
import { Heading } from "../../ui/heading/Heading.styles";

import { useLogin } from "./hooks/useLogin";

const LoginForm = ({ onRouteChange, loadUser }) => {
  const {
    signInEmail,
    signInPassword,
    onEmailChange,
    onPasswordChange,
    onSubmitSignIn,
    isLoading,
  } = useLogin(onRouteChange, loadUser);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <FormBox>
      <Heading as='h1'>Login</Heading>
      <Form
        label='Email'
        orientation='vertical'
      >
        <Input
          type='email'
          id='email'
          autoComplete='username'
          value={signInEmail}
          onChange={onEmailChange}
        />
      </Form>

      <Form
        label='Password'
        orientation='vertical'
      >
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={signInPassword}
          onChange={onPasswordChange}
        />
      </Form>

      <Form orientation='vertical'>
        <Button
          onClick={onSubmitSignIn}
          type='submit'
          disable={isLoading}
        >
          {" "}
          Login
        </Button>
        <Heading
          as='h4'
          onClick={() => onRouteChange("register")}
          disabled={isLoading}
        >
          Sign up
        </Heading>
      </Form>
    </FormBox>
  );
};

LoginForm.propTypes = {
  onRouteChange: PropTypes.func,
  loadUser: PropTypes.func,
};
export default LoginForm;
