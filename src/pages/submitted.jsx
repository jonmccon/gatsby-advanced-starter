import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Submitted from "../components/Submit/Submitted";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "../layout/index.css";

class SubmittedPage extends Component {
  render() {
    return (
      <Layout>
        
          <Helmet title={`You're subscribed! | ${config.siteTitle}`} />
          <Submitted />
              
        <Footer />
      </Layout>
    );
  }
}

export default SubmittedPage;
