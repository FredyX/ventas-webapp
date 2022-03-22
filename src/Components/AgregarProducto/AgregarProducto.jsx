import React from 'react'
import { Link } from "react-router-dom";
import "./AgregarProducto.scss";
import CheckboxList from './checkboxlist';
import PinnedSubheaderList from './checkboxlist';
import DragAreaPrincipal from './imagenprevious';
import DragArea from "./images.jsx/imagen1";
import { validateForm } from "../../helpers/validateForm";
import { useForm } from '../../hooks/useFormProducts';
import productDataService from "../../services/product.service";


export const AgregarProducto = (props) => {
  const {
    stateForm,
    errors,
    handleInputChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    title: '',
    price: '',
    category: '',
    state: '',
    description: '',
    department_id: '',
    imagen: '',
  }, validateForm, productDataService);

  const style = {
    fontWeight: "bold",
    color: "#dc3545"
  };


  return (
    <div>
      <br />
      <div className="cajaimagen">
        <div class="grid-container">
          <div class="grid-item tall">
            <div class="columns">
              <div className="base-container1">
                <div className="header">Agregar producto</div>
                <div className="header2">Porfavor ingresa la información de tu producto</div>
                <div className="content">
                  <div className="form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="title"
                        placeholder="Título"
                        value={stateForm.title}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {
                        errors.title &&
                        <p style={style}> {errors.title}</p>
                      }
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="price"
                        placeholder="Precio"
                        value={stateForm.price}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {
                        errors.price &&
                        <p style={style}> {errors.price}</p>
                      }
                    </div>
                    <div className="caja">
                      <select name="state" value={stateForm.state} onChange={handleInputChange}>
                        <option >Estado</option>
                        <option value={1}>Nuevo</option>
                        <option value={2}>Usado</option>
                      </select>
                    </div>
                    <div className="form-group2">
                      <input
                        type="text"
                        name="description"
                        placeholder="Descripción"
                        value={stateForm.description}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {
                        errors.description &&
                        <p style={style}> {errors.description}</p>
                      }
                    </div>

                    <span>Seleccione una o varias categorías</span>
                    <PinnedSubheaderList />
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
                    <button type="button" className="btn" onClick={handleSubmit}>
                      Agregar producto
                    </button>
                    <Link to={"/"}>
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
                    <DragArea />
                  </div>
                </div>
              </div>


            </div>

          </div>
          <div class="grid-item tall">

          </div>
          <div class="grid-item tall">


          </div>
        </div>
      </div>
    </div>

  );

}