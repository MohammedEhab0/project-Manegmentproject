import Input from "./input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancle }) {
  const modal = useRef();
  const title = useRef();
  const descreption = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const entereddescreption = descreption.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      entereddescreption.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      descreption: entereddescreption,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mx my-4">
          {" "}
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          {" "}
          oops ... ypu like to forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          {" "}
          please make sure to provaide a valide value{" "}
        </p>
      </Modal>
      <div className=" w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancle}
            >
              cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={descreption} label="Discreption" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
