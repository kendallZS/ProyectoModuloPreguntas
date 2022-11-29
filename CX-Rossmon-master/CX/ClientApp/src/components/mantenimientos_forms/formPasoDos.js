import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import "../mantenimientos_forms/css/formPasos.css";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ seleccionUnica, seleccionMultiple, menuDesplegable, correoElectronico, cajaTextoAbierto, calificacionEstrellas, prevStep }) => {
    //creating error state for validation
    const [error, setError] = useState(false);

    //export const variables = async () => {
    //    var miVariable = 1;
    //    return miVariable;

    //}

    //after form submit validating the form data using validator
    //const submitFormData = (e) => {
    //    e.preventDefault();

    //    mostrarSeleccionUnica();

    //};
    //console.log('valor variable abajo:');
    //console.log(su);

    return (
        <>
            <Form className="main-frm">
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <Button className="btnVolver" variant="secondary" onClick={prevStep}>
                         Retroceder
                    </Button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <br></br>

                <h6>Opciones</h6>

                <div className="cont-button" style={{ display: "flex", justifyContent: "space-around" }}>
                    
                    <Button onClick={seleccionUnica} className="button" >
                        Seleccionar Una Respuesta
                    </Button>

                    <Button className="button" onClick={seleccionMultiple}>
                        Seleccionar Varias Respuestas
                    </Button>
                </div>
                
                <div className="cont-button" style={{ display: "flex", justifyContent: "space-around" }}>
                    <Button className="button" onClick={menuDesplegable}>
                        Menú Desplegable  
                    </Button>
                    
                    <Button className="button" onClick={correoElectronico} >
                        Correo Electrónico
                    </Button>
                </div>
                
                <div className="cont-button" style={{ display: "flex", justifyContent: "space-around" }}>
                    <Button className="button" onClick={cajaTextoAbierto} >
                        Caja de Texto Abierto
                    </Button>
                    
                    <Button className="button" onClick={calificacionEstrellas}>
                        Calificación de Estrellas
                    </Button>
                </div>

                <br></br>

                
            </Form>
        </>
    );
};

export default StepTwo;
