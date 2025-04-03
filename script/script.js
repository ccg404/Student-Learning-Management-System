const button = document.getElementById("collapseButton").onclick = () => {
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer.style.display === "none") {
        sidebarContainer.style.display = "block";
        button.innerHTML = "Collapse";
    } else {
        sidebarContainer.style.display = "none";
        button.innerHTML = "Expand";
    }
}