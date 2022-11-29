import "../mantenimientos_forms/css/formPasos.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import React, { Component } from 'react';
import StepOne from "./formPasoUno.js";
import StepTwo from "./formPasoDos";
import SeleccionUnica from "./formSeleccionUnica";
import SeleccionMultiple from "./formSeleccionMultiple";
import MenuDesplegable from "./formMenuDesplegable";
import CorreoElectronico from "./formCorreoElectronico";
import CajaTextoAbierto from "./formCajaTextoAbierto";
import CalificacionEstrellas from "./formCalificacionEstrellas";
import { varIdTipoIndicador, varIdTipoEncuesta, varIdTipoMetrica, varIdTipoPerspectiva, varIdTipoContactoEncuesta, varIdTipoInteraccion } from './formPasoUno';


function App({ data, proceso, onClickProcesarPregunta, onClickProcesarRespuestasPregunta }) {
    //state for steps
    const [step, setstep] = useState(1);

    //state for form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: ""
    })

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

    const volverPasoDos = () => {
        setstep(2);
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const { value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }

    //console.log(varIdTipoIndicador + 'VALOR EN FORM PASOS')

    //PARA QUE MUESTRE FORM SELECCION UNICA
    const seleccionUnica = () => {
        setstep(4);
    };
    //PARA FORM SELECCION MULTIPLE
    const seleccionMultiple = () => {
        setstep(5);
    };

    //PARA FORM MENU DESPLEGABLE
    const menuDesplegable = () => {
        setstep(6);
    };

    //PARA FORM CORREO ELECTRONICO
    const correoElectronico = () => {
        setstep(7);
    };
    //const [pregunta, setPregunta] = useState('');
    //PARA FORM CAJA DE TEXTO ABIERTO
    const cajaTextoAbierto = () => {
        setstep(8);
        //setPregunta('Mi pregunta manual');
    };

    //PARA CALIFICACION ESTRELLAS
    const calificacionEstrellas = () => {
        setstep(9);
    };
    

    //const [pregunta, setPregunta] = useState(proceso == 2 ? data.pregunta : '');

    //console.log('Valor pregunta:');
    //console.log(pregunta);




    // javascript switch case to show different form in each step
    switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
            return (
                <div>
                    <Container>
                        <Row>
                            <Col md={{ span: 15, offset: 0 }} className="custom-margin">
                                <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 2:
            return (
                <div className="App">
                    <Container>
                        <Row>
                            <Col md={{ span: 15, offset: 0 }} className="custom-margin">
                                <StepTwo seleccionUnica={seleccionUnica} seleccionMultiple={seleccionMultiple}
                                    menuDesplegable={menuDesplegable} correoElectronico={correoElectronico} cajaTextoAbierto={cajaTextoAbierto} prevStep={prevStep} calificacionEstrellas={calificacionEstrellas} handleFormData={handleInputData} values={formData} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        case 4:
            return (
                <div className="App">
                    <Container>
                        <Row>
                            <Col md={{ span: 15, offset: 0 }} className="custom-margin">
                                <SeleccionUnica data={data} proceso={proceso} onClickProcesarPregunta={onClickProcesarPregunta} onClickProcesarRespuestasPregunta={onClickProcesarRespuestasPregunta}
                                    volverPasoDos={volverPasoDos} varIdTipoIndicador={varIdTipoIndicador} varIdTipoEncuesta={varIdTipoEncuesta}
                                    varIdTipoMetrica={varIdTipoMetrica} varIdTipoPerspectiva={varIdTipoPerspectiva} varIdTipoContactoEncuesta={varIdTipoContactoEncuesta}
                                    varIdTipoInteraccion={varIdTipoInteraccion}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        // Only formData is passed as prop to show the final value at form submit
        case 5:
            return (
                <div className="App">
                    <Container>
                        <Row>
                            <Col md={{ span: 15, offset: 0 }} className="custom-margin">
                                <SeleccionMultiple volverPasoDos={volverPasoDos } />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        case 6:
            return (
                <div className="App">
                    <Container>
                        <Row>
                            <Col md={{ span: 15, offset: 0 }} className="custom-margin">
                                <MenuDesplegable volverPasoDos={volverPasoDos} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        case 7:
            return (
                <div className="App">
                    <Container>
                        <Row>
                            <Col md={{ span: 15, offset: 0 }} className="custom-margin">
                                <CorreoElectronico data={data} proceso={proceso} onClickProcesarPregunta={onClickProcesarPregunta} onClickProcesarRespuestasPregunta={onClickProcesarRespuestasPregunta}
                                    volverPasoDos={volverPasoDos} varIdTipoIndicador={varIdTipoIndicador} varIdTipoEncuesta={varIdTipoEncuesta}
                                    varIdTipoMetrica={varIdTipoMetrica} varIdTipoPerspectiva={varIdTipoPerspectiva} varIdTipoContactoEncuesta={varIdTipoContactoEncuesta}
                                    varIdTipoInteraccion={varIdTipoInteraccion}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        case 8:
            return (
                <div className="App">
                    <Container>
                        <Row>
                            <Col md={{ span: 15, offset: 0 }} className="custom-margin">
                                <CajaTextoAbierto data={data} proceso={proceso} onClickProcesarPregunta={onClickProcesarPregunta} onClickProcesarRespuestasPregunta={onClickProcesarRespuestasPregunta}
                                    volverPasoDos={volverPasoDos} varIdTipoIndicador={varIdTipoIndicador} varIdTipoEncuesta={varIdTipoEncuesta}
                                    varIdTipoMetrica={varIdTipoMetrica} varIdTipoPerspectiva={varIdTipoPerspectiva} varIdTipoContactoEncuesta={varIdTipoContactoEncuesta}
                                    varIdTipoInteraccion={varIdTipoInteraccion}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        case 9:
            return (
                <div className="App">
                    <Container>
                        <Row>
                            <Col md={{ span: 15, offset: 0 }} className="custom-margin">
                                <CalificacionEstrellas data={data} proceso={proceso} onClickProcesarPregunta={onClickProcesarPregunta} onClickProcesarRespuestasPregunta={onClickProcesarRespuestasPregunta}
                                    volverPasoDos={volverPasoDos} varIdTipoIndicador={varIdTipoIndicador} varIdTipoEncuesta={varIdTipoEncuesta}
                                    varIdTipoMetrica={varIdTipoMetrica} varIdTipoPerspectiva={varIdTipoPerspectiva} varIdTipoContactoEncuesta={varIdTipoContactoEncuesta}
                                    varIdTipoInteraccion={varIdTipoInteraccion} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        // default case to show nothing 
        default:
            return (
                <div className="App">
                </div>
            );
    }
}

export default App;
