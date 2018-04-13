// Copyright (C) 2018 Cristobal Valenzuela
// 
// This file is part of RunwayML.
// 
// RunwayML is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// RunwayML is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with RunwayML.  If not, see <http://www.gnu.org/licenses/>.
// 

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import favicon from '../../public/static/img/favicon.png';
import ogImage from '../../public/static/img/meta.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Runway: Machine Learning for Everyone' },
        { name: 'keywords', content: 'machine learning, machine, learning, models, GUI, deep learning, neural networks' },
        { name: 'author', content: 'Cristobal Valenzuela' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'twitter:title', content: 'Machine Learning for Everyone'},
        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:site', content: '@c_valenzuelab'},
        { name: 'twitter:description', content: 'Run open-source state of the art machine learning models and use them everywhere'},
        { name: 'twitter:image', content: ogImage},
        { name: 'og:title', content: 'Machine Learning for Everyone'},
        { name: 'og:type', content: 'website'},
        { name: 'og:url', content: 'https://runwayml.com/'},
        { name: 'og:description', content: 'Run open-source state of the art machine learning models and use them everywhere'},
        { name: 'og:image', content: ogImage}
      ]}
      link={[
        { rel: "icon", type: "image/png", href: favicon }
      ]}
    />

    <Header siteTitle={data.site.siteMetadata.title} />
    
    <div>
      {children()}
    </div>

    <Footer siteTitle={data.site.siteMetadata.title}/>
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
