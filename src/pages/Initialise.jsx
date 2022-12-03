import { DropZoneContainer } from "analysis-ui-components";
import { useState } from "react";
import brain from "../assets/brainscan.png";
import dents from "../assets/dents.jpg";
import poumon from "../assets/poumon.jpg";
import pdp from "../assets/sofia.jpg";
import analyse from "../assets/analyse.png";
import doc from "../assets/doc.jpg";
export function Initialise() {
  const [files, setFiles] = useState([]);
  return (
    <DropZoneContainer
      onDrop={(files) => {
        setFiles(files);
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
        </div>
        {files.length === 0 ? (
          <div className=" col-span-6 col-start-7  w-full flex justify-center items-center h-[610px] top-0 border-black border-dashed border-2 ">
            Déposer vos archives ici
          </div>
        ) : (
          <GridFiles state={files.length !== 0} />
        )}
      </div>
    </DropZoneContainer>
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
