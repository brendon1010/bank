import { Container, Col, Row } from 'react-bootstrap';


export default function NavBar(){
    return(
        //create top bar that doesnt have any function for style purposes
        <Container>
            <Row>
                <Col className='topItem'><img className='icon' src='https://icon-library.com/images/more-options-icon/more-options-icon-10.jpg' alt='otions'/><span className='appName'><span style={{color: 'blue'}}>Bank</span><span style={{color: 'green'}}>App</span></span></Col>
                <Col className='topItem'><span className='bord'><img className='icon' src='https://cdn-icons-png.flaticon.com/512/4827/4827568.png' alt='pay'/>Payments</span></Col>
                <Col className='topItem'><span className='bord'><img className='icon' src='https://static.thenounproject.com/png/1783867-200.png' alt='balance'/><span className='select'>balance</span></span></Col>
                <Col className='topItem'><span className='bord'><img className='icon' src='https://static.vecteezy.com/system/resources/previews/019/787/046/original/wallet-icon-on-transparent-background-free-png.png' alt='wallet'/>Wallet</span></Col>
                <Col className='topItem'><span className='bord'><img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png' alt='settings'/>Settings</span></Col>
                <Col className='topItem'><span><span className='bord'><img className='icon' src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png' alt='search'/>Search</span></span></Col>
            </Row>
        </Container>
    )
}