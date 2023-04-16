import { $, component$ } from "@builder.io/qwik";
import { routeLoader$, z } from "@builder.io/qwik-city";
import {
  useForm,
  type InitialValues,
  formAction$,
  zodForm$,
  SubmitHandler,
  setError,
  type Field,
} from "@modular-forms/qwik";
import { error, user } from "~/models";

const loginSchema = z.object({
  email: z.string().email("El email no es válido").trim(),
  password: z
    .string()
    .min(4, "La contraseña debe tener al menos 4 caracteres")
    .trim(),
  passwordConfirm: z
    .string()
    .min(4, "La contraseña debe tener al menos 4 caracteres")
    
});

type LoginForm = z.infer<typeof loginSchema>;

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  email: "",
  password: "",
  passwordConfirm: "",
}));

export const useFormAction = formAction$<LoginForm>((values) => {

    
  console.log(values);
  // Runs on server
}, zodForm$(loginSchema));

export default component$(() => {
  const [loginForm, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(loginSchema),
  });

  type data = error | user;

  const handleSubmit: SubmitHandler<LoginForm> = $(async (values, event) => {

    if (values.password !== values.passwordConfirm) {
        setError(loginForm, "passwordConfirm", "Las contraseñas no coinciden");
        return;
    }

    const data: data = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res: any) => {
      return res.json();
    });

    if (data.code) {
      setError(loginForm, "password", data.message);
    }

    console.log(data);
    // Runs on client
  });

  return (
    <div class="py-[17vh] w-screen">
      <Form
        onSubmit$={handleSubmit}
        class="flex flex-col items-center justify-center place-content-center py-[10vh] shadow-lg  px-14 bg-secondary-100 max-w-xl sm:mx-auto mx-2 rounded-xl"
      >
        <div class="flex flex-col space-y-2">
          <label for="email" class="text-lg font-medium">
            Email
          </label>
          <Field name="email">
            {(field: { error: string }, props: {}) => (
              <div class="flex flex-col space-y-1">
                <input
                  {...props}
                  id="email"
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
                {field.error && <div class="text-red-500">{field.error}</div>}
              </div>
            )}
          </Field>
          <label for="password" class="text-lg font-medium">
            Password
          </label>
          <Field name="password">
            {(field: { error: string }, props: {}) => (
              <div class="flex flex-col space-y-1">
                <input
                  type="password"
                  {...props}
                  id="password"
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
                {field.error && <div class="text-red-500">{field.error}</div>}
              </div>
            )}
          </Field>

          <label for="passwordConfirm" class="text-lg font-medium">
            Password
          </label>
          <Field name="passwordConfirm">
            {(field: { error: string }, props: {}) => (
              <div class="flex flex-col space-y-1">
                <input
                  type="password"
                  {...props}
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
                {field.error && <div class="text-red-500">{field.error}</div>}
              </div>
            )}
          </Field>
          <input
            type="submit"
            value="Submit"
            class="bg-primary-400 text-white py-2 px-4 rounded-md hover:bg-primary-300 transition-colors"
          />
        </div>
      </Form>
    </div>
  );
});
