import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "../pages/Register";

type Props = {
  onSubmit: (e: React.FormEvent) => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

function CardBodyRegister({ onSubmit, register, errors }: Props) {
  return (
    <>
      <h2 className="font-bold text-center">Regístrate con tu email</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            email
          </label>
          <input
            type="email"
            {...register("email", { required: "El email es obligatorio" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-700/70 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Registrar
        </button>
      </form>
    </>
  );
}

export default CardBodyRegister;
