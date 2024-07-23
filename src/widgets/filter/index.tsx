import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {InputMask} from "@react-input/mask";
import {useAppDispatch} from "../../store/hook";
import {filterTodosThunk} from "../../store/thunks/filterUserThunk";

export const Filter: React.FC = () => {

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      number: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const deleteMaskNumber = Number(values.number.split("-").join(""));

      dispatch(filterTodosThunk({email: values.email, number: deleteMaskNumber}));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={"flex flex-row  items-center justify-between mt-10 w-[320px] sm:w-[520px] md:w-[720px]"}
    >
      <div className={"flex items-start"}>
        <label htmlFor="">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className={`ml-5 rounded ${formik.errors.email ? "border-red-700" : "border-cyan-700"}  border-2 p-2`}
        />
      </div>
      <div className={"ml-10 flex items-start"}>
        <label htmlFor="">Number</label>
        <InputMask
          id="number"
          name="number"
          mask="__-__-__"
          replacement={{_: /\d/}}
          value={formik.values.number}
          onChange={formik.handleChange}
          className={"ml-5 rounded border-cyan-700 border-2 p-2"}
        />
      </div>
      <button
        type={"submit"}
        className={"ml-10 rounded-md border-cyan-700 border-2 py-2 px-5 hover:border-cyan-500"}
      >
        <span>Submit</span>
      </button>
    </form>
  );
};