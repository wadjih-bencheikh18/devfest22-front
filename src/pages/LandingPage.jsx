import bg from "../assets/bg.png";

export function LandingPage() {
  return (
    <div className="grid  grid-cols-2">
      <div className="col-start-1">
        <img src={bg} className="h-[616px] -ml-[150px]" />
      </div>
      <div className="col-start-2 mt-44 mr-36">
        <h1 className="text-4xl mb-14">NABDA</h1>
        <div className="flex gap-4 text-lg justify-between">
          NABDA est un système de dossier médical électronique (DME) qui peut
          créer, rassembler et gérer des dossiers médicaux, et les rendre
          accessibles à des autorisés.
        </div>
      </div>
    </div>
  );
}
