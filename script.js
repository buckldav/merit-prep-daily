const courseName = window.location.pathname
  .split("/")
  .pop()
  .split(".")[0]
  .split("-")
  .map((val) => {
    if (val === "and") return "&";
    return val[0].toUpperCase() + val.substring(1, val.length);
  })
  .join(" ");
const courseSlug = courseName.split(" ").join("-").toLowerCase();
document.getElementById("courseName").innerHTML = courseName.includes(
  "Ap Computer Science"
)
  ? courseName.replace("Ap Computer Science", "AP CS")
  : courseName;
const getCanvasUrl = (slug) => {
  const courses = {
    "ap-computer-science-a": 971,
    "ap-computer-science-principles": 1486,
    "computer-programming-1": 963,
    "computer-science-principles": 896,
    "game-development-1": 1144,
    "web-development-1": 1143,
    "web-development-capstone": 1141,
  };
  const public = `https://cs.meritacademy.tech/#/disclosure?name=${slug}`;
  let url =
    courseSlug in Object.keys(courses)
      ? "https://meritacademy.instructure.com/courses/${courses[slug]}/pages/disclosure-document"
      : public;
  fetch(url, {
    method: "HEAD",
  })
    .then(() => {
      return url;
    })
    .catch((e) => {})
    .finally(() => {
      return public;
    });
};
document
  .getElementById("disclosure")
  .setAttribute("href", getCanvasUrl(courseSlug));

console.log(window);
