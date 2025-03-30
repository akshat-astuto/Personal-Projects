import { withForm } from "../FormBuilder";
import MyComponent from "./MyComponent";

const UpdatedForm = () => {
  const WithFormComponent = withForm(MyComponent, {
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      console.log(values, "Submitting");
    },
    validationSchema: {
      name: {
        required: true,
      },
    },
  });

  return <WithFormComponent />;
};

export default UpdatedForm;
