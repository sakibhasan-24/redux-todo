import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="bg-white shadow flex mx-12 px-4 py-2">
      <div className="flex items-center space-x-2">
        <Logo />
      </div>
    </nav>
  );
}
