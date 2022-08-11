import React from 'react';
import styled from '@emotion/styled';
import { QueuesStatsView, TeamsView } from '@twilio/flex-ui';

const CombinedViewStyles = styled('div')`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  
  .stackedView {
    overflow-y: scroll;
    min-height: 50%;
    max-height: 50%;
  }
  
  .Twilio-TeamsView-Loaded h2 {
    display: none;
  }
  
  .Twilio-TeamsView-Filter {
    margin-top: 0;
  }
  
  hr {
    width: 100%;
    border: 1px solid rgb(202, 205, 216);
    border-bottom: none;
  }
  `;

const CombinedRealtimeView = (props) => {
  return (
    <CombinedViewStyles>
      <div className="stackedView">
        <QueuesStatsView name="stacked-queue-stats-view" key="stacked-queue-stats-view"/>
      </div>
      <hr/>
      <div className="stackedView">
        <TeamsView name="stacked-teams-view" key="stacked-teams-view" {...props} />
      </div>
    </CombinedViewStyles>
  );
}

export default CombinedRealtimeView;
