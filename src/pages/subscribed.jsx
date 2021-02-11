import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Subscribed from "../components/Subscribed/Subscribed";
import config from "../../data/SiteConfig";
import "../layout/index.css";

class SubscribedPage extends Component {
  render() {
    return (
      <Layout>
        
          <Helmet title={`You're subscribed! | ${config.siteTitle}`} />
          <Subscribed />
              

      </Layout>
    );
  }
}

export default SubscribedPage;
