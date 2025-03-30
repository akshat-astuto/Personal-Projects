"use client";

import { FormPropsType } from "../FormBuilder/FormBuilder";

const MyComponent = ({
  values,
  errors,
  handleOnChange,
  handleSubmit,
}: FormPropsType) => {
  return (
    <form
      className="flex flex-col gap-2 m-8 p-3 items-center bg-amber-300"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row gap-2 items-center">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
          className="border-2 border-gray-300 bg-white rounded-md p-2"
        />
        {errors?.name && <p>{errors.name.message}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default MyComponent;
