import React, {Component} from 'react'
import Head from 'next/head'

class Meta extends Component {
  render () {
    return (
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no' />
          <meta name="theme-color" content="#081926" />
          <meta name="description" content="Sarah & Benjamin" />

          <meta property="og:site_name" content="Sarah & Benjamin" />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:url" content='https://sarah-et-benjamin.com' />
          <meta property="og:type" content="website" />
          <meta property="og:image" content='' />
          <meta property="og:description" content="Sarah & Benjamin - 💍" />

          <link href='https://api.mapbox.com/mapbox-assembly/v0.23.1/assembly.min.css' rel='stylesheet' />

          <link rel='icon' href='/static/favicon.png'/>
          <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' />
          <link href='/static/main.css' rel='stylesheet' />

          <script async defer src='https://api.mapbox.com/mapbox-assembly/v0.23.1/assembly.js' />
        </Head>
    )
  }
}

export default Meta
