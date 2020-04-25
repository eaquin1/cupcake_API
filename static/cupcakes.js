

function generateCupcakeHTML(cupcake) {
   return  `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    ${cupcake.flavor} / ${cupcake.size} <img src="${cupcake.image}"></li>
    `
}

async function populateCupcakes() {
    let cupcakeData = await axios.get("/api/cupcakes");
    let cupcakeList = cupcakeData.data.cupcakes;
    for (let cupcake of cupcakeList) {
        let HTML = generateCupcakeHTML(cupcake);
        $("#cupcakes-list").append(HTML)
    }
}

async function addCupcake() {
    let flavor = $("#flavor").val().toLowerCase();
    let size = $("#size").val();
    let rating = $("#rating").val();
    let image = $("#image").val();
    
    let newCupcake = await axios.post("/api/cupcakes", {
        flavor,
        size,
        rating,
        image
    });
   
    let HTML = generateCupcakeHTML(newCupcake.data.cupcake);
    $("#cupcakes-list").append(HTML);
    $("#new-cupcake-form").trigger("reset");
}

$("#new-cupcake-form").on("submit", function(e) {
    e.preventDefault();
    addCupcake();
});

$(populateCupcakes);