//API_URL
const api_url = "https://hpb.health.gov.lk/api/get-current-statistical";

//Get Data From API
async function GET_DATA() {
  const response = await fetch(api_url);
  const data = await response.json();

  //Local DATA
  var local_new_cases = data["data"]["local_new_cases"];
  var local_new_deaths = data["data"]["local_new_deaths"];
  var local_active_cases = data["data"]["local_active_cases"];
  var local_total_cases = data["data"]["local_total_cases"];
  var local_deaths = data["data"]["local_deaths"];
  var local_recovered = data["data"]["local_recovered"];
  var local_total_number_of_individuals_in_hospitals =
    data["data"]["local_total_number_of_individuals_in_hospitals"];
  var update_date_time = data["data"]["update_date_time"];

  //Global DATA
  var global_new_cases = data["data"]["global_new_cases"];
  var global_new_deaths = data["data"]["global_new_deaths"];
  var global_total_cases = data["data"]["global_total_cases"];
  var global_deaths = data["data"]["global_deaths"];
  var global_recovered = data["data"]["global_recovered"];

  let global_total_cases_rounded = global_total_cases / 1000000;
  let global_deaths_rounded = global_deaths / 1000000;
  let global_recovered_rounded = global_recovered / 1000000;

  document.getElementById("local_new_cases").innerHTML = local_new_cases;
  document.getElementById("local_new_deaths").innerHTML = local_new_deaths;
  document.getElementById("local_total_cases").innerHTML = local_total_cases;
  document.getElementById("local_active_cases").innerHTML = local_active_cases;
  document.getElementById("local_deaths").innerHTML = local_deaths;
  document.getElementById("local_recovered").innerHTML = local_recovered;
  document.getElementById(
    "local_total_number_of_individuals_in_hospitals"
  ).innerHTML = local_total_number_of_individuals_in_hospitals;
  document.getElementById("last_update").innerHTML = update_date_time;

  document.getElementById("global_new_cases").innerHTML = global_new_cases;
  document.getElementById("global_new_deaths").innerHTML = global_new_deaths;
  document.getElementById("global_total_cases").innerHTML = global_total_cases;
  document.getElementById("global_deaths").innerHTML = global_deaths;
  document.getElementById("global_recovered").innerHTML = global_recovered;

  document.getElementById("global_total_cases_rounded").innerHTML =
    global_total_cases_rounded.toFixed(2) + "M";
  document.getElementById("global_deaths_rounded").innerHTML =
    global_deaths_rounded.toFixed(2) + "M";
  document.getElementById("global_recovered_rounded").innerHTML =
    global_recovered_rounded.toFixed(2) + "M";
}

GET_DATA();