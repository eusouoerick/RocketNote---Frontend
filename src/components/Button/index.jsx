import { Container } from './style'

export function Button({title, loading = false, ...rest }) {
    return(
        <Container 
        disabled={loading}
        type="button" 
        {...rest}
        >
            {title}
        </Container>
    )
}