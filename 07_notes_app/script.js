const addBtn = document.querySelector(".add");

addBtn.addEventListener("click", () => {
  addNewNote();
});

// addNewNote();
function addNewNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="notes">
    <div class="tools">
      <button class="edit-txt"><i class="fas fa-edit"></i></button>
      <button class="clear-txt"><i class="fas fa-trash-alt"></i></button>
    </div>
    <main class="main hidden"></main>
    <textarea class="textarea" id=""></textarea>
  </div>
    
    `;
  const editBtn = note.querySelector(".edit-txt");
  const clearBtn = note.querySelector(".clear-txt");
  const notesEle = note.querySelector(".notes");
  const main = note.querySelector(".main");
  const textArea = note.querySelector(".textarea");

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  clearBtn.addEventListener("click", () => {
    note.remove();
  });
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked.parse(value);
  });

  document.body.appendChild(note);
}
