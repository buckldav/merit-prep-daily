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
    "ap-computer-science-a": 967,
    "ap-computer-science-principles": 951,
    "app-and-web-development-1": 1143,
    "computer-programming-1": 959,
    "exploring-computer-science": 955,
    "web-development-capstone": 1142,
  };
  if (!courseSlug in Object.keys(courses) || top === self) {
    return `https://cs.meritacademy.tech/#/disclosure?name=${slug}`;
  } else {
    return `https://meritacademy.instructure.com/courses/${courses[slug]}/pages/disclosure-document`;
  }
};
document
  .getElementById("disclosure")
  .setAttribute("href", getCanvasUrl(courseSlug));

console.log(window);
