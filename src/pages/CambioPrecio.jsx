import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { format, compareAsc } from "date-fns";

const CambioPrecio = () => {
  const navigate = useNavigate();
  const hoy = format(new Date(), "yyyy-MM-dd");

  const formik = useFormik({
    initialValues: {
      fecha: "",
      hora: "",
      precio: "",
      dispositivo: ""
    },
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      console.log(values);
      Swal.fire({
        icon: "success",
        title: "Cambio de precio realizado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      // const resLogin =  await loginRequest(values.usuario, values.password)
      // setToken(resLogin.data.token);
      // const resProfile = await profileRequest()
      // setProfile(resProfile.data)
      setTimeout(() => {
        navigate("/");
      }, 2500);
    },
    //validationSchema: schema
  });
  return (
    <>
      <h1 className="text-4xl text-center font-bold mt-20">
        Realiza el cambio de precio en tu dispensario
      </h1>
      <div className="flex justify-center">
        <form
          className="my-10 bg-slate-50 rounded shadow p-10 md:w-2/3 lg:w-2/5"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="text-3xl text-center font-bold">Cambio de precio</h1>
          <div className="my-5 ">
            <label
              className="uppercase text-black block text-xl font-bold"
              htmlFor="fecha"
            >
              Fecha
            </label>
            <input
              id="fecha"
              className="w-full mt-3 p-3 border  rounded-xl bg-gray-200"
              type="date"
              name="fecha"
              min={hoy}
              onChange={formik.handleChange}
              value={formik.values.fecha}
            />
            <label
              className="uppercase text-black block text-xl font-bold mt-3"
              htmlFor="hora"
            >
              Hora
            </label>
            <input
              id="hora"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
              type="time"
              name="hora"
              onChange={formik.handleChange}
              value={formik.values.hora}
            />
            <label
              className="uppercase text-black block text-xl font-bold mt-3"
              htmlFor="precio"
            >
              $ Precio
            </label>
            <input
              id="precio"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
              type="number"
              name="precio"
              onChange={formik.handleChange}
              value={formik.values.precio}
            />

            <label
              className="uppercase text-black block text-xl font-bold mt-3"
              htmlFor="dispositivo"
            >
              Dispositivo
            </label>
            <input
              id="dispositivo"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
              type="text"
              name="dispositivo"
              onChange={formik.handleChange}
              value={formik.values.dispositivo}
            />
          </div>
          


          <input
            className="w-full mb-5 mt-3 p-3 border rounded bg-sky-600 uppercase font-bold hover:cursor-pointer hover:bg-sky-400 hover:text-white transition-colors"
            type="submit"
            value="Cambio de precio"
          />
        </form>
      </div>
    </>
  );
};

export default CambioPrecio;
