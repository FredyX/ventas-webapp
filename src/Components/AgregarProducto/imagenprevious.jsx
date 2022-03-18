import { useState } from "react";
import styled from "styled-components";
import styles from "./AgregarProducto.scss";
import DragArea from "./images.jsx/imagen1";
import DragArea2 from "./images.jsx/imagen2";
import DragArea3 from "./images.jsx/imagen3";



function DragAreaPrincipal() {

  return (
    <div>
  
        <br />
    

        <div className="cajaimagen">

            <div class="grid-container">
            <div class="grid-item tall">
           
               <DragArea /> 
               

            </div>
            <div class="grid-item tall">
            
            <DragArea2 /> 

            </div>
            <div class="grid-item tall">
            
            <DragArea3 /> 

            </div>
          

        </div>
        </div>


    </div>
  );
}

export default DragAreaPrincipal;
