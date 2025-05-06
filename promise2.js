// Function to simulate downloading a file with a 2-second delay
function downloadFile() {
    return new Promise((resolve) => {
      console.log("Downloading the file...");
      setTimeout(() => {
        console.log("File downloaded!");
        resolve(); // Resolve the promise after the file is downloaded
      }, 2000); // 2-second delay
    });
  }
  
  // Function to simulate compressing the file
  function compressFile() {
    return new Promise((resolve) => {
      console.log("Compressing the file...");
      setTimeout(() => {
        console.log("File compressed!");
        resolve(); // Resolve the promise after the file is compressed
      }, 1000); // 1-second delay for compression
    });
  }
  
  // Function to simulate uploading the file
  function uploadFile() {
    return new Promise((resolve) => {
      console.log("Uploading the file...");
      setTimeout(() => {
        console.log("File uploaded!");
        resolve(); // Resolve the promise after the file is uploaded
      }, 1500); // 1.5-second delay for upload
    });
  }
  
  // Chaining the promises to simulate the full flow
  downloadFile()
  .then(()=>compressFile())
  .then(()=>uploadFile())

    .catch((error) => {
      console.error("An error occurred:", error);
    });
    function add(){
        alert("work is done😎😎😊😉😊😎😎")
      }
