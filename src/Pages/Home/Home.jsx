import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-grid-system';
//import Production from '../../Components/production/production';
import ProdFunc from '../../Components/production/prodfunc';
//import Quality from '../../Components/quality/quality';
import QualFunc from '../../Components/quality/qualfunc';
import OEE from '../../Components/oee/oee';
//import Peoplep from '../../Components/peoplep/peoplep';

export default function Home() {



    return (

        <div>
            
       <Container fluid>
       <Row  align="center" justify="center" direction="row" style={{ height: '420px' }} gutterWidth={30} debug>
        
         <Col xs='content' debug>
         <OEE />
         </Col>

         <Col  xs='content' debug>
         <QualFunc />
         </Col>
         </Row>

        <Row align="center" justify="center" direction="row" style={{ height: '420px' }} gutterWidth={30} debug>
        <Col  xs='content' debug>
        <ProdFunc />
        </Col>

        {/* <Col  xs='content' debug>
         <Peoplep /> */}
        {/* </Col> */}

       </Row> 

       </Container>  
        </div>

    )
}