import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function CalculoCotizacor() {

    const [PrecioCPU, setPrecioCPU] = useState(0); //sueldo bruto
    const [PrecioGPU, setPrecioGPU] = useState(0); // gratificacion legal
    const [CantidadModulosRam, setCantidadModulosRam] = useState(0); // bono colacion
    const [Garantia, setGarantia] = useState(""); //tipo prevision
    const [Descuento, setDescuento] = useState(0);

    // variables bruto

    const porcentajeIva = 0.19;
    const precioGarantia = Garantia == 1 ? 10000 : 0;

    // variables de resultado
    const resultadoSubtotal = parseInt(PrecioCPU) + (parseInt(PrecioGPU) * parseInt(CantidadModulosRam));
    const resultadoDescuento = parseInt(Descuento);
    const resultadoIva = ( (resultadoSubtotal + precioGarantia) - resultadoDescuento) * porcentajeIva;
    const resultadoTotal = ( (resultadoSubtotal + precioGarantia) - resultadoDescuento) + resultadoIva;

   

 
    return (

        <div>
            <div className='row mt-3'>
                <div className='col-lg-12 text-center bg-secondary text-white rounded p-3'>
                    <h3>Demo cálculo de remuneraciones</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='PrecioCPU'>Precio de CPU</label>
                        <input className='form-control' id='PrecioCPU' name='PrecioCPU' placeholder='1000000' value={PrecioCPU} onChange={(e) => setPrecioCPU(e.target.value)} ></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='PrecioGPU'>Precio de GPU (por módulo) </label>
                        <input className='form-control' id='PrecioGPU' name='PrecioGPU' placeholder='1000000' value={PrecioGPU} onChange={(e) => setPrecioGPU(e.target.value)} ></input>
                    </div>
                    
                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='CantidadModulosRam'>Precio de GPU (por módulo) </label>
                        <input className='form-control' id='CantidadModulosRam' name='CantidadModulosRam' placeholder='1000000' value={CantidadModulosRam} onChange={(e) => setCantidadModulosRam(e.target.value)} ></input>
                    </div>

                     <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='Garantia'>Seleccione si quiere Garantía</label>
                        <select className='form-select' id="Garantia" name='Garantia' value={Garantia} onChange={(e) => setGarantia(e.target.value)}>
                            <option>Seleccione Garantia</option>
                            <option value={1}>si</option>
                            <option value={2}>no</option>
                        </select>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='Descuento'> Descuento </label>
                        <input className='form-control' id='Descuento' name='Descuento' placeholder='1000000' value={Descuento} onChange={(e) => setDescuento(e.target.value)} ></input>
                    </div>

                    
                </div>

                <div className='col-lg-6'>
                    <h3 className='my-3'>Resultados</h3>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Concepto</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Subtotal</td>
                                <td>{resultadoSubtotal.toLocaleString()} </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>iva ({(porcentajeIva * 100).toFixed(1)}%)</td>
                                <td>{resultadoIva.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Garantia </td>
                                <td>{precioGarantia.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Descuento</td>
                                <td>{resultadoDescuento.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Total</td>
                                <td>{resultadoTotal.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
            </div>
        </div>

    );

}

export default CalculoCotizacor;