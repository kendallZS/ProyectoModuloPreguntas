import React, { useState, useEffect } from "react";
import { Form, Card, Button } from "react-bootstrap";
//import validator from "validator";
import { ObtenerTiposIndicadores } from '../../servicios/ServicioTipoIndicador';
import { ObtenerTiposMetricas } from '../../servicios/ServicioTipoMetrica';
import { ObtenerTiposEncuestas } from '../../servicios/ServicioTipoEncuesta';
import "../mantenimientos_forms/css/formPasos.css";
import { InputText } from '../components_forms/inputs'

import { InputSelect } from '../components_forms/inputs'


// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values, labelButton, data, proceso, onClickProcesarPregunta, mensaje }) => {
    //after form submit validating the form data using validator
    //const submitFormData = (e) => {
    //    e.preventDefault();

    //    //checking if value of first name and last name is empty show error else take to step 2
    //    //if (
    //    //    validator.isEmpty(values.firstName) ||
    //    //    validator.isEmpty(values.lastName)
    //    //) {
    //    //    setError(true);
    //    //} else {
    //    nextStep();
    //    //}
    //};
    const [idTipoIndicador, setIdTipoIndicador] = useState(proceso == 2 ? data.IdTipoIndicador : '');
    const [listaIndicador, setListaIndicador] = useState([]);
    const [tipoIndicador, setTipoIndicador] = useState(proceso == 2 ? data.tipoIndicador : '');
    //FORM INSERTAR PREGUNTA
    const [pregunta, setPregunta] = useState(proceso == 2 ? data.canal : ''); //si el proceso es 1 es insertar, si es 2 es actualizar

    const [idTipoPersona, setIdTipoPersona] = useState(proceso == 2 ? parseInt(data.IdTipoIndicador) : 1);

    const [listaTiposPersona, setlistaTiposPersona] = useState([]);


    

    //validación
    const [validated, setValidated] = useState(false);

    useEffect(() => {

        ObtenerListaTiposPersona();
    }, []);

    const ObtenerListaTiposPersona = async () => {
        const sect = await ObtenerTiposIndicadores();
        if (sect !== undefined) {
            if (proceso === 2) {
                setlistaTiposPersona(sect.sort((x, y) => { return parseInt(x.idTipoPersona) === idTipoPersona ? -1 : parseInt(y.idTipoPersona) === idTipoPersona ? 1 : 0; }));//Ordena el array colocando de primero el tipo de persona del actual socio
            }
            else {
                let defecto = { idTipoPersona: '', tipoIndicador: " --- Seleccione un tipo de persona  --- " };//Pone el valor por defecto en seleccionar el tipo de persona
                sect.push(defecto);
                setlistaTiposPersona(sect.reverse());
            }

        }

    }
    //creating error state for validation
    const [error, setError] = useState(false);

    

    //console.log('Mi indicador');
    //console.log(tipoIndicador + 'esta linea es el valor');
    


    //validación
    //const [validated, setValidated] = useState(false);

    const onClickAceptar = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) { //valida el form
            event.preventDefault();
            event.stopPropagation();
        } else { //si está correcto arma la variable datos
            const datos = {
                idPreguntaEncuesta: data.idPreguntaEncuesta,
                Pregunta: pregunta,
                idTipoIndicador: parseInt(idTipoPersona) 
            };
            if (proceso === 2) { datos.idPreguntaEncuesta = data.idPreguntaEncuesta; };

            const result = onClickProcesarPregunta(datos); //se ejecuta la función

        }
        setValidated(true);
        event.preventDefault();
    }
    console.log('Valor del Drop')
    console.log()
    const onChangeTipoIndicador = (e) => setIdTipoIndicador(e.target.value);
    const onChangeCanales = (e) => setPregunta(e.target.value);
    const onChangeIdTipoPersona = (e) => {
        setIdTipoPersona(e.target.value);
    } 

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <h6>Parametrizar Pregunta</h6>

                <br></br>

                <div style={{ display: "flex", justifyContent: "space-around" }}>

                    <InputSelect className="slct_lineas" controlId="slct_lineas" label="Tipo de Indicador" data={listaTiposPersona} value={idTipoPersona}
                        onChange={onChangeIdTipoPersona} optionValue="idTipoPersona" optionLabel="idTipoIndicador"
                        classGroup="form-lineas">
                    </InputSelect>

                    {/*<InputSelect className="slct_socios" controlId="slct_socios" label="Contacto Encuesta" data={listaSocio2} value={idSocio2}*/}
                    {/*    onChange={onChangeTipoIndicador} optionValue="idSocio2" optionLabel="tipoIndicador"*/}
                    {/*    classGroup="form-lineas">*/}
                    {/*</InputSelect>*/}

                </div>

                {/*<hr></hr>*/}
                {/*<div style={{ display: "flex", justifyContent: "space-around" }}>*/}

                {/*    <InputSelect className="slct_socios" controlId="slct_socios" label="Métrica" data={listaSocio2} value={idSocio2}*/}
                {/*        onChange={onChangeTipoIndicador} optionValue="idSocio2" optionLabel="tipoIndicador"*/}
                {/*        classGroup="form-lineas">*/}
                {/*    </InputSelect>*/}

                {/*    <InputSelect className="slct_socios" controlId="slct_socios" label="Tipo Interacción" data={listaSocio2} value={idSocio2}*/}
                {/*        onChange={onChangeTipoIndicador} optionValue="idSocio2" optionLabel="tipoIndicador"*/}
                {/*        classGroup="form-lineas">*/}
                {/*    </InputSelect>*/}

                {/*</div>*/}

                {/*<hr></hr>*/}
                {/*<div style={{ display: "flex", justifyContent: "space-around" }}>*/}

                {/*    <InputSelect className="slct_socios" controlId="slct_socios" label="Perspectiva" data={listaSocio2} value={idSocio2}*/}
                {/*        onChange={onChangeTipoIndicador} optionValue="idSocio2" optionLabel="tipoIndicador"*/}
                {/*        classGroup="form-lineas">*/}
                {/*    </InputSelect>*/}

                {/*    <InputSelect className="slct_socios" controlId="slct_socios" label="Tipo Encuesta" data={listaSocio2} value={idSocio2}*/}
                {/*        onChange={onChangeTipoIndicador} optionValue="idSocio2" optionLabel="tipoIndicador"*/}
                {/*        classGroup="form-lineas">*/}
                {/*    </InputSelect>*/}
                {/*</div>*/}


                <br></br>

            {/*</Form>*/}


            {/*<Form noValidate validated={validated} onSubmit={onClickAceptar}>*/}
                <Card style={{ marginTop: 10, textAlign: "left" }}>
                    <Card.Body>
                        <h3>Arriba esta la variable</h3>
                        {/*<h3>{variable}</h3>*/}

                        <InputText id='txt-nombre' label='Pregunta:' type='text' placeholder='Ingrese la Pregunta' value={pregunta}
                            onChange={onChangeCanales} mensajeValidacion="La Pregunta es requerida" />

                        <Button className="btnAgregarRespuesta" variant="primary" type="submit">
                            Agregar una nueva respuesta
                        </Button>

                        <br></br>
                        <br></br>

                        {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                        <div className='text-right'>
                            <Button className="primary" variant="primary" type="submit" size="sm">Guardar</Button>
                        </div>
                        {/*<Button variant="primary" type="submit">*/}
                        {/*    Guardar*/}
                        {/*</Button>*/}

                    </Card.Body>
                </Card>
            </Form>

        </>
    );
};

export default StepOne;
