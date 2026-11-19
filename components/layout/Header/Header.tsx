import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-5 border-b border-text z-50 sticky inset-0 w-full">
      <Navigation />
    </header>
  );
}
