import React, { useState, useEffect } from 'react'
import { Col, Image, Card } from 'react-bootstrap';
import { getImage, clinic } from '../service/service'

export default function Page() {
    const [image, setImage] = useState()
    const [clinicData, setClinicData] = useState()

    // useEffect(() => {

    //     getImage({ method: 'getRecent' }).then(res => (
    //         setImage(res?.data?.data)
    //     ))
    // }, []);

    useEffect(() => {

        clinic({ method: 'all' }).then(res => (
            setImage(res?.data?.data)
        ))
    }, []);
    console.log(image)
    // const imageList = image && image.slice(0, 10).map((value, index) => (
    //     <Card style={{ width: '20em', height: '20rem', margin: '5px auto', overflowX: 'hidden' }} key={index}>

    //         <img src={value.image} class="card-img-top" alt="..." />


    //     </Card>));

    const imageList = image && image.slice(0, 12).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6" key={index}>
                <div className="card" style={{ width: '20em', height: '20rem', margin: '5px auto', overflowX: 'hidden' }}>

                    <img  src={item.image} alt="..."></img>

                </div>

            </div>
        );
    });
    return (
        <div className="row mt-3">
            {imageList}
        </div>

    )
}
