function solution(str) {
  let mirrorStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    mirrorStr += str[i];
  }
  document.write(mirrorStr, "<br>");
}
solution("world");