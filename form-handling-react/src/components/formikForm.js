import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Mock API submission
    console.log(values);
    alert("User registered successfully (Formik)!");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
        <h2 className="text-2xl font-bold mb-4">Register (Formik)</h2>

        <Field
          name="username"
          placeholder="Username"
          className="w-full p-2 border mb-1"
        />
        <ErrorMessage name="username" component="p" className="text-red-500 mb-3" />

        <Field
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-1"
        />
        <ErrorMessage name="email" component="p" className="text-red-500 mb-3" />

        <Field
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-1"
        />
        <ErrorMessage name="password" component="p" className="text-red-500 mb-3" />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
