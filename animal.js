Sheep.addEventListener('click', function() {
    console.log("Sheep");
    document.body.classList.add("Sheep");
    document.body.classList.remove("Bear", "Moose", "Elk", "Wolf");
    document.getElementById('banner').src="images/sheep.webp";
    Sheep.classList.add("button-selected");
    Bear.classList.remove("button-selected");
    Moose.classList.remove("button-selected");
    Wolf.classList.remove("button-selected");
    Elk.classList.remove("button-selected");
});

Bear.addEventListener('click', function() {
    console.log("Bear");
    document.body.classList.add("Bear");
    document.body.classList.remove("Sheep", "Moose", "Elk", "Wolf");
    document.getElementById('banner').src="images/bear.webp";
    Bear.classList.add("button-selected");
    Sheep.classList.remove("button-selected");
    Moose.classList.remove("button-selected");
    Wolf.classList.remove("button-selected");
    Elk.classList.remove("button-selected");
});

Moose.addEventListener('click', function() {
    console.log("Moose");
    document.body.classList.add("Moose");
    document.body.classList.remove("Sheep", "Bear", "Elk", "Wolf");
    document.getElementById("banner").src = "images/moose.webp";
    Moose.classList.add("button-selected");
    Sheep.classList.remove("button-selected");
    Bear.classList.remove("button-selected");
    Wolf.classList.remove("button-selected");
    Elk.classList.remove("button-selected");
});

Wolf.addEventListener('click', function() {
    console.log("Wolf");
    document.body.classList.add("Wolf");
    document.body.classList.remove("Sheep", "Bear", "Moose", "Elk");
    document.getElementById("banner").src = "images/wolf.webp";
    Wolf.classList.add("button-selected");
    Sheep.classList.remove("button-selected");
    Moose.classList.remove("button-selected");
    Bear.classList.remove("button-selected");
    Elk.classList.remove("button-selected");
});

Elk.addEventListener('click', function() {
    console.log("Elk");
    document.body.classList.add("Elk");
    document.body.classList.remove("Sheep", "Bear", "Moose", "Wolf");
    document.getElementById("banner").src = "images/elk.webp";
    Elk.classList.add("button-selected");
    Sheep.classList.remove("button-selected");
    Moose.classList.remove("button-selected");
    Wolf.classList.remove("button-selected");
    Bear.classList.remove("button-selected");
});
