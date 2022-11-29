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
import { ObtenerPreguntas,ObtenerUltimoIdPreguntas } from '../../servicios/ServicioPreguntasEncuestas';


// creating functional component ans getting props from app.js and destucturing them
const SeleccionUnica = ({ data, proceso, onClickProcesarPregunta, onClickProcesarRespuestasPregunta, volverPasoDos, varIdTipoIndicador,
    varIdTipoEncuesta, varIdTipoMetrica, varIdTipoPerspectiva, varIdTipoContactoEncuesta, varIdTipoInteraccion }) => {

    const [pregunta, setPregunta] = useState(proceso == 2 ? data.pregunta : '')

    const [respuesta, setRespuesta] = useState(proceso == 2 ? data.respuesta : ''); //si el proceso es 1 es insertar, si es 2 es actualizar

    const [respuesta2, setRespuesta2] = useState(proceso == 2 ? data.respuesta : ''); //si el proceso es 1 es insertar, si es 2 es actualizar


    const [idTipoPregunta, setIdTipoPregunta] = useState(proceso == 2 ? data.idPreguntaEncuesta : '');
    const [listaIdTipoPregunta, setListaIdTipoPregunta] = useState([]);


    //const respuestaIdUltimaPreg = ObtenerUltimoIdPreguntas();

    //setListaIdUltimaPregunta = respuestaIdUltimaPreg;


    //console.log('Valores ID en lista:');
    //console.log(this.state.listaIdUltimaPregunta);


    

   // console.log(listaIdUltimaPregunta);

    //const respuestaId = ObtenerUltimoIdPreguntas();
    //listaIdUltimaPregunta = respuestaId;

    //console.log('Valores lista:');
    //console.log(listaIdUltimaPregunta);



    const [listaIdUltimaPregunta, setListaIdUltimaPregunta] = useState([]);


    useEffect(() => {

        ObtenerIdUltimaPregunta()
        ObtenerListaIdTipoPregunta();
    }, []);


    const ObtenerIdUltimaPregunta = async () => {
        const soc = await ObtenerUltimoIdPreguntas();

        console.log(soc);

        //let defecto = { idTipoPregunta: '', idPreguntaEncuesta: "ID" };
        //soc.push(defecto);
        setListaIdUltimaPregunta(soc.idPreguntaEncuesta);

    }



console.log('Valores ID en lista:');
console.log(listaIdUltimaPregunta);


    const ObtenerListaIdTipoPregunta = async () => {
        const soc = await ObtenerPreguntas();
        if (soc !== undefined) {
            if (proceso === 2) {
                setListaIdTipoPregunta(soc.sort((x, y) => { return parseInt(x.idTipoPregunta) === idTipoPregunta ? -1 : parseInt(y.idTipoPregunta) === idTipoPregunta ? 1 : 0; }));
            } else {
                let defecto = { idTipoPregunta: '', idPreguntaEncuesta: "ID" };
                soc.push(defecto);
                setListaIdTipoPregunta(soc.reverse());

            }
        }
    }

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
                idTipoPregunta: 1,
                idTipoContactoEncuesta: parseInt(varIdTipoContactoEncuesta),
                idTipoInteraccion: parseInt(varIdTipoInteraccion),
                estado: 1,
            };
            if (proceso === 2) { datos.idPreguntaEncuesta = data.idPreguntaEncuesta; };

            const result = onClickProcesarPregunta(datos); //se ejecuta la función

            setValidated(true);
            event.preventDefault();
        }


    }

    const onClickAceptarR = async (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) { //valida el form
            event.preventDefault();
            event.stopPropagation();
        } else {
            const datos2 = {
                IdPreguntaEncuesta: listaIdUltimaPregunta + 1,
                Respuesta: respuesta
            };

            if (proceso === 2) { datos2.idPreguntaEncuesta = data.idPreguntaEncuesta; };

            const result2 = onClickProcesarRespuestasPregunta(datos2);


            const datos3 = {
                IdPreguntaEncuesta: listaIdUltimaPregunta + 1,
                Respuesta: respuesta2
            };
            if (proceso === 2) { datos3.idPreguntaEncuesta = data.idPreguntaEncuesta; };

            const result3 = onClickProcesarRespuestasPregunta(datos3);

            setValidated(true);
            event.preventDefault();
        }
    }
    


    const onChangePreguntas = (e) => setPregunta(e.target.value);
    const onChangeRespuesta = (e) => setRespuesta(e.target.value);
    const onChangeRespuesta2 = (e) => setRespuesta2(e.target.value);
    const onChangeIdPregunta = (e) => setIdTipoPregunta(e.target.value);
        
    return (
        <div>
            <Card style={{ marginTop: 1 }}>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={onClickAceptar} >

                        <h4>Selección Única</h4>

                        <InputText id='txt-Pregunta' label='Pregunta:' type='text' placeholder='Ingrese la pregunta' value={pregunta}
                            onChange={onChangePreguntas} mensajeValidacion="Este campo es requerido"
                        />


                        <div style={{ display: "flex", justifyContent: "space-around" }}>

                            <Button className="primary" variant="primary" type="submit" size="sm">Guardar</Button>
                            <Button className="btnVolver" variant="secondary" onClick={volverPasoDos}>
                                Atrás
                            </Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>

            <Card style={{ marginTop: 1 }}>
                <Card.Body>
                    <Form onSubmit={onClickAceptarR} >

                        <h3>Respuestas</h3>

                        <br></br>

                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <input type="radio" />


                        <InputText id='txt-Pregunta' label='' type='text' placeholder='Ingresar Opción Respuesta' value={respuesta}
                            onChange={onChangeRespuesta} mensajeValidacion="Este campo es requerido"
                            />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-around" }}>

                            <input type="radio" />
                            <InputText id='txt-Pregunta' label='' type='text' placeholder='Ingresar Opción Respuesta' value={respuesta2}
                            onChange={onChangeRespuesta2} mensajeValidacion="Este campo es requerido"
                        />
                        </div>


                        <Button className="btnAgregarRespuesta" variant="primary" type="submit">
                             Agregar una nueva respuesta
                        </Button>

                        <br></br>
                        <br></br>

                        <div className='text-right'>
                            <Button className="primary" variant="primary" type="submit" size="sm">Guardar</Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SeleccionUnica;
