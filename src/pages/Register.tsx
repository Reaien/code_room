import { SubmitHandler, useForm } from "react-hook-form";
import Card from "../components/Card";
import CardBodyRegister from "../components/CardBodyRegister";
import Navbar from "../components/Navbar";

export type FormValues = {
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Datos enviados:", data);
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
