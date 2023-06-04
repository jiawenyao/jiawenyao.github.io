var options = [{
        "img": "./imgs/leaky.jpg",
        "page": "leaky.html",
        "name": "leaky"
    }, {
        "img": "./imgs/uncertainty.jpg",
        "page": "certainty-irl-on-uncertainty-iml.html",
        "name": "Certainty IRL on Uncertainty IML"
    }, {
        "img": "./imgs/loading.jpg",
        "page": "loading.html",
        "name": "[loading...]"
    }, {
        "img": "./imgs/bbb.png",
        "page": "browsing-broswer-browsed.html",
        "name": "browsing-broswer-browsed"
    }, {
        "img": "./imgs/un-cvnt.jpg",
        "page": "unfamiliar-convenient.html",
        "name": "unfamiliar convenient"
    }, {
        "img": "./imgs/yamiichi.jpg",
        "page": "internet-yamiichi.html",
        "name": "tenretnI >>Internet Yami Ichi booth"
    }, {
        "img": "./imgs/unknown.jpeg",
        "page": "unknown.html",
        "name": "unknown"
    }, {
        "img": "./imgs/eye-eye.jpg",
        "page": "eye-eye.html",
        "name": "eye-eye"
    }, {
        "img": "./imgs/me.jpg",
        "page": "about.html",
        "name": "𓂂 ꒰ ᐧ༚̮ᐧ ꒱ᐧ༚̮ᐧ ꒱ ꙳ about jiawen"
    }, {
        "img": "./imgs/xinhui.png",
        "page": "random_sharing_desire.html",
        "name": "ₒ₍₊˒₃˓₎ₒ▁▂▃▅▆▓▒░✩⃛ random sharing desire"
    }
]

options.forEach(option => {
    let element = document.createElement("option");
    element.innerText = option.name
    element.value = option.page
    document.getElementById("drop-down").appendChild(element);

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