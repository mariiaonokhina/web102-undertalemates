import React, { Component, useEffect, useState } from "react";
import Card from "../components/Card";

const Gallery = () => {

    return (
        <div className="gallery-screen-container">
                <h1>Gallery</h1>

                <div className="card-container">
                    <Card userName='Mariia' character='Frisk' age='19' mood='Happy' />

                    <Card userName='Mariia' character='Frisk' age='19' mood='Happy' />

                    <Card userName='Mariia' character='Frisk' age='19' mood='Happy' />

                    <Card userName='Mariia' character='Frisk' age='19' mood='Happy' />

                    <Card userName='Mariia' character='Frisk' age='19' mood='Happy' />

                    <Card userName='Mariia' character='Frisk' age='19' mood='Happy' />

                    <Card userName='Mariia' character='Frisk' age='19' mood='Happy' />
                </div>
        </div>
    )
}

export default Gallery;
