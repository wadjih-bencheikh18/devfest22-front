import { Link } from "react-router-dom";
import { Navbar } from "../sections";
import bg from "../assets/bg.png";
import logo from "../assets/logo.png";

export function LandingPage() {
  return (
    <div className="w-screen min-h-screen font-poppins bg-[#ECE0E5]">
      <Navbar state={3} />
      <div className="grid  grid-cols-2">
        <div className="col-start-1">
          <img src={bg} className="h-[616px] -ml-[150px]" />
        </div>
        <div className="col-start-2 mt-36 mr-36">
          <h1 className="text-4xl mb-10">
            <img src={logo} />
          </h1>
          <div className="flex gap-4 text-lg justify-between mb-20">
            NABDA est un système de dossier médical électronique (DME) qui peut
            créer, rassembler et gérer des dossiers médicaux, et les rendre
            accessibles à des autorisés.
          </div>
          <Link
            to="/init"
            className="ml-[400px]  bg-blue text-white py-2 px-10 rounded-xl text-lg"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
