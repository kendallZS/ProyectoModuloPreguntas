import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { InputText } from '../components_forms/inputs';
import { ObtenerPreguntas, ObtenerUltimoIdPreguntas } from '../../servicios/ServicioPreguntasEncuestas';
import { InputSelect } from '../components_forms/inputs'

const CorreoElectronico = ({ data, proceso, onClickProcesarPregunta, onClickProcesarRespuestasPregunta, volverPasoDos, varIdTipoIndicador,
    varIdTipoEncuesta, varIdTipoMetrica, varIdTipoPerspectiva, varIdTipoContactoEncuesta, varIdTipoInteraccion }) => {

    const [pregunta, setPregunta] = useState(proceso == 2 ? data.pregunta : ''); //si el proceso es 1 es insertar, si es 2 es actualizar
    const [respuesta, setRespuesta] = useState(proceso == 2 ? data.respuesta : ''); //si el proceso es 1 es insertar, si es 2 es actualizar

    //const listaIdUltimaPregunta = [];

    //const getId = ObtenerUltimoIdPreguntas();

    //listaIdUltimaPregunta.push(getId);


    //var MiId = parseInt(idTipoPregunta) + 1;
    console.log(varIdTipoIndicador + ' El VALOR QUE LLEGÓ ');


    //validación
    const [validated, setValidated] = useState(false);

    const onClickAceptar = async (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) { //valida el form
            event.preventDefault();
            event.stopPropagation();
        } else { //si está correcto arma la variable datos
            const datos = {
                idPreguntaEncuesta: data.idPreguntaEncuesta,
                Pregunta: pregunta,
                idTipoEncuesta: parseInt(varIdTipoEncuesta),
                idTipoMetrica: parseInt(varIdTipoMetrica),
                idTipoPerspectiva: parseInt(varIdTipoPerspectiva),
                idTipoIndicador: parseInt(varIdTipoIndicador),
                idTipoPregunta: 3,
                idTipoContactoEncuesta: parseInt(varIdTipoContactoEncuesta),
                idTipoInteraccion: parseInt(varIdTipoInteraccion),
                estado: 1,
            };
            if (proceso === 2) { datos.idPreguntaEncuesta = data.idPreguntaEncuesta; };

            const result = onClickProcesarPregunta(datos); //se ejecuta la función

            //const datos2 = {
            //    IdPreguntaEncuesta: parseInt(MiId),
            //    Respuesta: "mi_correo55@gmail.com"
            //};
            //if (proceso === 2) { datos2.idPreguntaEncuesta = data.idPreguntaEncuesta; };

            //const result2 = onClickProcesarRespuestasPregunta(datos2);
        }
        setValidated(true);
        event.preventDefault();
    }


    const onChangePreguntas = (e) => setPregunta(e.target.value);
    const onChangeRespuesta = (e) => setRespuesta(e.target.value);

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>

            <Card style={{ marginTop: 1, textAlign: "left" }}>
                <Card.Body>

                    <h4>Correo Electrónico</h4>

                    <br></br>
                        {/*<label>{MiId }</label>*/}
                        <InputText id='txt-Pregunta' label='Pregunta:' type='text' placeholder='Ingrese la pregunta' value={pregunta}
                            onChange={onChangePreguntas} mensajeValidacion="Este campo es requerido"
                        />
                        

                        <InputText id='txt-Pregunta' label='' type='text' placeholder='' value={'mi_correo55@gmail.com'}
                            onChange={onChangeRespuesta} mensajeValidacion="Este campo es requerido"
                        />

                    <br></br>

                        <div style={{ display: "flex", justifyContent: "space-around" }}>

                            <Button className="primary" variant="primary" type="submit" size="sm">Guardar</Button>
                            {/*<Button className="primary" variant="primary" type="submit" size="sm">Listo</Button>*/}

                            <Button className="btnVolver" variant="secondary" onClick={volverPasoDos}>
                                Atrás
                            </Button>
                        </div> 
                </Card.Body>
                </Card>
            </Form>



        </>
    );
};
export default CorreoElectronico;
