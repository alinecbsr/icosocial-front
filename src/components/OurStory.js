import React from 'react';

import iconCalendar from '../assets/image/icon-calendar.svg';
import iconHand from '../assets/image/icon-hand.svg';
import iconLocation from '../assets/image/icon-location.svg';
import iconHeart from '../assets/image/icon-heart.svg';
import timeLine from '../assets/image/timeLine.svg';

function OurStory() {
  return (
    <section className="container">
      <h2 className="storyTitle">Nossa História</h2>
      <div className="story">
        <div className="story_column">
          <div className="story_space1">
            <div className="story_space1-icon">
              <img
                className="story_space1-icon-figure"
                src={iconCalendar}
                alt="icon calendar"
              />
            </div>
            <h3>Loren Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              congue quis justo et ultricies. Etiam posuere nisl velit, eget
              dictum felis porttitor ac. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc congue quis justo et ultricies. Etiam
              posuere nisl velit, eget dictum felis porttitor ac.
            </p>
          </div>

          <div className="story_space2">
            <div className="story_space2-icon">
              <img
                className="story_space2-icon-figure"
                src={iconHand}
                alt="icon hand"
              />
            </div>
            <h3>Loren Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              congue quis justo et ultricies. Etiam posuere nisl velit, eget
              dictum felis porttitor ac. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc congue quis justo et ultricies. Etiam
              posuere nisl velit, eget dictum felis porttitor ac.
            </p>
          </div>
        </div>
        <div className="story_lineTime">
          <img src={timeLine} alt="imagem time line" />
        </div>
        <div className="story_column">
          <div className="story_space2">
            <div className="story_space2-icon">
              <img
                className="story_space2-icon-figure"
                src={iconLocation}
                alt="icon location"
              />
            </div>
            <h3>Loren Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              congue quis justo et ultricies. Etiam posuere nisl velit, eget
              dictum felis porttitor ac. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc congue quis justo et ultricies. Etiam
              posuere nisl velit, eget dictum felis porttitor ac.
            </p>
          </div>
          <div className="story_space2">
            <div className="story_space2-icon">
              <img
                className="story_space2-icon-figure"
                src={iconHeart}
                alt="icon heart"
              />
            </div>
            <h3>Loren Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              congue quis justo et ultricies. Etiam posuere nisl velit, eget
              dictum felis porttitor ac. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc congue quis justo et ultricies. Etiam
              posuere nisl velit, eget dictum felis porttitor ac.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
