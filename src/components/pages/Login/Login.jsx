import { loginThunk } from "components/redux/thunks";
import { useDispatch } from "react-redux";
import { Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const LoginPattern = yup.object({
  email: yup.string().required('Required'),
  password: yup.string().required('Required').min(6),
});

const Login = () => {
    const dispatch = useDispatch()
   
    const submitForm =  ({ email, password }, { resetForm }) => {
    dispatch(
      loginThunk({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        resetForm();
      });
  };

    return (
      <Container m='auto'>
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={submitForm}
        validationSchema={LoginPattern}
      ><Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="emailLogin" ml={3}>Email* </FormLabel>
                <Input variant='filled'
                  {...field}
                  id="emailLogin"
                  type="email"
                  placeholder="Email"
                  required
                />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  <FormHelperText fontSize='xs' ml={4}>We'll never share your email.</FormHelperText>

              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <FormLabel htmlFor="passwordLogin" ml={3} mt={4}>Password*</FormLabel>
                <Input variant='filled'
                  {...field}
                  id="passwordLogin"
                  type="password"
                  pattern=".{6,}"
                  title="Password must be at least 7 characters long"
                  placeholder="Password"
                  required
                />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  <FormHelperText fontSize='xs' ml={4}>We'll never share your password.</FormHelperText>
              </FormControl>
            )}
          </Field>

          <Button type="submit" size="md" mt={5} colorScheme="yellow">
            Log in
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login