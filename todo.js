const inputField = document.querySelector(".text");
const btn = document.querySelector(".btn");
const div = document.querySelector(".div");
// const done = document.querySelector(".done");
// const deleteBtn = document.querySelector(".delete");
const err = document.querySelector(".err");
btn.addEventListener("click", () => {
  const para = document.createElement("p"); //? creating this because the inputField.value just gives text and it will come side by side in a row , to get all the avlues in a seperate line we need to create a new p when clicking the button
  const done = document.createElement("button");
  const deleteBtn = document.createElement("button");
  done.innerText = "Done";
  deleteBtn.innerText = "Delete";

  if (inputField.value === "") {
    err.innerText = "Enter a value";
  } else {
    err.innerText = "";
    para.innerHTML = inputField.value; //* filling the newly created para with the values of the input field
    div.prepend(para); //* then appending that whole para with content to the div
    done.classList.add("margin");
    deleteBtn.classList.add("margin");
    para.append(done); //? to keep the text and the 2 buttons in one line add the buttons to the para text itself
    para.append(deleteBtn);
    inputField.value = "";
    done.addEventListener("click", () => {
      para.style.textDecoration = "line-through"; //? the buttons will work for all individual para
    });
    deleteBtn.addEventListener("click", () => {
      div.removeChild(para);
    });

    //?? The below code does is that it will cross out and delete all the para with just one button click
    // done.classList.add("display");
    // deleteBtn.classList.add("display");
    // done.addEventListener("click", () => {
    //   //   for (const p of para) { //! para is not iterable
    //   //     console.log(para);
    //   //     p.style.textDecoration = "line-through";
    //   //   }
    //   para.style.textDecoration = "line-through";
    // });
    // deleteBtn.addEventListener("click", () => {
    //   div.removeChild(para);
    // });
  }

  //?? The below code is for removing and crossing out individual items
  //   para.addEventListener("click", () => {
  //     para.style.textDecoration = "line-through";
  //   });
  //   para.addEventListener("dblclick", () => {
  //     div.removeChild(para); //? if use remove() then all the child will be removed at once
  //   });
});
