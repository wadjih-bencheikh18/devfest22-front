import { DropZoneContainer } from "analysis-ui-components";
import { useEffect, useState } from "react";
import loadingGif from "../assets/loading.gif";
import { Navbar } from "../sections";
import { Link } from "react-router-dom";
import brain from "../assets/brainscan.png";
import dents from "../assets/dents.jpg";
import poumon from "../assets/poumon.jpg";
import pdp from "../assets/sofia.jpg";
import analyse from "../assets/analyse.png";
import doc from "../assets/doc.jpg";
export function Initialise() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  return (
    <div className="w-screen min-h-screen font-poppins bg-[#ECE0E5]">
      <Navbar state={1} />

      {state === 0 ? (
        <DropZoneContainer
          onDrop={(files) => {
            setFiles(files);
            setLoading(true);
          }}
        >
          <div className=" ml-20 grid grid-cols-12 ">
            <div className="col-span-5">
              <div className="flex  items-center gap-8 mt-[130px] ml-20">
                <img
                  src={pdp}
                  alt="pdp"
                  className="rounded-[60px] w-[120px] h-[120px] "
                />
                <div>
                  <h1 className="text-3xl">Sofia Boumarsol</h1>
                  <p className="font-light text-lg">32 ans</p>
                </div>
              </div>
              <h1 className="mt-24 text-2xl ">
                Télécharger les anciennes archives médicales
              </h1>
              {files.length > 0 && (
                <button
                  onClick={() => {
                    setState(1);
                  }}
                  className="mt-24  bg-blue text-white py-2 px-5 rounded-lg text-md"
                >
                  Sauvegarder
                </button>
              )}
            </div>

            {files.length === 0 ? (
              <div className=" col-span-6 col-start-7  w-full flex justify-center items-center h-[610px] top-0 border-black border-dashed border-2 ">
                Déposer vos archives ici
              </div>
            ) : loading ? (
              <div className="col-span-6 col-start-7 flex justify-center h-[600px] items-center">
                <img src={loadingGif} className="w-44 h-44" />
              </div>
            ) : (
              <GridFiles state={files.length !== 0} />
            )}
          </div>
        </DropZoneContainer>
      ) : (
        <FormInit />
      )}
    </div>
  );
}
function GridFiles({ state }) {
  return (
    <div className="col-span-6 col-start-7 grid grid-cols-12 h-[600px]">
      <div className="col-span-4  mt-[40%] h-[60%]">
        <h1 className="mt-16 mb-9">Scanner</h1>
        <div className="relative w-full h-[500px]">
          <img
            src={brain}
            alt="brain"
            className={`w-[50%] transition-all duration-500 ease-in-out absolute ${
              state ? "top-[10%] left-[20%]" : "top-[15%] left-[25%]"
            } `}
          />
          <img
            src={dents}
            alt="brain"
            className="w-[50%] absolute top-[15%] left-[25%]"
          />
          <img
            src={poumon}
            alt="brain"
            className={`w-[50%] transition-all duration-1000 ease-in-out absolute ${
              state ? "top-[20%] left-[30%]" : "top-[15%] left-[25%]"
            } `}
          />
        </div>
      </div>
      <div className="col-span-4 col-start-5  mt-[40%] h-[60%]">
        <h1 className="mt-16">Analyses</h1>
        <Folder img={analyse} state={state} />
      </div>
      <div className="col-span-4 col-start-9 mt-[40%] h-[60%]">
        <h1 className="mt-16">Documents</h1>
        <Folder img={doc} state={state} />
      </div>
    </div>
  );
}

function Folder({ img, state }) {
  return (
    <div className="relative w-full h-[500px]">
      <img
        src={img}
        alt="brain"
        className={`w-[50%] transition-all duration-500 ease-in-out absolute ${
          state ? "top-[10%] left-[20%]" : "top-[15%] left-[25%]"
        } `}
      />
      <img
        src={img}
        alt="brain"
        className="w-[50%] absolute top-[15%] left-[25%]"
      />
      <img
        src={img}
        alt="brain"
        className={`w-[50%] transition-all duration-1000 ease-in-out absolute ${
          state ? "top-[20%] left-[30%]" : "top-[15%] left-[25%]"
        } `}
      />
    </div>
  );
}
const OUT = [
  "Adresse",
  "Email",
  "Telephone",
  "Code postal",
  "Maladies chroniques",
  "Allergies",
];
function FormInit() {
  return (
    <div className="flex flex-col   justify-center">
      <h1 className="text-3xl my-5 font-bold text-center">Formulaire</h1>
      <table className=" self-center">
        {OUT.map((key) => (
          <tr>
            <td className="w-2/12">{key}</td>
            <td className="w-10/12">
              <input
                type="text"
                className="px-10 py-3 my-1 ml-10 rounded-lg border-2 w-full border-gray-300"
              />
            </td>
          </tr>
        ))}
      </table>
      <Link
        to="/profileB"
        className="self-center inline-block mx-5 px-10 py-2 my-5 rounded-lg text-lg  text-white bg-[#5E5B70]"
      >
        Submit
      </Link>
    </div>
  );
}
