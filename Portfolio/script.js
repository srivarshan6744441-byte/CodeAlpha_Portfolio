
// Create Back to Top button
const topButton = document.createElement("button");

topButton.textContent = "↑";
topButton.id = "topButton";

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.padding = "12px 18px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "#0f172a";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";

document.body.appendChild(topButton);

// Show button when scrolling
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

// Scroll back to top
topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
