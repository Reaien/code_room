import { SubmitHandler, useForm } from "react-hook-form";
import Card from "../components/Card";
import CardBodyRegister from "../components/CardBodyRegister";
import Navbar from "../components/Navbar";
import axios from "axios";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function Register() {
  // useForm devuelve las funciones necesarias, incluyendo register
  const {
    register, // Aquí está la función register que pasa a los inputs
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Datos enviados:", data);
    try {
      //petición POST
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        data,
        {
          headers: {
            "Content-Type": "application/json", // Añadir el header Content-Type
          },
        }
      );
      // Manejar la respuesta exitosa
      console.log("Usuario registrado con éxito:", response.data);
    } catch (error) {
      // Manejar errores
      console.error("Error en el registro:", error);
    }
  };
  return (
    <>
      <Navbar />
      <Card>
        <CardBodyRegister
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
        />
      </Card>
    </>
  );
}

export default Register;
