import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // If user is already logged in, redirect to dashboard
//   if (user) {
//     router.push('/dashboard');
//     return null;
//   }
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(email, password);
//   };

  return (
    <form >
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}