document.addEventListener("DOMContentLoaded", function() {
    const generations = document.querySelectorAll(".generation");
    const membersContainers = document.querySelectorAll(".members");
  
    generations.forEach(gen => {
      gen.addEventListener("click", () => {

        generations.forEach(g => g.classList.remove('focus'));
        gen.classList.add('focus')

        const genId = gen.getAttribute("data-gen");
  
        membersContainers.forEach(container => {
          if (container.id === genId) {
            container.classList.add("active");
          } else {
            container.classList.remove("active");
          }
        });
      });
    });
  });
  