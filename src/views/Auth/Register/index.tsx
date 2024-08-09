import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Register.module.scss";
import { useState } from "react";

const RegisterView = () => {
  // menggunakan next route
  const { push } = useRouter();

  const handlerProduct = () => {
    push("/product");
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handlerSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };
    const result = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
      alert("Register Success");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email sudah terdaftar" : "");
      alert("Register Failed");
    }
  };
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <p className={styles.register__text}>
        Welcome, Please enter your details
      </p>
      <form onSubmit={handlerSubmit}>
        <div className={styles.register__content}>
          <label htmlFor="email" className={styles.register__content__label}>
            Email
          </label>
          <input
            className={styles.register__content__input}
            type="email"
            name="email"
            id="email"
            placeholder="jhon@example.com"
          />
          <label htmlFor="username" className={styles.register__content__label}>
            Username
          </label>
          <input
            className={styles.register__content__input}
            type="text"
            name="username"
            id="username"
            placeholder="Jhon Doe"
          />
          <label htmlFor="password" className={styles.register__content__label}>
            Password
          </label>
          <input
            className={styles.register__content__input}
            type="password"
            name="password"
            id="password"
            placeholder="........"
          />
          <button type="submit" className={styles.register__content__button}>
            Register
          </button>
          <p className={styles.register__content__link}>
            Alredy have account?{" "}
            <Link href="/auth/login" className="link-auth">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default RegisterView;
