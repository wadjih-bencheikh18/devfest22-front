import { useState } from "react";
import { Link } from "react-router-dom";
const OUT = {
  "Antécédents médicaux": ["sans antécédent cardiaque"],
  Symptômes: [
    "dyspnée d'apparition soudaine",
    "palpitations",
    "syncope",
    "apyrétique et normotendu",
  ],
  "Procédure thérapeutique": ["intubation", "assistance ventilatoire"],
  Maladie: ["apyrétique", "normotendu"],
  Medicament: ["midodrine", "fludrocortisone"],
  "Structure biologique touchée": ["poitrine"],
  "Valeur du laboratoire": ["140 battements/min"],
};
export function Description() {
  const [value, setValue] = useState("");
  const [fill, setFill] = useState(false);
  return (
    <div className="mx-36">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl my-5 font-bold text-center">Description</h1>
        <textarea
          placeholder="Enter your description ..."
          type="text"
          rows="10"
          className=" px-10 text-md py-5 rounded-lg border-2 border-gray-300"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex self-end ">
          <button
            onClick={() => setValue("")}
            className="inline-block mx-5 px-10 py-2 mt-5 rounded-lg text-lg  mr-2 text-white bg-[#5E5B70]"
          >
            Reset
          </button>
          <button
            onClick={() => setFill(true)}
            className="inline-block mx-5 px-10 py-2 mt-5 rounded-lg text-lg  mr-24 text-white bg-[#5E5B70]"
          >
            Fill
          </button>
        </div>
      </div>
      {fill && (
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl my-5 font-bold text-center">Resultat</h1>
          <table>
            {Object.entries(OUT).map(([key, value]) => (
              <tr>
                <td className="w-2/12">{key}</td>
                <td className="w-10/12">
                  <input
                    value={Array.isArray(value) ? value.join(", ") : value}
                    type="text"
                    className="px-10 py-5 rounded-lg border-2 w-full border-gray-300"
                  />
                </td>
              </tr>
            ))}
          </table>
          <Link
            to="/"
            className="self-center inline-block mx-5 px-10 py-2 my-5 rounded-lg text-lg  text-white bg-[#5E5B70]"
          >
            Submit
          </Link>
        </div>
      )}
    </div>
  );
}
