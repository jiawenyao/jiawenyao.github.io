var options = [{
    "img": "./imgs/leaky.png",
    "page": "leak-a-lil.html",
    "name": "let yourself l̴͓̥̠̼̏̑̃̂̂͘ḛ̷̺̟͓͈̜̓̋̍̄̆ä̸̞̝̳́̾̓̈̾k̷͎̰̓̒͘ a little ",
    "disabled": "0"
}, {
    "img": "./imgs/uncertainty.jpg",
    "page": "certainty-irl-on-uncertainty-iml.html",
    "name": "Certainty IRL on Uncertainty IML",
    "disabled": "0"
}, {
    "img": "./imgs/loading.jpg",
    "page": "loading.html",
    "name": "[loading...]",
    "disabled": "0"
}, {
    "img": "./imgs/bbb.png",
    "page": "browsing-broswer-browsed.html",
    "name": "browsing-broswer-browsed",
    "disabled": "0"
}, {
    "img": "./imgs/un-cvnt.jpg",
    "page": "unfamiliar-convenient.html",
    "name": "unfamiliar convenient",
    "disabled": "0"
}, {
    "img": "./imgs/yamiichi.jpg",
    "page": "internet-yamiichi.html",
    "name": "tenretnI >>Internet Yami Ichi booth",
    "disabled": "0"
}, {
    "img": "./imgs/unknown.jpeg",
    "page": "unknown.html",
    "name": "unknown",
    "disabled": "0"
}, {
    "img": "./imgs/eye-eye.jpg",
    "page": "eye-eye.html",
    "name": "eye-eye",
    "disabled": "0"
}, {
    "name": "else",
    "disabled": "1"
}, {
    "img": "./imgs/me.jpg",
    "page": "about.html",
    "name": "𓂂 ꒰ ᐧ༚̮ᐧ ꒱ᐧ༚̮ᐧ ꒱ ꙳ about jiawen",
    "disabled": "0"
}, {
    "img": "./imgs/xinhui.png",
    "page": "random_sharing_desire.html",
    "name": "⎝̐̈⎛̐̈•̐̈‿̐̈•̐̈⎞̐̈⎠̐̈ random sharing desire",
    "disabled": "0"
}]

options.forEach(option => {
    if (option.disabled == "0") {
        let element = document.createElement("option");
        element.innerText = option.name
        element.value = option.page
        document.getElementById("drop-down").appendChild(element);
    } else {
        let element = document.createElement("option");
        element.innerText = option.name;
        element.disabled = true;
        document.getElementById("drop-down").appendChild(element);
    }

})

function changeImg(src, link) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    // a.setAttribute('href', link);,
    a.href = link;
    img.src = src;
    img.style.cssText = "position: absolute; left: 0px; top: 0px; width: 100px; height: 100px; cursor: pointer;";

    a.appendChild(img);
    document.getElementById("img-box").appendChild(a);
}


function onChange(event) {
    console.log("event", event)
    value = document.getElementById("drop-down").value;
    option = options.find(opt => opt.page == value)
    changeImg(option.img, option.page)
}