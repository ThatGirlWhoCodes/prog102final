// const trivia = [
//     {
//       question: "What is the largest island in the world?",
//       answer: "Greenland"
//     },
//     {
//       question:
//         "What is the brightest star in the sky?",
//       answer: "Sirius"
//     },
//     {
//       question: "How many wives did Henry VIII have?",
//       answer: "6"
//     }
//   ];
  
//   const question = document.querySelector(".question");
//   const guess = document.querySelector("#guess");
//   const next = document.querySelector("#next");
  
//   window.addEventListener("load", () => {
//     let game = draw();
//     console.log(game);
  
//     next.addEventListener("click", () => {
//       console.log(check(guess.value, game.a));
//       if (check(guess.value, game.a)) {
//         alert(`Correct! The answer was ${game.a}`);
//         game = draw();
//         guess.value = '';
//       } else {
//         alert(`WRONG`);
//         guess.valuie = '';
//       }
//     });
//   });
  
//   function draw() {
//     let rand = Math.floor(Math.random() * trivia.length);
//     question.textContent = trivia[rand].question;
  
//     return { q: trivia[rand].question, a: trivia[rand].answer };
//   }
  
//   function check(guess, answer) {
//     console.log(`${guess} : ${answer}`);
//     if (guess === answer) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  