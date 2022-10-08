if (document.querySelectorAll("[data-anim-count]").length > 0) {
   const numbers = document.querySelectorAll("[data-anim-count]");

   numbers.forEach((num) => {
      const incrementCounter = () => {
         const target_number = +num.getAttribute("data-anim-count");
         const current_number = parseInt(num.innerText);

         if (current_number < target_number) {
            num.innerText = Math.floor(current_number + target_number / 100);
            setTimeout(incrementCounter, 10);
         } else {
            num.innerText = target_number.toLocaleString();
         }
      };
      incrementCounter();
   });
}
