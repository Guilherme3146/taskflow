import { useNavigate } from "react-router-dom"; // ← adiciona esse import
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../lib/schemas";
import { useAuth } from "../hooks/useAuth";
import { LoaderIcon } from "../assets/icons";
import Input from "../components/Input";
import Button from "../components/Button";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (user) => {
    const result = await login(user.email, user.password);

    if (result.success) {
      navigate("/tasks");
    } else {
      setError("email", { message: result.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Entrar
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            type="email"
            id="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            type="password"
            id="password"
            label="Senha"
            placeholder="Digite sua senha"
            error={errors.password?.message}
            {...register("password")}
          />

          <Button
            type="submit"
            size="large"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <LoaderIcon className="animate-spin" />
                Entrando...
              </span>
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
