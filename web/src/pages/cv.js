import React from 'react';
import '../css/style.css';

const CV = () => {
  return (
    <object
      data="https://bopzor.me/images/cv-bopzor.me.pdf"
      type="application/pdf"
      width="750px"
      height="750px"
    >
      <a href="http://bopzor.me/images/cv-bopzor.me.pdf">
        <page className="cv">
          <img src="http://bopzor.me/cv-bopzor.me.png" className="cv-img" alt="CV"/>
        </page>
      </a>
    </object>
  );
}

export default CV;
