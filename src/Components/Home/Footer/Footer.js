import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="row">
                <div className="col-md-6">
                    <h2 style={{textAlign:'left'}}>Let us handle your <br/>project, professionally.</h2>
                    <p>With well writting code we build amazing apps for all platforms.Feel free to talk with us</p>
                </div>
                <div className="col-md-6">
                    <form action="">
                        <input type="text" placeholder="Your name"/>
                        <input type="email" placeholder="Your email" name="" id=""/>
                        <textarea name="" id="" cols="40" rows="10" placeholder="Your message"></textarea>
                        <input type="submit" value="SEND"/>
                    </form>
                </div>
            </div>
            <p className="text-center mt-5">Copyright {(new Date()).getFullYear()} @programming hero</p>
        </div>
    );
};

export default Footer;