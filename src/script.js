import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";

const downloadButton = document.getElementById("download");
const element = document.getElementById("content");

downloadButton.addEventListener("click", () => {
  let saveResume = prompt("File name", "");
  html2pdf(element, {
    filename: saveResume,
  });
});

// For save on PNG 

const saveButton = document
  .getElementById("save-button")
  .addEventListener("click", () => {
    html2canvas(element).then((canvas) => {
      let saveResume = prompt("File name", "");

      const img = new Image();
      img.src = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.download = saveResume;
      link.href = img.src;

      link.dispatchEvent(new MouseEvent("click"));
    });
  });

//this is for canvas PDF.

// const { default: jsPDF } = require("jspdf");

// const canvas = document.getElementById("canvas");
// // Get the canvas element and download button
// const canvas = document.getElementById('canvas');
// const downloadButton = document.getElementById('download');

// // Add a click event listener to the download button
// downloadButton.addEventListener('click', () => {

//   // Get the canvas image data
//   const dataUrl = canvas.toDataURL();

//   // Create a new jsPDF instance
//   const doc = new jsPDF(); OR --->

// const doc = new jsPDF({
//   orientation: 'portrait',
//   unit: 'in',
//   format: 'letter'
// });

//   // Set the PDF format to match the canvas dimensions
//   doc.setPageSize([canvas.width, canvas.height]);

//   // Add the canvas image to the PDF document
//   doc.addImage(dataUrl, 'PNG', 0, 0, canvas.width, canvas.height);

//   // Save the PDF document
//   let saveResume = prompt('File name', ' ')
//   doc.save(saveResume);

// //   // Alternatively, you can convert the canvas image to a PNG file and download it
// //   // const link = document.createElement('a');
// //   // link.download = 'project.png';
// //   // link.href = dataUrl;
// //   // link.click();
// });
