import { useState,useEffect } from "react"

const abc = () => {





useEffect(() => {
    
    let uploadButton = document.getElementById("upload-button");
    let chosenImage = document.getElementById("chosen-image");
    let fileName = document.getElementById("file-name");
    
    uploadButton.onchange = () => {
        let reader = new FileReader();
        reader.readAsDataURL(uploadButton.files[0]);
        reader.onload = () => {
            chosenImage.setAttribute("src",reader.result);
        }
        fileName.textContent = uploadButton.files[0].name;
    }

}, [])



  return (
    <div class="container">
   <h1>hghjvhvhvhv</h1>

    <input type="file" id="upload-button" accept="image/*"/>
   
</div>
  )
}

export default abc