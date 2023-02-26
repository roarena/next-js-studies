import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "@/components/account/Account";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  return !session ? (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      localization={{
        variables: {
          sign_in: {
            email_label: "Email",
            password_label: "Senha",
            email_input_placeholder: "Email",
            password_input_placeholder: "Senha",
            button_label: "Entrar",
            loading_button_label: "Por favor aguarde ...",
            link_text: "Já tem uma conta? Clique para entrar",
          },
          sign_up: {
            email_label: "Email",
            password_label: "Senha",
            email_input_placeholder: "Email",
            password_input_placeholder: "Senha",
            button_label: "Cadastrar",
            loading_button_label: "Por favor aguarde ...",
            link_text: "Não tem uma conta? Cadastre-se",
            confirmation_text: "Verifique o e-mail de confirmação enviado para seu e-mail",
          },
        },
      }}
    />
  ) : (
    <Account session={session} />
  );
}
