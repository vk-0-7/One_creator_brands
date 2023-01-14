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
    <figure class="image-container" style={{width:"60%",borderRadius:"10px"}}>
        <img id="chosen-image"style={{width:"50%",height:"50%" ,margin:"50px"}} />
       
    </figure>

    <input type="file" id="upload-button" accept="image/*"/>
   
</div>
  )
}

export default abc