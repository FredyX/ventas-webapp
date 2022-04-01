import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import imagenbase from "../../Assets/Logo1.jpg"

const Card = ({info}) => {

  return (
    <div className={`${styles.card_container}`}>
      <div className={styles.image_container}>
        <img src={info.imageSource} alt="producto" className="image"/>
      </div>
      <h3>{`${info.titulo} `}</h3>
      <h4>
        <p className={styles.descripcion}>{`Descripcion: ${info.descripcion}`}</p>
      </h4>
      <div className={styles.info}>
        <div className={styles.row_1}>
          <div className={styles.desc}>
            
            <span>{`Estado: ${info.estado} `}</span>
            <span>{`ID: ${info.id} `}</span>
          </div>

          <div className={styles.desc}>
            
            <span>{`Departamento: ${info.departamento}`}</span>
          </div>
        </div>

        <div className={styles.row_2}>
          <div className={styles.desc}>
            
            <span>{`Puntaje: ${info.score} `}</span>
          </div>

          <div className={styles.desc}>
            
            <span>{`: ${info.nombreUsuario}`}</span>
          </div>
        </div>
      </div>

      <div className={styles.card_precio}>
        <div className={styles.precio}>
        <span>{`Lps. ${info.precio}`}</span>
        </div>
        <div className={styles.card_btn}>
          <Link to={`/detalles/${info.id}`}>Ver mas</Link>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  info: {
    id: "",
    imageSource: imagenbase,
    descripcion: "Descripcion",
    estado: "Estado",
    departamento: "Departamento",
    precio: "Precio",
    titulo: "Titulo",
    score:"Score",
    nombreUsuario: "Nombre Usuario",
  }
};


export default Card;