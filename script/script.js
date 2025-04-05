const sidebarTitle = document.getElementsByTagName("h2")[0];


const button = document.getElementById("collapseButton").onclick = () => {
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer.style.display === "none" || sidebarContainer.style.width === "0px") {
        sidebarContainer.style.display = "flex";
        sidebarContainer.style.transition = "width 0.5s ease-in-out";
        sidebarContainer.style.width = "15%";
    } else {
        sidebarContainer.style.transition = "width 0.5s ease-in-out";
        sidebarContainer.style.display = "block";
        sidebarContainer.style.width = "0px";
        button.style.display= "block";
        button.style.position = "absolute";
        button.style.right = "100px";
        button.style.top = "0px";
        button.style.color = "black";
    }
}