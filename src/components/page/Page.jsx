import React, { useState, useEffect } from 'react'
import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa';

import axios from 'axios'

export default function Page() {

    const [image, setImage] = useState([])
    const [currentClinic, setCurrentClinic] = useState(1)
    const maxItem = 4

    var first = (currentClinic * maxItem) - maxItem
    var last = currentClinic * maxItem



    const changePage = (direction) => {
        if (direction === 'next') {
            setCurrentClinic(currentClinic + 1)
        } else if (direction === 'back') {
            setCurrentClinic(currentClinic - 1)
        }
    }


    useEffect(() => {

        axios.get(
            'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=ed9aeed6915893540672706939818b0c&gallery_id=72157647915728815&format=json&nojsoncallback=1'
        )
            .then(response => setImage(response.data.photos.photo))

    }, []);
    console.log(image);

    const imageList = image && image.slice(first, last).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6" key={index}>
                <div className="card" style={{ width: '20em', height: '20rem', margin: '5px auto', overflowX: 'hidden' }}>

                    <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
                        alt="..." style={{ width: '20em', height: '20rem' }}></img>

                </div>

            </div>
        );

    });
    const maxClinic = image && image.length - 1;

    return (
        <div>
            <div className="row mt-3">
                {imageList}
            </div>



            <div className="row mt-3" style={{ width: '5rem', margin: '8px auto'}}>
                {currentClinic > 1 ?
                    <span 
                        onClick={() => changePage('back')}
                    ><FaCaretSquareLeft /></span>
                    : <span

                    ><FaCaretSquareLeft /></span>}
                {maxClinic > (currentClinic * maxItem) ?
                    <span
                        onClick={() => changePage('next')}
                    ><FaCaretSquareRight  /></span>
                    : <span

                    ><FaCaretSquareRight /></span>
                }

            </div>


        </div>


    )
}
