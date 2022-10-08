if (document.querySelectorAll('[data-req="phone"]')) {
   const inputs = document.querySelectorAll('[data-req="phone"]');
   if (inputs.length > 0) {
      inputs.forEach((input) => {
         new Inputmask({
            mask: "+999 (99) 999-99-99",
            // showMaskOnHover: false
         }).mask(input);
      });
   }
}
