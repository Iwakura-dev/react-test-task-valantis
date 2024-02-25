import { ThemeToggle } from "../UI/ThemeToggle";

export function Header() {
  return (
    // This component render the Header menu
    <div className="shadow-md p-4 backdrop-blur-md">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Iwakura</h1>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
