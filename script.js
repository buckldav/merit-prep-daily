const courseSlug = window.location.pathname
  .split("/")
  .pop()
  .split(".")[0]
  .split("-")
  .map((val) => {
    if (val === "and") return "&";
    return val[0].toUpperCase() + val.substring(1, val.length);
  })
  .join(" ");
document.getElementById("courseName").innerHTML = courseSlug;
document
  .getElementById("disclosure")
  .setAttribute(
    "href",
    window.parent.location !== window.location
      ? `${window.parent.location}/pages/disclosure-document`
      : `https://cs.meritacademy.tech/#/disclosure?name=${courseSlug}`
  );
