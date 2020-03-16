import React, { Component } from "react";
import Head from "next/head";

class Meta extends Component {
  render() {
    return (
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale = 1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#081926" />
        <meta name="description" content="Notre site de mariage" />
        <title>Sarah et Benjamin</title>

        <meta property="og:site_name" content="Sarah & Benjamin" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:url" content="https://sarah-et-benjamin.com" />
        <meta property="og:title" content="6 juillet 2019" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://sarah-et-benjamin.com/static/nous-yosemite.jpg"
        />
        <meta property="og:description" content="Notre site de mariage" />
        <link
          href="https://api.mapbox.com/mapbox-assembly/v0.23.1/assembly.min.css"
          rel="stylesheet"
        />

        <link rel="icon" href="/static/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans:200,400|Fira+Sans+Condensed:200,400,600|Dancing+Script"
          rel="stylesheet"
        />
        <link href="/static/bhavuka.ttf" rel="stylesheet" />
        <link href="/static/main.css" rel="stylesheet" />

        <script
          async
          defer
          src="https://api.mapbox.com/mapbox-assembly/v0.23.1/assembly.js"
        />
      </Head>
    );
  }
}

export default Meta;
