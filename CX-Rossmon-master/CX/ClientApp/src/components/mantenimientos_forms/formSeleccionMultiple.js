import React from "react";
import { Card, Button } from "react-bootstrap";
import { InputText } from '../components_forms/inputs'

const SeleccionMultiple = ({ volverPasoDos }) => {

    return (
        <>
            <Card style={{ marginTop: 1, textAlign: "left" }}>
                <Card.Body>

                    <h4>Selección Múltiple</h4>
                    <InputText id='txt-nombre' label='Pregunta:' type='text' placeholder='Ingrese la Pregunta' />

                    <label>Respuesta(s)</label>
                    <InputText id='txt-nombre' label='' type='text' placeholder='Ingrese Respuesta' />
                    {/*<InputText id='txt-nombre' label='' type='text' placeholder='Ingrese Respuesta' />*/}

                    <Button className="btnAgregarRespuesta" variant="primary" type="submit">
                        Agregar una nueva respuesta
                    </Button>

                    <br></br>
                    <br></br>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>

                        <Button className="primary" variant="primary" type="submit" size="sm">Guardar</Button>
                        <Button className="btnVolver" variant="secondary" onClick={volverPasoDos}>
                            Atrás
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};
export default SeleccionMultiple;
