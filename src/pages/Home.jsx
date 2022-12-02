import { Navbar, Patients } from "../sections";
export function Home() {
  return (
    <div className="w-screen h-screen font-poppins bg-[#ECE0E5]">
      <Navbar />
      <Patients />
    </div>
  );
}
