import React from 'react'
import Styles from './Footer.module.css'
import Applesvg from '../../Svgs/Applesvg'
import GoogleSvg from '../../Svgs/GoogleSvg'

function Footer() {
    return (
        <div className={Styles.Footer___Wrapper}>
            <div style={{ width: '80%' }}>
                <div className={Styles.Header___Footer}>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Support</a></li>
                        <li><a href='#'>Gallery</a></li>
                        <li><a href='#'>Terms</a></li>
                        <li><a href='#'>Locations</a></li>
                    </ul>
                    <div className={Styles.Stores___Icons}>
                        <Applesvg />
                        <GoogleSvg />
                    </div>
                </div>
                <div className={Styles.Main___Footer}>
                    <div className={Styles.lists}>
                        <div>Main menu</div>
                        <a>Pick up</a>
                    </div>
                    <div className={Styles.lists}>
                        <div>Orders</div>
                        <a>Upcoming orders</a>
                        <a>recent orders</a>
                    </div>
                    <div className={Styles.lists}>
                        <div>Reservation</div>
                        <a>Recent reservation</a>
                    </div>
                    <div className={Styles.lists}>
                        <div>Profile</div>
                        <a>Promos & credits</a>
                        <a>rewards</a>
                    </div>
                    <div className={Styles.lists}>
                        <div>Profile</div>
                        <a>Promos & credits</a>
                        <a>rewards</a>
                    </div>
                    <div className={Styles.lists}>
                        <div>Profile</div>
                        <a>Promos & credits</a>
                        <a>rewards</a>
                    </div>
                </div>
                <div className={Styles.Footer___Footer}>
                    <div style={{ width: '70%', color: '#d7d7d7', marginTop: '30px' }}>
                        <p style={{ marginBottom: '3px' }}>
                            Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application.
                        </p>
                        <p style={{ color: '#a5a5a5' }}>
                            Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application.
                        </p>
                        <div style={{paddingBottom:'30px'}}>
                            <div className={Styles.links}><span style={{paddingRight:'10px'}}>©2019 OPEQE INC</span>|<a class="link-l2 inline" href="" style={{padding:'0 10px',color:'#a5a5a5',textDecoration:'none'}}>Terms &amp; Conditions</a>|<a class="link-l2 inline" href="" style={{padding:'0 10px',color:'#a5a5a5',textDecoration:'none'}}>Privacy Policy</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
