function abbrevName(name) {
  let a = name.split(" ");
  document.write(a[0][0].toUpperCase() + "." + a[1][0].toUpperCase(), "<br>");
}
abbrevName("Belij Valerij");