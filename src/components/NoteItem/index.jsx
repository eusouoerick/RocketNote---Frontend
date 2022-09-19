import { Container } from './style'
import { FiPlus, FiX } from 'react-icons/fi'

export function NoteItem({ isNew, value, onClick, ...rest}) {
    return(
        <Container isNew={isNew}>
            <input 
            value={value}
            readOnly={!isNew}
            type="text" 
            {...rest}
            />

            <button
            type="button"
            onClick={onClick}
            >
            {isNew ? <FiPlus /> : <FiX />}
            </button>

        </Container>
    )
}