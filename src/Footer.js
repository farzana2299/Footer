import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <div className='ft fixed-bottom pt-5 pb-3'>
                <Row className='pb-5'>
                    <Col lg={3} md={6} sm={6} xs={12} className='order-2 order-md-1 order-sm-1'>
                        <div className='text-start ps-4 pt-3 line-spacing-mobile'>
                            <h3>Kontakt</h3>
                            <p className='fcp2'>Egestam Mattsson El & Data AB</p>
                            <p className='fcp2'>Ridspögatan 15a</p>
                            <p className='fcp2'>213 77 Malmö</p>
                            <p className='fcp3'>Tel: 040-6170166</p>
                            <p className='fcp3'>E-post:info@emeldata.se </p>
                            <p className='fcp3 privacypolicy-align'>Integritetspolicy</p>
                        </div>
                        <hr className='hr-in-desktop'/>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} className='secrow text-start order-3 order-md-3 order-sm-2'>
                        <Row style={{ fontSize: '120%', position: 'relative', top: '3%' }} className='ps-4 pt-5'>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <div className='w-100 conatiner second-paragraph'>
                                    <b><p>Meny</p></b>
                                    <p>Hem</p>
                                    <p>Hållbarhet</p>
                                    <p>Tjänter</p>
                                    <p>Kontakta oss</p>
                                    <p>Jobba med oss</p>
                                </div>
                                <div className='w-100 conatiner paragraph'>
                                    <b><p>Meny</p></b>
                                    <p>Vårt erbjudande</p>
                                    <p>Hållbarhet</p>
                                    <p>Jobba hos oss</p>
                                    <p>Om oss</p>
                                    <p>Kontakta oss</p>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <div className='w-100 conatiner ms-3'>
                                    <b><p>Din integritet</p></b>
                                    <p>Integritetspolicy</p>
                                    <p>Cookiepolicy</p>
                                    <p><img src="https://i.postimg.cc/90r8QxHk/List-Item-Link-SVG.png" alt="" /> Facebook</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12} className="d-none d-lg-block order-4 order-sm-3 pt-3 container">
                        <div className='ps-4'>
                            <h3 className='text-start'>Gasellvinnare</h3>
                            <img src="https://i.postimg.cc/qBcnd43C/Grundkraft-Gasellvinnare-2021-2022-2023-1.png" alt=""
                                style={{ position: 'relative', right: '10%' }} />
                            <div className='w-100  text-start'>
                                <p style={{ fontSize: '80%' }}>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={3} xs={12} className=' order-1 order-lg-4 order-md-2 order-sm-4  custom-right-align-tablet custom-right-align-mobile'>
                        <div className='custom-image-align-tablet pt-5'>
                            <img className='pt-4 top-align' src="https://i.postimg.cc/tCtLPZVC/image-3.png" alt="" />
                        </div>
                    </Col>
                </Row>
                
                <Row className='text-center cprow d-none d-lg-block' >
                    <Col lg={12} md={12} sm={12} xs={12}>
                    <hr className='w-75 container' />
                        Copyright © 2024 All rights reserved.
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer
