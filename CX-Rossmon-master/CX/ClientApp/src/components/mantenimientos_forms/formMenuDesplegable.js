import React, { useState, useEffect } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { ObtenerTiposIndicadores } from '../../servicios/ServicioTipoIndicador';
import { ObtenerTipoContactoEncuesta } from '../../servicios/ServicioTipoContactoEncuesta';
import { ObtenerTiposEncuestas } from '../../servicios/ServicioTipoEncuesta';
import { ObtenerTiposMetricas } from '../../servicios/ServicioTipoMetrica';
import { ObtenerTipoInteraccion } from '../../servicios/ServicioTipoInteraccion';
import { ObtenerTipoPerspectivas } from '../../servicios/ServicioTipoPerspectivas';
import { InputSelect } from '../components_forms/inputs'
import "../mantenimientos_forms/css/formPasos.css";
import { InputText } from '../components_forms/inputs'


// creating functional component ans getting props from app.js and destucturing them
const MenuDesplegable = ({ volverPasoDos }) => {

    // after form submit validating the form data using validator
        
    return (
        <div>
            <Card style={{ marginTop: 1 }}>
                <Card.Body>
                    <Form >

                        <h4>Menú Desplegable</h4>

                        <InputText id='txt-nombre' label='Pregunta:' type='text' placeholder='Ingrese la Pregunta' />

                        <label>Opciones:</label>
                        <br></br>

                        <select>
                            <option value="">--Please choose an option--</option>
                          </select>

                        <br></br>
                        <br></br>


                        {/*<InputSelect className="slct_socios" controlId="slct_socios" label="Tipo Contacto Encuesta" data={listaTipoContactoEncuesta} value={idTipoContactoEncuesta}*/}
                        {/*        onChange={onChangeTipoContactoEncuesta} optionValue="idTipoContactoEncuesta" optionLabel="tipoContactoEncuesta"*/}
                        {/*        classGroup="form-lineas"></InputSelect>*/}


                        <Button className="btnAgregarRespuesta" variant="primary" type="submit">
                             Añadir nueva opción
                        </Button>

                        <br></br>
                        <br></br>

                        <div style={{ display: "flex", justifyContent: "space-around" }}>

                            <Button className="primary" variant="primary" type="submit" size="sm">Guardar</Button>
                            <Button className="btnVolver" variant="secondary" onClick={volverPasoDos}>
                                Atrás
                            </Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MenuDesplegable;
