import Link from "next/link";
import Head from "next/head";
import {
  FaTwitter,
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
} from "react-icons/fa";

import styles from "./auth.module.scss";
import React, { FormEvent, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

const HomePage: NextPage = () => {
  const [visiblePassword, setVisibilePassword] = useState<boolean>(false);
  const router = useRouter();

  const { forgotPassword } = router.query;

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    alert("heey");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Migxs | Login</title>
      </Head>
      <div className={styles.heading}>
        <img src="/logo-pink.svg" alt="Migxs Logo" />
        <span>
          Junta-se a comunidade, tenha acesso a conteúdo exclusivo, monetize sua
          influência.
        </span>
      </div>
      <form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.socialButtons}>
          <button style={{ backgroundColor: "#00ACEE" }}>
            <FaTwitter color="white" size="20px" />
            Entrar com o Twitter
          </button>
          <button style={{ backgroundColor: "#4688F1" }}>
            <FaGoogle color="white" size="20px" />
            Entrar com o Google
          </button>
        </div>
        <p>ou</p>
        {forgotPassword && (
          <div className={styles.forgotPasswordEmailSended}>
            <FaCheckCircle />
            <div>
              <strong>Enviado com sucesso</strong>
              <span>
                Verifique se o nosso e-mail não está na pasta de spam para você
                realizar a recuperação da sua conta.
              </span>
            </div>
          </div>
        )}
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div
          className={[styles.inputContainer, styles.inputPassword].join(" ")}
        >
          <label htmlFor="password">Senha</label>
          <input id="password" type={!visiblePassword ? "password" : "text"} />
          {!visiblePassword ? (
            <FaEye onClick={() => setVisibilePassword(!visiblePassword)} />
          ) : (
            <FaEyeSlash onClick={() => setVisibilePassword(!visiblePassword)} />
          )}
        </div>
        <button type="submit">Entrar</button>
        <Link href="/forgot-password">
          <span className={styles.forgetPassword}>Esqueceu sua senha?</span>
        </Link>
        <span>
          Não tem uma conta?{" "}
          <Link href="/register">
            <strong>Cadastre-se</strong>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default HomePage;
