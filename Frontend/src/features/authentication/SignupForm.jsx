import PropTypes from "prop-types";

import Form from "../../ui/form/Form";

import { Input } from "../../ui/input/Input.styles";
import { Button } from "../../ui/button/Button.styles";
import { FormBox } from "../../ui/form/FormBox.styles";
import { Heading } from "../../ui/heading/Heading.styles";
import { MiniSpinner } from "../../ui/spinner/MiniSpinner";
import { useSignUp } from "./hooks/useSignup";

const SignupForm = ({ onRouteChange, loadUser }) => {
  const {
    name,
    email,
    password,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onSubmitSignIn,
    isLoading,
  } = useSignUp({ onRouteChange, loadUser });

  return (
    <FormBox onSubmit={onSubmitSignIn}>
      <Heading as='h1'>Signup</Heading>
      <Form
        label='Name'
        orientation='vertical'
      >
        <Input
          type='text'
          id='name'
          autoComplete='name'
          value={name}
          onChange={onNameChange}
        />
      </Form>

      <Form
        label='Email'
        orientation='vertical'
      >
        <Input
          type='email'
          id='email'
          autoComplete='username'
          value={email}
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
          value={password}
          onChange={onPasswordChange}
        />
      </Form>

      <Form orientation='vertical'>
        <Button
          type='submit'
          disabled={isLoading}
        >
          {" "}
          {isLoading ? <MiniSpinner /> : "Signup"}
        </Button>
      </Form>
    </FormBox>
  );
};

SignupForm.propTypes = {
  onRouteChange: PropTypes.func,
  loadUser: PropTypes.func,
};

export default SignupForm;
