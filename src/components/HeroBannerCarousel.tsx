import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import Ad1 from './BabyHeroBanner.jpg'
import Ad2 from './BackToCampusOffer.jpg'
import Ad3 from './BackToSchoolLowPrices.jpg'
import { DFPSlotsProvider, AdSlot } from 'react-dfp'

export default class HeroBannerCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <Slider {...settings}>
        <div>
          <DFPSlotsProvider dfpNetworkId={'21671371560'} adUnit={'2598383420'}>
            <AdSlot sizes={[ [1410, 300]]} />
          </DFPSlotsProvider>
        </div>
        <div>
          <img src={Ad3} alt='Static Ad 3' />
        </div>
        <div>
          <DFPSlotsProvider dfpNetworkId={'21671371560'} adUnit={'2606319528'}>
            <AdSlot adUnit="en/gm/homepage/hero-carousel/slide2" />
          </DFPSlotsProvider>
        </div>
        <div>
          <img src={Ad2} alt='Static Ad 2' />
        </div>
      </Slider>
    );
  }
}

const HeroBannerCarouselWithDFPAds = () => 
<DFPSlotsProvider dfpNetworkId={'21671371560'} >
  <HeroBannerCarousel />
</DFPSlotsProvider>

export { HeroBannerCarousel, HeroBannerCarouselWithDFPAds }
