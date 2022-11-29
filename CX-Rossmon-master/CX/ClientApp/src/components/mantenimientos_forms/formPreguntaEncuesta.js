import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { InputText } from '../components_forms/inputs'
import Select from 'react-select'
import { InputSelect } from '../components_forms/inputs'

import { ObtenerTiposIndicadores } from '../../servicios/ServicioTipoIndicador';
import { ObtenerTiposMetricas } from '../../servicios/ServicioTipoMetrica';
import { ObtenerTiposEncuestas } from '../../servicios/ServicioTipoEncuesta';

const Formulario = ({ labelButton, data, proceso, onClickProcesarPregunta, mensaje }) => {

    //variables

    const [pregunta, setPregunta] = useState(proceso == 2 ? data.pregunta : ''); //si el proceso es 1 es insertar, si es 2 es actualizar
    const [idTipoIndicador, setIdTipoIndicador] = useState(proceso == 2 ? data.idTipoIndicador : '');
    const [idTipoMetrica, setIdTipoMetrica] = useState(proceso == 2 ? data.idTipoMetrica : '');
    const [idTipoEncuesta, setIdTipoEncuesta] = useState(proceso == 2 ? data.idTipoEncuesta : '');


    const [idSocio, setSocio] = useState(proceso == 2 ? data.idSocio : '');
    const [listaSocio, setListaSocio] = useState([]);



    const [idSocio2, setSocio2] = useState(proceso == 2 ? data.IdTipoIndicador : '');
    const [listaSocio2, setListaSocio2] = useState([]);
    const [tipoIndicador, setTipoIndicador] = useState(proceso == 2 ? data.tipoIndicador : '');




    const [idSocio3, setSocio3] = useState(proceso == 2 ? data.idTipoMetrica : '');
    const [listaMetrica, setListaMetrica] = useState([]);
    const [Descripcion, setDescripcion] = useState(proceso == 2 ? data.descripcion : '');


    const [idSocio4, setSocio4] = useState(proceso == 2 ? data.tipoEncuesta : '');
    const [listaTipoEncuesta, setListaTipoEncuesta] = useState([]);
    const [TipoEncuesta, setTipoEncuesta] = useState(proceso == 2 ? data.tipoEncuesta : '');

    //validación
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        ObtenerListaEncuesta();
        ObtenerListaMetrica();
        ObtenerListaSocio2();
    }, []);

    const ObtenerListaSocio2 = async () => {
        const soc2 = await ObtenerTiposIndicadores();
        if (soc2 !== undefined) {
            if (proceso === 2) {
                setListaSocio2(soc2.sort((x, y) => { return parseInt(x.idSocio2) === idSocio2 ? -1 : parseInt(y.idSocio2) === idSocio2 ? 1 : 0; }));
            } else {
                let defecto = { idSocio2: '', tipoIndicador: "-- Seleccione un Socio --" };
                soc2.push(defecto);
                setListaSocio2(soc2.reverse());
            }
        }
    }

    const ObtenerListaMetrica = async () => {
        const met = await ObtenerTiposMetricas();
        if (met !== undefined) {
            if (proceso === 2) {
                setListaMetrica(met.sort((x, y) => { return parseInt(x.idSocio3) === idSocio3 ? -1 : parseInt(y.idSocio3) === idSocio3 ? 1 : 0; }));
            } else {
                let defecto = { idSocio3: '', descripcion: "-- Seleccione una Descripción --" };
                met.push(defecto);
                setListaMetrica(met.reverse());
            }
        }
    }


    const ObtenerListaEncuesta = async () => {
        const met = await ObtenerTiposEncuestas();
        if (met !== undefined) {
            if (proceso === 2) {
                setListaTipoEncuesta(met.sort((x, y) => { return parseInt(x.idSocio4) === idSocio4 ? -1 : parseInt(y.idSocio4) === idSocio4 ? 1 : 0; }));
            } else {
                let defecto = { idSocio4: '', tipoEncuesta: "-- Seleccione Tipo Encuesta --" };
                met.push(defecto);
                setListaTipoEncuesta(met.reverse());
            }
        }
    }



    const onClickAceptar = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) { //valida el form
            event.preventDefault();
            event.stopPropagation();
        } else { //si está correcto arma la variable datos
            const datos = {
                idPreguntaEncuesta: data.idPreguntaEncuesta,
                Pregunta: pregunta,
                idTipoIndicador: parseInt(idTipoIndicador),
                idTipoMetrica: parseInt(idTipoMetrica),
                idTipoEncuesta: parseInt(idTipoEncuesta),
                tipoIndicador: tipoIndicador,
                descripcion: Descripcion,
                tipoEncuesta: TipoEncuesta
                //IdTipoIndicador: parseInt(IdTipoIndicador)
            };
            if (proceso === 2) { datos.idPreguntaEncuesta = data.idPreguntaEncuesta; };

            const result = onClickProcesarPregunta(datos); //se ejecuta la función
            console.log(result);
        }
        setValidated(true);
        event.preventDefault();
    }

    const onChangePreguntas = (e) => setPregunta(e.target.value);
    const onChangeIdTipoIndicador = (e) => setIdTipoIndicador(e.target.value);
    //const onChangeIdTipoMetrica = (e) => setIdTipoMetrica(e.target.value);
    const onChangeIdTipoEncuesta = (e) => setIdTipoEncuesta(e.target.value);


    //const onChangeSocio = (e) => setSocio(e.target.value);  

    const onChangeTipoIndicador = (e) => setTipoIndicador(e.target.value);
    const onChangeDescripcion = (e) => setDescripcion(e.target.value);
    const onChangeTipoEncuesta = (e) => setTipoEncuesta(e.target.value);


    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <InputText id='txt-Pregunta' label='Pregunta:' type='text' placeholder='Ingrese la pregunta' value={pregunta}
                    onChange={onChangePreguntas} mensajeValidacion="Este campo es requerido" />

                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}



                <InputSelect className="slct_socios" controlId="slct_socios" label="Tipo Indicador" data={listaSocio2} value={idSocio2}
                    onChange={onChangeTipoIndicador} optionValue="idSocio2" optionLabel="tipoIndicador"
                    classGroup="form-lineas"></InputSelect>




                <InputSelect className="slct_metrica" controlId="slct_metrica" label="Tipo Métrica" data={listaMetrica} value={idSocio3}
                    onChange={onChangeDescripcion} optionValue="idSocio3" optionLabel="descripcion"
                    classGroup="form-lineas"></InputSelect>





                <InputSelect className="slct_TipoEncuesta" controlId="slct_TipoEncuesta" label="Tipo Encuesta" data={listaTipoEncuesta} value={idSocio4}
                    onChange={onChangeTipoEncuesta} optionValue="idSocio4" optionLabel="tipoEncuesta"
                    classGroup="form-lineas"></InputSelect>




                {/*<InputText id='txt-tipoIndicador' label='Tipo Indicador:' type='text' placeholder='Ingrese el indicador' value={idTipoIndicador}*/}
                {/*    onChange={onChangeIdTipoIndicador} mensajeValidacion="Este campo es requerido" />*/}

                {/*{mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}*/}

                {/*<InputText id='txt-tipoMetrica' label='Tipo Métrica:' type='text' placeholder='Ingrese la Metrica' value={idTipoMetrica}*/}
                {/*    onChange={onChangeIdTipoMetrica} mensajeValidacion="Este campo es requerido" />*/}

                {/*{mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}*/}

                {/*<InputText id='txt-tipoEncuesta' label='Tipo Encuesta:' type='text' placeholder='Ingrese la Encuesta' value={idTipoEncuesta}*/}
                {/*    onChange={onChangeIdTipoEncuesta} mensajeValidacion="Este campo es requerido" />*/}

                {/*{mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}*/}

                <div className='text-right'>
                    <Button className="primary" variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>
            </Form>

        </>
    )
}

export default Formulario