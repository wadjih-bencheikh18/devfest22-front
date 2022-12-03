import { Navbar } from "../sections";
import { PersonB } from "../sections/PersonB";
export function ProfileB() {
  return (
    <div className="w-screen min-h-screen font-poppins bg-[#ECE0E5]">
      <Navbar state={1} />
      <PersonB />
    </div>
  );
}
