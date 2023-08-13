
import inquirer from "inquirer"; //for user input
import qr from "qr-image"; //for qr image generation
import fs from "fs";



inquirer
  .prompt([
    {message: "What is your URL: ",
    name: "URL"
    },
  ])
  .then((answers) => {
    // console.log(answers);
    const url = answers.URL;
    var qr_png = qr.image(url, {type: 'png'});
    qr_png.pipe(fs.createWriteStream('qr_image.png'));
  });





