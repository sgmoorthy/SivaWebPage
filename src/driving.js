import React from 'react';
import './index.css';
import Question from './question.js';
import Answer from './answer.js';
import Quote from './quote.js';
import Appbar from './appbar.js'

import content_img from './images/content_image5.gif';

export default function ArticleDriving() {
  return (
    <>
    <Appbar />
    <div className="huge">
    Are you driving your car?
    </div>
    <div className="body" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
    <img src={ content_img } />
    </div>
    </>
  );
}
