import React from 'react'
import Carouseels from '../components/Carousel/Carousel'
import Styles from './index.module.css'

function index() {
    return (
        <div>
            
            <Carouseels title={'Special Offers'} special={true} />
            <Carouseels title={'Salad'} />
            <Carouseels title={'Appetizer'} />


            <div className={Styles.Order__ready__content}>
                <h3>Ready to order?</h3>
                <p>Browse our menu for dine-in, delivery or pickup and catering</p>
                <div style=
                    {
                        {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '50%',
                        }
                    }

                    className={Styles.A__3434A__}
                >
                    <div className={Styles.Part__One}>
                        <a style={{ color: '#996515', margin: '0 8px' }}>ASAP Pickup</a>
                        <a style={{ color: '#a5a5a5', margin: '0 8px' }}>
                            Beverly Hills - 1008 Elden Way
                        </a>
                    </div>
                    <div>
                        <a
                            style={
                                {
                                    backgroundColor: 'rgb(0, 0, 0)',
                                    color: 'rgb(245, 245, 245)',
                                    padding: '5px 10px',
                                    borderRadius: '30px',
                                    margin: '0 8px',
                                    fontSize: '13px'
                                }
                            }>change</a>
                        <a>Delivery or <span style={{ borderBottom: '1px solid #026764', paddingBottom: '1.5px' }}>Pickup</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
