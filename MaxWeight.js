'use strict'
{
  const calc = document.getElementById("calc");

  calc.addEventListener('click', () => {
    const weight = document.getElementById("weight").value;
    const reps = document.getElementById("reps").value;
    const result = document.getElementById("result");

    if (weight < 1 || isNaN(weight)) {
      alert("正しい重量を入力してください");
      return;
    }

    if (reps < 2 || reps > 10 || reps % 1 > 0 || isNaN(reps)) {
      alert("2〜10の整数を入力してください");
      return;
    }

    result.textContent = Math.round((weight * reps / 40 * 100 + weight * 100) / 100);
  });

}
