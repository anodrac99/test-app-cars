import React, {useState} from 'react';
import info from '../preparacion.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import ActionsPreparación from './ActionsPreparación';
import Loader  from "./Loader.jsx";
import Controllers from './Controllers';


const Preparacion = () => {

    const [data, setData] = useState(info)
    //start loading
    const [loading, setLoading] = useState(true)

    //finish loading
    setTimeout(() => {
        setData(info)
        setLoading(false)
    }, "1000")

    const [currentPage, SetCurrentPage] = useState(0)
    const [itemPerPage, SetItemPerPage] = useState(5)
    const [totalPages, SetTotalPages] = useState(Math.floor(data.length/itemPerPage))
    //initial limit of items
    const [item, SetItem] = useState([...data].splice(0, itemPerPage))

    //state for filter ID
    const [stateId, SetStateId] = useState(false)

    const changeIdfilter = () => {
        SetStateId(!stateId)
        stateId ? ordenarASC() : ordenarDESC()
    }

    //modify limit of items
    const setLimit = (value) => {
        SetItemPerPage(value)
        SetItem([...info].splice(0, value))
        SetTotalPages(Math.ceil(data.length/itemPerPage));
    }
    
    //pagination controll
    const nextPage = () => {
        const totalElementos = data.length

        const next = currentPage +1

        const firstIndex = next * itemPerPage

        if (firstIndex >= totalElementos) return

        SetItem([...data].splice(firstIndex, itemPerPage))

        SetCurrentPage(next)
    }

    const prevPage = () => {
        const prev = currentPage -1

        if(prev < 0) return

        const firstIndex = prev * itemPerPage

        SetItem([...data].splice(firstIndex, itemPerPage))

        SetCurrentPage(prev)
    }

    //filter id
    const ordenarASC = () => {
        data.sort(function(a,b){
            return a.id - b.id
        })
        return SetItem(data)
    }
    
    const ordenarDESC = () => {
        data.sort(function(a,b){
            return b.id - a.id
        })
        return SetItem(data);
    }

    return (
        <div>
            <section className='principal-container'>
            {
                loading && <Loader /> 
            }
            <table className='table table-striped table-borderless text-center'>
                <thead>
                    <tr style={{backgroundColor: '#f2f3f7'}}>
                        <th><input type="checkbox" name="" id="" /></th>
                        <th onClick={changeIdfilter}>ID <span><i className="fa-solid fa-up-down"></i></span></th>
                        <th>Placa <span><i className="fa-solid fa-up-down"></i></span></th>
                        <th>Marca <span><i className="fa-solid fa-up-down"></i></span></th>
                        <th>Modelo <span><i className="fa-solid fa-up-down"></i></span></th>
                        <th>Kilometraje <span><i className="fa-solid fa-up-down"></i></span></th>
                        <th>Transmisión <span><i className="fa-solid fa-up-down"></i></span></th>
                        <th>tipo <span><i className="fa-solid fa-up-down"></i></span></th>
                        <th>precio de compra <span><i className="fa-solid fa-up-down"></i></span></th>
                        <th>proviniencia <span><i className="fa-solid fa-up-down"></i></span></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map(car => (
                            <tr key={car.id}>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>{car.id}</td>
                                <td>{car.placa}</td>
                                <td>{car.marca}</td>
                                <td>{car.modelo}</td>
                                <td>{car.kilometraje}</td>
                                <td>{car.transmision}</td>
                                <td>{car.tipo}</td>
                                <td>{car.precioDeCompra}</td>
                                <td><button className='button-proviniencia'>NUEVO <i class="fa-solid fa-eye"></i></button></td>
                                <td>
                                    <ActionsPreparación />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
        <Controllers 
        nextPage={nextPage} 
        prevPage={prevPage} 
        SetCurrentPage={SetCurrentPage} 
        currentPage={currentPage}
        itemPerPage={itemPerPage}
        setLimit={setLimit}
        totalPages={totalPages}
        />
        </div>
    );
};

export default Preparacion;