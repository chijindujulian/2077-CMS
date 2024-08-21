document.addEventListener("DOMContentLoaded", function () {
  const editorElement = document.querySelector("#id_contents"); // Adjust to match your actual element ID
  if (editorElement) {
    ClassicEditor.create(editorElement, {
      link: {
        decorators: {
          addTargetToExternalLinks: false,
        },
      },
      removePlugins: ["Link"],
      toolbar: {
        items: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote",
        ],
      },
    })
      .then((editor) => {
        console.log("CKEditor5 initialized successfully");
      })
      .catch((error) => {
        console.error("Error initializing CKEditor:", error);
      });
  } else {
    console.error("CKEditor5 element not found");
  }
});
