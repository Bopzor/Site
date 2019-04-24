import React from 'react';
import '../css/style.css';

const CV = () => {
  return (
    <object
      data="../images/cv-bopzor.me.pdf"
      type="application/pdf"
      width="750px"
      height="750px"
    >
      <a href="../images/cv-bopzor.me.pdf">
        <page className="cv">
          <img src="../cv-bopzor.me.png" className="cv-img" alt="CV"/>
        </page>
      </a>
    </object>
  );
}

export default CV;
