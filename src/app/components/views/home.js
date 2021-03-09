import React from 'react';

import AppHero from '../home/hero';
import AppAbout from '../home/about';
import AppFeature from '../home/feature';
import AppWorks from '../home/works';
import AppFaq from '../home/faq';
import SignUp from '../SignUp';
//import AppPricing from '../components/home/pricing';
import AppContact from '../home/contact';
import AppHeader from "../common/header";
import AppFooter from "../common/footer";
import { Layout } from 'antd';
const { Header,Footer } = Layout;
//import { Footer, Header } from 'antd/lib/layout/layout';


function AppHome() {
  return (
    <div className="main">
      <Header>
      <AppHeader/>
      </Header>
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppFaq/>
      {/* <AppPricing/> */}
      <SignUp/>
      <AppContact/>
      <Footer>
      <AppFooter/>
      </Footer>
    </div>
  );
}

export default AppHome;