const fs = require("fs");
const axios = require("axios");

// Function to convert image file to base64
function imageToBase64(filePath) {
  const imageFile = fs.readFileSync(filePath);
  return Buffer.from(imageFile).toString("base64");
}

// Replace with your image file path
const filePath = "C:\\Users\\Lokesh\\Data_Science\\zomato\\taco.jpg";
const imageBase64 = imageToBase64(filePath);

// Headers
const headers = {
  "Content-Type": "application/json", // Correct content type for JSON
};

// Data payload
const data = {
  data: imageBase64,
};

// Send POST request

axios
  .post(
    "https://iiitstudent.ap-south-1.modelbit.com/v1/predict_image/latest",
    data, // Send data as JSON object
    { headers: headers }
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  });
