const courses = {
  "ap-computer-science-a": 1495,
  "ap-computer-science-principles": 1486,
  "computer-programming-1": 1505,
  "computer-science-principles": 1587,
  "game-development-1": 1590,
  "web-development-1": 1895,
  "web-development-capstone": 1398,
};

const getCanvasUrl = async () => {
  // title case
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
  const url = `https://cs.meritacademy.tech/#/disclosure?name=${courseSlug}`;
  // let url = Object.keys(courses).includes(courseSlug)
  //   ? `https://meritacademy.instructure.com/courses/${courses[courseSlug]}/pages/disclosure-document`
  //   : public;
  // try {
  //   await fetch(url, {
  //     method: "HEAD",
  //     mode: "no-cors",
  //   });
  // } catch (e) {
  //   return public;
  // }

  return url;
};

getCanvasUrl()
  .then((url) => {
    const disclosure = document.getElementById("disclosure");
    disclosure && disclosure.setAttribute("href", url);
  })
  .catch((e) => {
    console.error(e);
  });
