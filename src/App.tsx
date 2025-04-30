import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <div className="grid grid-cols-[minmax(18rem,_20rem)_1fr] h-screen">
        <Sidebar />
        <main className="bg-white">Main Content</main>
      </div>
    </>
  );
}
