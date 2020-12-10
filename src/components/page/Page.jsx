import React, { useState, useEffect } from 'react'
import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa';
import { Navbar, Form, Button, FormControl } from 'react-bootstrap'

import axios from 'axios'

export default function Page() {
    const [tag, setTag] = useState(null);
    const [image, setImage] = useState([])
    const [image2, setImage2] = useState([])
    const [currentImage, setCurrentImage] = useState(1)
    const [showImage, setShowImage] = useState(true)
    const [showSearch, setShowSearch] = useState(false)
    const maxItem = 4

    var first = (currentImage * maxItem) - maxItem
    var last = currentImage * maxItem



    const changePage = (direction) => {
        if (direction === 'next') {
            setCurrentImage(currentImage + 1)
        } else if (direction === 'back') {
            setCurrentImage(currentImage - 1)
        }
    };
     const search=()=>{
        
        searcha();
        setShowSearch(true);
        setShowImage(false)
    };
    const searcha=()=>{
        axios.get(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ed9aeed6915893540672706939818b0c&tags=${tag}&format=json&nojsoncallback=1`
            )
            .then(response => setImage2(response.data.photos.photo))
    }

    useEffect(() => {

    axios.get(
    'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=ed9aeed6915893540672706939818b0c&gallery_id=72157647915728815&format=json&nojsoncallback=1'
)
    .then(response => setImage(response.data.photos.photo))


    }, []);
    console.log(image);
    console.log(tag);
    console.log(image2);

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
    const imageSearch = image2 && image2.slice(first, last).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6" key={index}>
                <div className="card" style={{ width: '20em', height: '20rem', margin: '5px auto', overflowX: 'hidden' }}>

                    <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
                        alt="..." style={{ width: '20em', height: '20rem' }}></img>

                </div>

            </div>
        );

    });
    const maxImage = image && image.length - 1;
    
    return (
        <div>
            <div className="row mt-3">
                <Navbar bg="light" expand="lg" style={{ margin: '5px auto' }}>
                    <Navbar.Brand href="#home" style={{}}>GAIA Gallery</Navbar.Brand>

                    <Form inline style={{ width: '50rem', margin: '8px auto' }}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"
                            style={{ width: '32rem', margin: ' auto' }} onChange={e => setTag(e.target.value)} />
                        <Button style={{ margin: 'auto 8px' }} variant="outline-success"  onClick={()=>search()}>Search</Button>
                    </Form>
                </Navbar>
            </div>
            {showImage ? <div className="row mt-3">
                {imageList}
            </div> : null}
            {showSearch ? <div className="row mt-3">
                {imageSearch}
            </div> : null}

            <div className="row mt-3" style={{ width: '5rem', margin: '8px auto' }}>
                {currentImage > 1 ?
                    <span
                        onClick={() => changePage('back')}
                    ><FaCaretSquareLeft /></span>
                    : <span

                    ><FaCaretSquareLeft /></span>}
                {maxImage > (currentImage * maxItem) ?
                    <span
                        onClick={() => changePage('next')}
                    ><FaCaretSquareRight /></span>
                    : <span

                    ><FaCaretSquareRight /></span>
                }

            </div>


        </div>


    )
}
