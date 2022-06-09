// I- work on layout, input for creating a word & translate

let header = document.createElement("h1");
let headerText = document.createTextNode("Decoding App");
let container = document.createElement("div");
let container2 = document.createElement("div");
let inputCreate = document.createElement("input");
let inputDecode = document.createElement("input");
let inputCreateResult = document.createElement("h3");
let inputDecodeResult = document.createElement("h3");

header.appendChild(headerText);
container.appendChild(inputCreate);
container.appendChild(inputDecode);
container2.appendChild(inputCreateResult);
container2.appendChild(inputDecodeResult);
document.body.prepend(header);
header.after(container);
container.after(container2);

// styling the inputs

header.style.cssText = `text-align: center`;
container.style.cssText = `margin-top: 100px;display: flex; justify-content: center;`;
inputCreate.style.margin = `5px`;
inputDecode.style.margin = `5px`;
inputCreate.setAttribute("placeholder", "Create");
inputDecode.setAttribute("placeholder", "Translate");
inputCreateResult.innerText = "Your Creation: ";
inputDecodeResult.innerText = "The Translation: ";

// II- functionality

// 1 - get input from the create input and then change it to a decoded lang

inputCreate.onblur = () => {
  window.createInputValue = inputCreate.value;
  window.myWord = inputCreate.value;
  let word = "";
  window.finalInput = "";

  myWord.split("").forEach((e) => {
    changeLetters(e);
    putEleInDiv();
  });
};

inputDecode.onblur = () => {
  window.wordTrans = inputDecode.value;
  window.finalInput2 = "";

  wordTrans.split("").forEach((e) => {
    reverseLetters(e);
    putEle2inDiv();
  });
};

// make a map function

//changeLetters();

