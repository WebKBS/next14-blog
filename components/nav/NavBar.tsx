'use client';

import { useUser } from '@/lib/store/user';
import Link from 'next/link';
import LoginForm from './LoginForm';

export default function NavBar() {
  const user = useUser((state) => state.user);

  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          BlogApp
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500"></div>
      </div>

      {user?.id ? <h1>Profile</h1> : <LoginForm />}
    </nav>
  );
}
