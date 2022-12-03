import { Person } from "../sections";
import { Navbar } from "../sections";
export function Profile() {
  return (
    <div className="w-screen min-h-screen font-poppins bg-[#ECE0E5]">
      <Navbar />
      <Person />
    </div>
  );
}
