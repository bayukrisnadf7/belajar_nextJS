import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
    // menggunakan next route
    const { push } = useRouter();

    const handlerProduct = () => {
      push("/product");
    }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handlerProduct()}>Product</button>
      <p>
        belum punya akun? <Link href="/auth/register" className="link-auth">Register</Link>
      </p>
    </div>
  );
};
export default LoginPage;
