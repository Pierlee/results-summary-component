import React from 'react';
import {Container, Box, ResultSection, SummarySection} from './results.style'
import { useState } from 'react';
import data from "./data.json"

export const Results = () => {
  const [items] = useState(data)

  return (
    <Container>
      <Box>
          <ResultSection>
            <p className='title'>Your Result</p>
            <div className='circle'>
              <h2>76</h2>
              <p>of 100</p>
            </div>
            <h2>Great</h2>
            <p className='text'>You scored higher than 65% of the people who have taken these tests</p>
          </ResultSection>

          <SummarySection>
            <h4>Summary</h4>

            <div>
              {items.map((item, index) => (
                <div className='divider' key={index}>
                  <h3>
                    <img src={item.icon} alt={item.category}/>
                    {item.category}
                  </h3>
                  <p><span>{item.score}</span> / 100</p>
                </div>
              ))}
            </div>

            <div className='centralize-button'>
              <button>Continue</button>
            </div>
          </SummarySection>
      </Box>
    </Container>
  );
};
