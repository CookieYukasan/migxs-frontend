import styles from "./auth.module.scss";

import Link from "next/link";
import Head from "next/head";
import { FormEvent } from "react";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const router = useRouter();

  const handleForgotPassword = (e: FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/",
      query: {
        forgotPassword: true,
      },
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Migxs | Recuperar Senha</title>
      </Head>
      <div className={styles.heading}>
        <img src="/logo-pink.svg" alt="Migxs Logo" />
        <span>
          Junta-se a comunidade, tenha acesso a conteúdo exclusivo, monetize sua
          influência.
        </span>
      </div>
      <form onSubmit={handleForgotPassword} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <button type="submit">Recuperar</button>
        <span>
          Lembrou sua senha?{" "}
          <Link href="/">
            <strong>Entre agora</strong>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;
