import Link from "next/link";
const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>
        sudah punya akun? <Link href="/auth/login" className="link-auth">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
