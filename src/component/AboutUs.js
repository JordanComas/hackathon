import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit
        a nisi ac tincidunt. Cras gravida urna vel elementum euismod. Vestibulum
        et consequat dui. Nulla id justo quis risus pharetra aliquet. Fusce
        purus arcu, condimentum non metus nec, fermentum condimentum arcu.
        Aliquam ligula lorem, auctor quis rhoncus a, lobortis id felis. Etiam
        pharetra euismod massa, sit amet pharetra nisi bibendum id. Ut mattis
        luctus pulvinar. Donec pharetra dui vitae nunc finibus hendrerit eu
        rhoncus orci. Sed nec tristique quam. Nulla hendrerit, erat at accumsan
        aliquam, dolor purus laoreet ipsum, in mollis lorem orci id diam. Nullam
        maximus at tortor in vehicula. Cras augue ex, rutrum vel augue in,
        lacinia pharetra erat. Sed semper mauris non vestibulum sodales.
        Suspendisse consectetur, ante sodales dapibus sagittis, magna odio
        mattis purus, ac rhoncus felis ipsum a tellus.
      </p>
    </div>
  );
};

export default AboutUs;
