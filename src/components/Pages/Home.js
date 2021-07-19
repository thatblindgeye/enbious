import React, { useEffect } from 'react';

function ImageCard({ imgSmall, imgMed, children }) {
    return (
        <>
            <div className='image-card-container'>
                <div className='image-mask'> </div>
                <picture>
                    <source
                        srcSet={process.env.PUBLIC_URL + imgMed}
                        media='(min-width: 27em)'
                    />
                    <img
                        src={process.env.PUBLIC_URL + imgSmall}
                        alt=''
                        className='image-card'
                    />
                </picture>
            </div>
            <div className='image-card-text'>{children}</div>
        </>
    );
}

export default function Home() {
    useEffect(() => {
        document.title = 'Enbious';
    }, []);

    return (
        <div className='home-images-container'>
            <ImageCard
                imgMed={
                    '/public-assets/backgrounds/girl-lying-on-the-grass-1741487-med.jpg'
                }
                imgSmall={
                    '/public-assets/backgrounds/girl-lying-on-the-grass-1741487-sm.jpg'
                }
            >
                Clothing
            </ImageCard>
            <ImageCard
                imgMed={'/public-assets/backgrounds/hip-hop-1209499-med.jpg'}
                imgSmall={'/public-assets/backgrounds/hip-hop-1209499-sm.jpg'}
            >
                without
            </ImageCard>
            <ImageCard
                imgMed={
                    '/public-assets/backgrounds/pexels-ono-kosuki-5999831-med.jpg'
                }
                imgSmall={
                    '/public-assets/backgrounds/pexels-ono-kosuki-5999831-sm.jpg'
                }
            >
                boundaries.
            </ImageCard>
            <ImageCard
                imgMed={
                    '/public-assets/backgrounds/pexels-keira-burton-6146970-med.jpg'
                }
                imgSmall={
                    '/public-assets/backgrounds/pexels-keira-burton-6146970-sm.jpg'
                }
            />
        </div>
    );
}
