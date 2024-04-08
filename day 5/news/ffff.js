console.log("weather app");

function fetchAPI(params) {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=us&key=SUWENMJDCG3P8Y7"

    fetch(url)
    .then((res) => res.json())
        .then(renderUI);
}
fetchAPI()

function renderUI(params) {
    const days = data.days;
    console.log(days);

    const row = document.createElement("tr");


    const cell1 = document.createElement("th")
    cell1.innerText = 'Date';
    row.appendChild(cell1);

    const cell2 = document.createElement("th")
    cell2.innerText = 'Maximun Temp';
    row.appendChild(cell2);

    const cell3 = document.createElement("th")
    cell3.innerText = 'Maximun Temp';
    row.appendChild(cell3);

    root.append(row)
}