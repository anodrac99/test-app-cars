import React, { useState } from 'react';
import '../assets/styles/controllers.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import { useNavigate } from 'react-router-dom';

const Controllers = ({nextPage, prevPage, setLimit, SetCurrentPage, currentPage, itemPerPage, totalPages}) => {

    const navigate = useNavigate()

    const [ actionsState, SetActionState ] = useState(false)

    const openDownActions = () => {
        SetActionState(!actionsState)
    }


    return (
        <section className='controllers-container'>
            <div className='controllers-section'>
                <div className='search-container'>
                    <input type="text" placeholder='Busqueda por coincidencia' />
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className='controllers-section'>
                <div className='info-pagination' >
                    <span>Resultados</span>
                    <input onChange={e => setLimit(e.target.value)} type="text" value={itemPerPage}/>
                </div>
            </div>
            <div className='controllers-section pagination-controll'>
                <button onClick={() => prevPage()}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className='input-page'>
                    <input onChange={e => SetCurrentPage(e.target.value)} type="text" name="" id="" value={currentPage}/>
                </div>
                <span>De </span>
                <span>{totalPages}</span>
                <button onClick={() => nextPage()}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className='controllers-section'>
                <Dropdown style={{'width': '100%', 'textAlign': 'center'}} isOpen={actionsState} toggle={openDownActions} direction='up'>
                    <DropdownToggle caret className='actions-button'>
                        Acciones
                    </DropdownToggle>

                    <DropdownMenu style={{'width': '70%'}}>
                        <DropdownItem onClick={()=> navigate('/preparacion')}>Cargue masivo</DropdownItem>
                        <DropdownItem>Nuevo registro</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </section>
    );
};

export default Controllers;