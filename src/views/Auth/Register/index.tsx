import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.css";

const LoginView = () => {
    // menggunakan next route
    const { push } = useRouter();

    const handlerProduct = () => {
      push("/product");
    }
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <button onClick={() => handlerProduct()}>Product</button>
      <p>
        belum punya akun? <Link href="/auth/register" className="link-auth">Register</Link>
      </p>
    </div>
  );
};
export default LoginView;
