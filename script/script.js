const sidebarTitle = document.getElementsByTagName("h2")[0];


const button = document.getElementById("collapseButton").onclick = () => {
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer.style.display === "none") {
        sidebarContainer.style.display = "block";
        sidebarContainer.style.transition = "width 0.5s ease-in-out";
    } else {
        sidebarContainer.style.display = "block";
        sidebarContainer.style.width = "110px";
        sidebarTitle.innerHTML = "X";
    }
}