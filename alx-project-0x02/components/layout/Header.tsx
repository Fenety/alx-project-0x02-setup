import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow">
            <nav className="container mx-auto flex justify-between items-center"> 
                <div className="text-xl font-bold">
                    <Link href="/">My Project</Link>
                </div>

                <ul className="flex space-x-6">
                    <li> 
                        <Link href="/posts" className="hover:underline">Posts</Link>
                    </li>
                    <li>
                        <Link href="/users" className="hover:underline">Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;