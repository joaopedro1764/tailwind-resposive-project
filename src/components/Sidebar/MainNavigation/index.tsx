import { ChevronDown, Home } from "lucide-react";

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <a className="flex items-center gap-3 rounded px-3 cursor-pointer py-2 hover:bg-violet-50 group">
        <Home className="h-5 w-5 text-zinc-500" />
        <span className="font-medium text-zinc-700 group-hover:text-violet-500">
          Home
        </span>
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400" />
      </a>
    </nav>
  );
}
