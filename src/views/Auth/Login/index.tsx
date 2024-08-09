import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginPage = () => {
    // menggunakan next route
    const { push } = useRouter();

    const handlerProduct = () => {
      push("/product");
    }
  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      <p className={styles.login__text}>
        Welcome, Please enter your details
      </p>
      <div className={styles.login__content}>
        <label htmlFor="email" className={styles.login__content__label}>
          Email
        </label>
        <input
          className={styles.login__content__input}
          type="email"
          name="email"
          id="email"
          placeholder="jhon@example.com"
        />
        <label htmlFor="password" className={styles.login__content__label}>
          Password
        </label>
        <input
          className={styles.login__content__input}
          type="password"
          name="password"
          id="password"
          placeholder="........"
        />
        <button onClick={() => handlerProduct()} className={styles.login__content__button}>Login</button>
      <p className={styles.login__content__link}>
        Don't have an account? <Link href="/auth/register" className="link-auth">Register</Link>
      </p>
    </div>
    </div>
  );
};
export default LoginPage;
