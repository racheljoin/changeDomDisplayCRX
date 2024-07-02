
console.log("**changeColorchangeColorchangeColor**************************")
document.getElementById('changeColor').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const container = document.getElementById("container")
        chrome.tabs.sendMessage(tabs[0].id, { cmd: "change", m: container?.value || "container-warp" }, function () { })
    });
});

// function toggleBackgroundColor() {
//     console.log("**changeColorchangeColorchangeColor**************************")
//     const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
//     const currentColor = document.body.style.backgroundColor;
//     let newColor = colors[Math.floor(Math.random() * colors.length)];
//     while (newColor === currentColor) {
//         newColor = colors[Math.floor(Math.random() * colors.length)];
//     }
//     document.body.style.backgroundColor = newColor;
// }