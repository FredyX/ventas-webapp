import { useState } from "react";
import styled from "styled-components";

function DragArea2() {
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
      <StyleDragArea2>
        <br />

        <div className="center">
          <img
            src={ImageSelectedPrevious}
            alt=""
            height="250px"
            width="250px"
          />
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
          <div className="textoimagen"> Seleccionar imagen 2</div>
          </div>
        </div>
      </StyleDragArea2>
    </div>
  );
}

export default DragArea2;

const StyleDragArea2 = styled.div`
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
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
  .image-upload-wrap {
    margin-top: 50px;
    position: center;
    height: 50px;
    border: 4px solid #d0d7de;
    margin-left: 0px;
    margin-right: 0px;
  }
  .image-upload-wrap:hover {
    background-color: transparent;
    border: 4px dashed #12b700;
  }
}
`;