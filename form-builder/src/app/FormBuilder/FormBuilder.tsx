"use client";

import { useCallback, useReducer } from "react";

interface Validator {
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**
   * Function to validate the field
   */
  validate?: (value: any) => string | null;
  /**
   * Message to display when the field is invalid
   */
  message?: string;
}

interface ValidationSchema {
  /**
   * The validation schema
   */
  [key: string]: Validator;
}

interface FormBuilderProps {
  initialValues: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void;
  validationSchema: ValidationSchema;
  [key: string]: any;
}

export interface FormPropsType {
  values: Record<string, any>;
  errors: Record<string, { message: string; error: boolean }> | null;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  [key: string]: any;
}

const withForm = (
  Component: React.ComponentType<FormPropsType>,
  { initialValues, onSubmit, validationSchema, ...props }: FormBuilderProps
) => {
  const EnhancedForm = () => {
    const [state, dispatch] = useReducer(reducer, {
      values: initialValues,
      errors: null,
    });

    const values = state.values;
    const errors = state.errors;

    console.log(values, "Values");
    console.log(errors, "Errors");

    function handleValidation(values: Record<string, any>) {
      const errors: Record<string, { message: string; error: boolean }> = {};

      Object.keys(values).forEach((key) => {
        if (validationSchema && key in validationSchema) {
          const validator = validationSchema[key];

          if (validator.required && !values[key]) {
            errors[key] = {
              message: validator.message || "This field is required",
              error: true,
            };
          }

          if (validator.validate && validator.validate(values[key])) {
            errors[key] = {
              message: validator.message || "This field is invalid",
              error: true,
            };
          }
        }
      });

      return errors;
    }

    function reducer(
      state: Record<string, any>,
      action: { type: string; payload: Record<string, any> }
    ) {
      switch (action.type) {
        case "update_field":
          const { field, value } = action.payload;

          return {
            ...state,
            values: {
              ...state.values,
              [field]: value,
            },
            errors: handleValidation({
              ...state.values,
              [field]: value,
            }),
          };
        default:
          return state;
      }
    }

    const handleSubmit = useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const errors = handleValidation(values);

        if (Object.keys(errors).length > 0) {
          return;
        }

        onSubmit(values);
      },
      [values]
    );

    const handleOnChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({ type: "update_field", payload: { field: name, value } });
      },
      []
    );

    // Pass everything directly as formProps
    const formProps = {
      values,
      errors,
      handleSubmit,
      handleOnChange,
      dispatch,
    };

    return <Component {...formProps} {...props} />;
  };

  return EnhancedForm;
};

export default withForm;
