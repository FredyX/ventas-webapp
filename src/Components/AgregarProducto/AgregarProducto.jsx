
import React from 'react'
import styles from "../../Components/Navbar/Navbar.module.scss"
import { Link } from "react-router-dom";
import "./AgregarProducto.scss";
//import CheckboxList from './checkboxlist';
import PinnedSubheaderList from './checkboxlist';
//import DragAreaPrincipal from './imagenprevious';
import DragArea from "./images.jsx/imagen1";
import { validateFormProducts } from "../../helpers/validateForm";
import { useForm } from '../../hooks/useFormProducts';
import productDataService from "../../services/product.service";


export const AgregarProducto = (props) => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 3,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
      }}
    />
  );

  const {
    stateForm,
    errors,
    handleInputChange,
    handleBlur,
    handleSubmit,
    handleCategories,
    handleFile, 
  } = useForm({
    product_name: '',
    price: '',
    categories: '',
    state: '',
    product_description: '',
    department_id: '',
    file: '',
  }, validateFormProducts, productDataService);

  const style = {
    fontWeight: "bold",
    color: "#dc3545"
  };


  return (
    <div>
      <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logob}>
          <Link to="/">SWAPPER</Link>
        </div>
        </nav>
      <ColoredLine color="black" />
      </div>
      <br />
      <div className="cajaimagen">
        <div className="grid-container">
          <div className="grid-item tall">
            <div className="columns">
              <div className="base-container1">
                <div className="header">Agregar producto</div>
                <div className="header2">Porfavor ingresa la información de tu producto</div>
                <div className="content">
                  <div className="form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="product_name"
                        placeholder="Título"
                        value={stateForm.product_name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        name="price"
                        placeholder="Precio"
                        value={stateForm.price}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />

                    </div>
                    <div className="caja">
                      <select name="state" value={stateForm.state} onChange={handleInputChange}>
                        <option >Estado</option>
                        <option value={"N"}>Nuevo</option>
                        <option value={"U"}>Usado</option>
                        <option value={"R"}>Reacondicionado</option>
                        <option value={"D"}>Dañado</option>
                      </select>
                    </div>
                    <div className="form-group2">
                      <textarea
                        name="product_description"
                        placeholder="Descripción"
                        value={stateForm.product_description}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        rows = "3"
                        cols = "52"
                      >

                      </textarea>
                    </div>

                    <span>Seleccione una o varias categorías</span>
                    <PinnedSubheaderList passCategoriesChange={handleCategories} />
                    <div className="caja">
                      <select name="department_id" value={stateForm.department_id} onChange={handleInputChange}>
                        <option >Seleccione la ubicacio del producto</option>
                        <option value={1}>Atlántida</option>
                        <option value={2}>Choluteca</option>
                        <option value={3}>Colón</option>
                        <option value={4}>Comayagua</option>
                        <option value={5}>Copán</option>
                        <option value={6}>Cortés</option>
                        <option value={7}>El Paraíso</option>
                        <option value={8}>Francisco Morazán</option>
                        <option value={9}>Gracias a Dios</option>
                        <option value={10}>Intibucá</option>
                        <option value={11}>Islas de la Bahía</option>
                        <option value={12}>La Paz</option>
                        <option value={13}>Lempira</option>
                        <option value={14}>Ocotepeque</option>
                        <option value={15}>Olancho</option>
                        <option value={16}>Santa Bárbara</option>
                        <option value={17}>Valle</option>
                        <option value={18}>Yoro </option>
                      </select>
                    </div>
                  </div>
                  <div className="footer">
                    <button type="button" className="btn">
                      Agregar producto
                    </button>
                    <Link to={"/perfilusuario"}>
                      <button type="button" className="btn2" onClick={handleSubmit}>
                        Cancelar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="base-container2">
                <div className="imageproduct-form" >
                  <div className="header2">Imagenes del producto</div>
                  <div className="form">
                    <DragArea passFile={handleFile}/>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="grid-item tall">

          </div>
          <div className="grid-item tall">


          </div>
        </div>
      </div>
    </div>

  );

}