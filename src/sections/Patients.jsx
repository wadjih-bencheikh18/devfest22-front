import { HiPlus } from "react-icons/hi";
import wajih from "../assets/wajih.jpg";
import moon from "../assets/Mounia.jpg";
import aymen from "../assets/Bendakir.jpg";
import sofia from "../assets/sofia.jpg";
import mas from "../assets/mas.jpg";
import nazim from "../assets/bendib.png";
import bg from "../assets/bg.png";
import { Link } from "react-router-dom";

const persons = [
  {
    name: "Massaoud Bouzid",
    pic: mas,
    time: "30min",
  },
  { name: "Mounia Kias", pic: moon, time: "2h" },
  { name: "Aymen Bendakir", pic: aymen, time: "3h" },
  { name: "Nazim Bendib", pic: nazim, time: "2j" },
];
export function Patients() {
  return (
    <div className="grid grid-cols-2">
      <div className="mt-8 ml-60">
        <h1 className="text-4xl mb-14">Patients</h1>
        <div className="flex gap-4 justify-between">
          <input
            className="rounded-2xl w-full py-2 px-5"
            placeholder="Rechercher"
          ></input>
          <div className="flex cursor-pointer items-center gap-2 px-6 py-2 text-white bg-blue rounded-2xl">
            <HiPlus size={25} />
            <p>Ajouter</p>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-3 ">
          {persons.map((person, i) => (
            <Link
              to="/profile"
              key={i}
              className="flex h-16 items-center justify-between px-2 bg-clear rounded-3xl"
            >
              <div className="flex items-center gap-7">
                <div className="flex justify-center w-12 flex-col">
                  <img src={person.pic} alt="pdp" className="rounded-full" />
                </div>
                <h1 className="">{person.name}</h1>
              </div>
              <p className="mr-4 text-sm">Il y a {person.time}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-start-2">
        <img src={bg} className="h-[616px] -ml-[150px]" />
      </div>
    </div>
  );
}
