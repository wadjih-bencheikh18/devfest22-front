import { Patients } from "../sections";
import { Navbar } from "../sections";
export function Home() {
  return (
    <div className="w-screen min-h-screen font-poppins bg-[#ECE0E5]">
      <Navbar />
      <Patients />
    </div>
  );
}
