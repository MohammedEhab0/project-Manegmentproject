import Button from "./Button";
import noProjectSelectedimage from "../src/assets/no-projects.png";
export default function NoProject({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectSelectedimage}
        alt="emety task list"
        className="h-16 w-16 opject-contain mx-auto"
      ></img>
      <h2 className="text-xl font-bold text-stone-500 mx my-4">
        {" "}
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select project or get start with a new one{" "}
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Creat New Project</Button>
      </p>
    </div>
  );
}
