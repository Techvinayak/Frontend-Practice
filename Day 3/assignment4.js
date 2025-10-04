const a = [];

function add() {
  let d = document.getElementById("n").value;
  a.push(d);
  console.log(a);
  show();
}

function addAtStart() {
  let d = document.getElementById("n").value;
  a.unshift(d);
  console.log(a);
  show();
}

function removeArray() {
  a.shift();
  console.log(a);
  show();
}

function remove() {
  a.pop();
  console.log(a);
  show();
}

function oddNumber() {
  for (let i = 0; i < a.length; i++) {
    if (parseInt(a[i]) % 2 !== 0) {
      console.log(a[i]);
    }
  }
  show();
}

function evenNumber() {
  for (let i = 0; i < a.length; i++) {
    if (parseInt(a[i]) % 2 === 0) {
      console.log(a[i]);
    }
  }
  show();
}

function show() {
  document.getElementById("p1").innerHTML = a;
}
