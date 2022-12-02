import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

const ActionsPreparación = () => {

    const [upDownActions, SetUpDownActions] = useState(false)

    const upDown = () => {
        SetUpDownActions(!upDownActions)
    }

    return (
        <Dropdown isOpen={upDownActions} toggle={upDown} direction='down'>
            <DropdownToggle caret className='actions-button'>
                Acciones
            </DropdownToggle>

            <DropdownMenu style={{'width': '70%'}}>
                <DropdownItem>Editar</DropdownItem>
                <DropdownItem>Almacenar</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default ActionsPreparación;