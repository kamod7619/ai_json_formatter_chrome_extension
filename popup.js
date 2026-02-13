const input = document.getElementById("input");
const output = document.getElementById("output");

document.getElementById("encode").onclick = () => {
    try {
        output.value = JSON.stringify(input.value);
    } catch {
        alert("Encoding Error");
    }
};

document.getElementById("decode").onclick = () => {
    try {
        output.value = JSON.parse(input.value);
    } catch {
        alert("Invalid JSON to Decode");
    }
};

document.getElementById("format").onclick = () => {
    try {
        output.value = JSON.stringify(JSON.parse(input.value), null, 4);
    } catch {
        alert("Invalid JSON");
    }
};

document.getElementById("minify").onclick = () => {
    try {
        output.value = JSON.stringify(JSON.parse(input.value));
    } catch {
        alert("Invalid JSON");
    }
};

document.getElementById("copy").onclick = () => {
    output.select();
    document.execCommand("copy");
    alert("Copied!");
};

document.getElementById("clear").onclick = () => {
    input.value = "";
    output.value = "";
};

document.getElementById("darkMode").onclick = () => {
    document.body.classList.toggle("dark");
};
