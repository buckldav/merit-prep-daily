document.getElementById("courseName").innerHTML = window.location.pathname
  .split("/")
  .pop()
  .split(".")[0]
  .split("-")
  .map((val) => {
    if (val === "and") return val;
    return val[0].toUpperCase() + val.substring(1, val.length);
  })
  .join(" ");
