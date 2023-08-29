import { useDispatch } from "react-redux";
import { signUpThunk } from "components/redux/thunks";
import { Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';


const SignUpPattern = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().required('Required'),
  password: yup.string().required('Required').min(7),
});

const SignUp = () => {
    const dispatch = useDispatch()
   
    const submitForm = ({ name, email, password }, { resetForm }) => {
    dispatch(
      signUpThunk({
        name,
        email,
        password,
      })
    );
  };

    return (
      <Container m='auto'>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={submitForm}
        validationSchema={SignUpPattern}
      >
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="nameSignUp" ml="3">Username* </FormLabel>
                <Input
                  {...field}
                  id="nameSignUp"
                  type="text"
                  placeholder="Name"
                  required
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="emailSignUp" ml={3} mt={4}>Email* </FormLabel>
                <Input
                  {...field}
                  id="emailSignUp"
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
                <FormLabel htmlFor="passwordSignUp" ml={3} mt={4}>Password* </FormLabel>
                <Input
                  {...field}
                  id="passwordSignUp"
                  type="password"
                  pattern=".{7,}"
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
            Sign up
          </Button>
        </Form>
      </Formik>
    </Container>
    )
    
}

export default SignUp




