
function changeImg(src, link) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    // a.setAttribute('href', link);
    a.href = link;
    img.src = src;
    img.style.cssText = "position: absolute; left: 0px; top: 0px; width: 100px; height: 100px; cursor: pointer;";

    a.appendChild(img);
    document.getElementById("img-box").appendChild(a);
}
