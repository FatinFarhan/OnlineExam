let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("#user").innerHTML = user_name;
document.querySelector("#points").innerHTML = user_points;
document.querySelector("#time_taken").innerHTML = user_time;
