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

.Twilio-QueuesStatsView {
  height: 100%;
  padding: 1rem;
}

.Twilio-TeamsView {
  height: 100%;
}

.Twilio-TeamsView-Loaded {
  padding: 1rem;
}

.Twilio-TeamsView-Loaded h2 {
  display: none;
}

.Twilio-TeamsView-Filter {
  margin-top: 0;
}

.Twilio-TeamFiltersPanel {
  height: 100%;
}

hr {
  width: 100%;
  border: 1px solid rgb(202, 205, 216);
  border-bottom: none;
  margin-block-start: 0;
  margin-block-end: 0;
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
