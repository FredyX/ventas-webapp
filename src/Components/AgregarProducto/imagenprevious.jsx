import { useState } from "react";
import styled from "styled-components";
import styles from "./AgregarProducto.scss";




function DragArea() {
    const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
    const changeImage = (e) => {
      console.log(e.target.files);
      if (e.target.files[0] !== undefined) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          e.preventDefault();
          setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
        };
      }
  };
  return (
    <div>
      <StyleDragArea>
        <br />
    

        <div className="cajaimagen">

            <div class="grid-container">
            <div class="grid-item tall">
                
                <img
                src={ImageSelectedPrevious}
                alt=""
                height="200px"
                width="250px"
            />

            </div>
            <div class="grid-item tall">2</div>
            <div class="grid-item tall">3</div>
            <div class="grid-item tall">4</div>
            <div class="grid-item tall">5</div>
            <div class="grid-item tall">6</div>

        </div>
        </div>

        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              changeImage(e);
            }}
          />
          <div className="text-information">
          <div className="textoimagen"> Puede arrastrar y soltar las imagenes o dar click para seleccionar</div>
          </div>
        </div>

      </StyleDragArea>
    </div>
  );
}

export default DragArea;

const StyleDragArea = styled.div`
.center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file-upload-content {
    display: none;
    text-align: center;
  }
  .file-upload-input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
  .image-upload-wrap {
    position: relative;
    height: 100px;
    border: 4px solid #d0d7de;
    margin-left: 10px;
    margin-right: 10px;
  }
  .image-upload-wrap:hover {
    background-color: transparent;
    border: 4px dashed #12b700;
  }



}
`;