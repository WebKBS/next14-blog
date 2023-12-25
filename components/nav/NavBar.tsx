import Link from 'next/link';
import LoginForm from './LoginForm';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          BlogApp
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500"></div>
      </div>
      <LoginForm />
    </nav>
  );
}
