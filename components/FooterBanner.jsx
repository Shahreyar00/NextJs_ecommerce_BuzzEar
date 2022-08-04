import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <div className="left-wrapper">
                        <h2>{discount}</h2>
                        <h3>{largeText1}</h3>
                        <h3>{largeText2}</h3>
                        <h4>{saleTime}</h4>
                    </div>
                </div>
                <div className="right">
                    <h2>{smallText}</h2>
                    <h3>{midText}</h3>
                    <p>{desc}</p>
                    <Link href={`/product/${product}`}>
                        <button type="button">{buttonText}</button>
                    </Link>
                </div>

                <img src={urlFor(image)} className="footer-banner-image" alt="footer banner image" />
            </div>
        </div>
    )
}

export default FooterBanner