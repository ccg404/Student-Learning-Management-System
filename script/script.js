const button = document.getElementById("collapseButton").onclick = () => {
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer.style.display === "none") {
        sidebarContainer.style.width = "250px";
        sidebarContainer.style.display = "block";
    } else {
        sidebarContainer.style.display = "none";
        sidebarContainer.style.width = "0px";
    }
}