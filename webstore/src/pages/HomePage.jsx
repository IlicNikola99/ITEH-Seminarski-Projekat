import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';
import HomeTop from '../components/home/HomeTop';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';




export class HomePage extends Component {
  render() {
    return <div>
        <Fragment>
            {/* <NavMenuDesktop /> */}
            <NavMenuMobile /> 
            <HomeTop/>
            <FeaturedProducts/>
            
            <NewArrival/>
            <Categories/>
            <Collection/>

        </Fragment>
    </div>;
  }
}

export default HomePage;