function changeLetters(e) {
  if (e.includes("a")) {
    window.newInput = e.replace("a", "7");
    finalInput += newInput;
  }

  if (e.includes("b")) {
    window.newInput = e.replace("b", "2");
    finalInput += newInput;
  }
  if (e.includes("c")) {
    window.newInput = e.replace("c", "9");
    finalInput += newInput;
  }
  if (e.includes("d")) {
    window.newInput = e.replace("d", "5");
    finalInput += newInput;
  }
  if (e.includes("e")) {
    window.newInput = e.replace("e", "1");
    finalInput += newInput;
  }
  if (e.includes("f")) {
    window.newInput = e.replace("f", "3");
    finalInput += newInput;
  }
  if (e.includes("g")) {
    window.newInput = e.replace("g", "8");
    finalInput += newInput;
  }
  if (e.includes("h")) {
    window.newInput = e.replace("h", "4");
    finalInput += newInput;
  }
  if (e.includes("i")) {
    window.newInput = e.replace("i", "6");
    finalInput += newInput;
  }
  if (e.includes("j")) {
    window.newInput = e.replace("j", "@");
    finalInput += newInput;
  }
  if (e.includes("k")) {
    window.newInput = e.replace("k", "!");
    finalInput += newInput;
  }
  if (e.includes("l")) {
    window.newInput = e.replace("l", "*");
    finalInput += newInput;
  }
  if (e.includes("m")) {
    window.newInput = e.replace("m", "&");
    finalInput += newInput;
  }
  if (e.includes("n")) {
    window.newInput = e.replace("n", "$");
    finalInput += newInput;
  }
  if (e.includes("o")) {
    window.newInput = e.replace("o", "#");
    finalInput += newInput;
  }
  if (e.includes("p")) {
    window.newInput = e.replace("p", "%");
    finalInput += newInput;
  }
  if (e.includes("q")) {
    window.newInput = e.replace("q", "+");
    finalInput += newInput;
  }
  if (e.includes("r")) {
    window.newInput = e.replace("r", "-");
    finalInput += newInput;
  }
  if (e.includes("s")) {
    window.newInput = e.replace("s", "=");
    finalInput += newInput;
  }
  if (e.includes("t")) {
    window.newInput = e.replace("t", "<");
    finalInput += newInput;
  }
  if (e.includes("u")) {
    window.newInput = e.replace("u", ">");
    finalInput += newInput;
  }
  if (e.includes("v")) {
    window.newInput = e.replace("v", "/");
    finalInput += newInput;
  }
  if (e.includes("w")) {
    window.newInput = e.replace("w", "_");
    finalInput += newInput;
  }
  if (e.includes(" ")) {
    window.newInput = e.replace(" ", ",");
    finalInput += newInput;
  }

  if (e.includes("x")) {
    window.newInput = e.replace("x", "|");
    finalInput += newInput;
  }
  if (e.includes("y")) {
    window.newInput = e.replace("y", "~");
    finalInput += newInput;
  }
  if (e.includes("z")) {
    window.newInput = e.replace("z", "?");
    finalInput += newInput;
  }

  window.finalOutPut = finalInput;
}
function putEleInDiv() {
  inputCreateResult.innerText = `Your Creation: ${finalOutPut}`;
}
function reverseLetters(e) {
  if (e.includes("7")) {
    window.newinput2 = e.replace("7", "a");
    finalInput2 += newinput2;
  }

  if (e.includes("2")) {
    window.newinput2 = e.replace("2", "b");
    finalInput2 += newinput2;
  }
  if (e.includes("9")) {
    window.newinput2 = e.replace("9", "c");
    finalInput2 += newinput2;
  }
  if (e.includes("5")) {
    window.newinput2 = e.replace("5", "d");
    finalInput2 += newinput2;
  }
  if (e.includes("1")) {
    window.newinput2 = e.replace("1", "e");
    finalInput2 += newinput2;
  }
  if (e.includes("3")) {
    window.newinput2 = e.replace("3", "f");
    finalInput2 += newinput2;
  }
  if (e.includes("8")) {
    window.newinput2 = e.replace("8", "g");
    finalInput2 += newinput2;
  }
  if (e.includes("4")) {
    window.newinput2 = e.replace("4", "h");
    finalInput2 += newinput2;
  }
  if (e.includes("6")) {
    window.newinput2 = e.replace("6", "i");
    finalInput2 += newinput2;
  }
  if (e.includes("@")) {
    window.newinput2 = e.replace("@", "j");
    finalInput2 += newinput2;
  }
  if (e.includes("!")) {
    window.newinput2 = e.replace("!", "k");
    finalInput2 += newinput2;
  }
  if (e.includes("*")) {
    window.newinput2 = e.replace("*", "l");
    finalInput2 += newinput2;
  }
  if (e.includes("&")) {
    window.newinput2 = e.replace("&", "m");
    finalInput2 += newinput2;
  }
  if (e.includes("$")) {
    window.newinput2 = e.replace("$", "n");
    finalInput2 += newinput2;
  }
  if (e.includes("#")) {
    window.newinput2 = e.replace("#", "o");
    finalInput2 += newinput2;
  }
  if (e.includes("%")) {
    window.newinput2 = e.replace("%", "p");
    finalInput2 += newinput2;
  }
  if (e.includes("+")) {
    window.newinput2 = e.replace("+", "q");
    finalInput2 += newinput2;
  }
  if (e.includes("-")) {
    window.newinput2 = e.replace("-", "r");
    finalInput2 += newinput2;
  }
  if (e.includes("=")) {
    window.newinput2 = e.replace("=", "s");
    finalInput2 += newinput2;
  }
  if (e.includes("<")) {
    window.newinput2 = e.replace("<", "t");
    finalInput2 += newinput2;
  }
  if (e.includes(">")) {
    window.newinput2 = e.replace(">", "u");
    finalInput2 += newinput2;
  }
  if (e.includes("/")) {
    window.newinput2 = e.replace("/", "v");
    finalInput2 += newinput2;
  }
  if (e.includes("_")) {
    window.newinput2 = e.replace("_", "w");
    finalInput2 += newinput2;
  }
  if (e.includes(",")) {
    window.newinput2 = e.replace(",", " ");
    finalInput2 += newinput2;
  }
  if (e.includes("|")) {
    window.newinput2 = e.replace("|", "x");
    finalInput2 += newinput2;
  }
  if (e.includes("~")) {
    window.newinput2 = e.replace("~", "y");
    finalInput2 += newinput2;
  }
  if (e.includes("?")) {
    window.newinput2 = e.replace("?", "z");
    finalInput2 += newinput2;
  }
  console.log(finalInput2);
  window.finalOutPut2 = finalInput2;
}
function putEle2inDiv() {
  inputDecodeResult.innerText = `The Translation: ${finalOutPut2}`;
}
