/*window.addEventListener("load", () => {
    console.log("Header script running");
  
    const observeDomChanges = () => {
      const observer = new MutationObserver(() => {
        const dropdownButton = document.querySelector(".resources-button");
        const dropdownMenu = document.querySelector(".sidebar");
  
        if (dropdownButton && dropdownMenu) {
          dropdownButton.addEventListener("click", (event) => {
            event.preventDefault();
            dropdownMenu.classList.toggle("show");
          });
  
          window.addEventListener("click", (event) => {
            if (
              !dropdownButton.contains(event.target) &&
              !dropdownMenu.contains(event.target)
            ) {
              dropdownMenu.classList.remove("show");
            }
          });
        } else {
          console.log('Dropdown button or menu not found');
        }
      });
  
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };
  
    observeDomChanges();
  });*/

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
  }