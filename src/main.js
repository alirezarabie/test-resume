setupColorChanger(document.querySelector("#changecolor"));

function setupColorChanger(element) {
  const colors = ["default", "purple", "green", "red", "orange"];
  var colorIndex = 0;

  // To load CSS file
  const loadCSS = (color) => {
    document
      .getElementById("style")
      .setAttribute("href", `/src/style-${color}.css`);
  };

  // add click event listener for changing color
  element.addEventListener("click", () => {
    colorIndex = colorIndex + 1;
    if (colorIndex === colors.length) colorIndex = 0;

    loadCSS(colors[colorIndex]);
  });
}
