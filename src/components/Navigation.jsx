import { Container, Navbar } from 'react-bootstrap';

const navigation = () => {
    return (
        <Container>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Admin</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export default navigation;