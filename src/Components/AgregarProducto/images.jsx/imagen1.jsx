import { useState } from "react";
import styled from "styled-components";


function DragArea({ passFile }) {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const changeImage = (e) => {
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
      passFile(e.target.files[0]);
    }
  };
  return (
    <div>
      <StyleDragArea>
        <br />


        <div className="center">
          <img
            src={ImageSelectedPrevious}
            alt=""
            height="505px"
            width="600px"
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
            <div className="textoimagen"> Seleccionar imagen 1</div>
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
    display: flex;
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
`;