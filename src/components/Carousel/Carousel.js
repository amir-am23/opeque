import React from 'react'
import './Carousel.css'
import {IoMdStopwatch} from 'react-icons/io'
function Carousels({ title, special }) {
    const chef_special = (
        <span className='specials'>Chief Special</span>
    )

    return (
        <>
            <div className='carousel-container'>
                <h2>{title}</h2>
                <hr />
                <div className="carousel" data-flickity='{ "groupCells": true,"wrapAround": true }'>
                    <div className='carousel-cell cell'>
                        <img className='img-fluid' src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY' />
                        <div className='title'>
                            <p>T-Bone Steak & Eggs</p>
                        </div>
                        <div className='subtitle'>
                            <a><span style={{color:'#026764'}}>A'la Carte</span>AmericanMain Course</a>
                        </div>
                        <div className='price' style={{display:'flex',justifyContent:'space-between'}}>
                            <div>
                            <span style={{backgroundColor:'#f5f5f5'}}><IoMdStopwatch/> 10-15 mins&nbsp;&nbsp;&nbsp;</span>
                            <span style={{backgroundColor:'#d7d7d7'}}>$6.99</span>
                            </div>
                            <span style={{backgroundColor:'#f5f5f5',marginRight:'20px'}}>Free Pickup</span>
                        </div>
                    </div>
                    <div className='carousel-cell cell'>
                        <img className='img-fluid' src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY' />
                        <div className='title'>
                            <p>T-Bone Steak & Eggs</p>
                        </div>
                        <div className='subtitle'>
                            <a><span style={{color:'#026764'}}>A'la Carte</span>AmericanMain Course</a>
                        </div>
                        <div className='price' style={{display:'flex',justifyContent:'space-between'}}>
                            <div>
                            <span style={{backgroundColor:'#f5f5f5'}}><IoMdStopwatch/> 10-15 mins&nbsp;&nbsp;&nbsp;</span>
                            <span style={{backgroundColor:'#d7d7d7'}}>$6.99</span>
                            </div>
                            <span style={{backgroundColor:'#f5f5f5',marginRight:'20px'}}>Free Pickup</span>
                        </div>
                    </div>
                    <div className='carousel-cell cell'>
                        <img className='img-fluid' src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY' />
                        <div className='title'>
                            <p>T-Bone Steak & Eggs</p>
                        </div>
                        <div className='subtitle'>
                            <a><span style={{color:'#026764'}}>A'la Carte</span>AmericanMain Course</a>
                        </div>
                        <div className='price' style={{display:'flex',justifyContent:'space-between'}}>
                            <div>
                            <span style={{backgroundColor:'#f5f5f5'}}><IoMdStopwatch/> 10-15 mins&nbsp;&nbsp;&nbsp;</span>
                            <span style={{backgroundColor:'#d7d7d7'}}>$6.99</span>
                            </div>
                            <span style={{backgroundColor:'#f5f5f5',marginRight:'20px'}}>Free Pickup</span>
                        </div>
                    </div>
                    <div className='carousel-cell cell'>
                        <img className='img-fluid' src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY' />
                        <div className='title'>
                            <p>T-Bone Steak & Eggs</p>
                        </div>
                        <div className='subtitle'>
                            <a><span style={{color:'#026764'}}>A'la Carte</span>AmericanMain Course</a>
                        </div>
                        <div className='price' style={{display:'flex',justifyContent:'space-between'}}>
                            <div>
                            <span style={{backgroundColor:'#f5f5f5'}}><IoMdStopwatch/> 10-15 mins&nbsp;&nbsp;&nbsp;</span>
                            <span style={{backgroundColor:'#d7d7d7'}}>$6.99</span>
                            </div>
                            <span style={{backgroundColor:'#f5f5f5',marginRight:'20px'}}>Free Pickup</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Carousels
