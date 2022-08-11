import React from 'react';
import { SideLink, Actions } from '@twilio/flex-ui';

const CombinedRealtimeNavItem = ({ activeView, viewName }) => {
  function navigate() {
    Actions.invokeAction('NavigateToView', { viewName });
  };
  
  return (
    <SideLink
      showLabel={true}
      icon="Data"
      iconActive="DataBold"
      isActive={ activeView === viewName}
      onClick= { navigate }
      key="combined-realtime-view-link"
    >
      Teams & Queues Stats
    </SideLink>
  );
};

export default CombinedRealtimeNavItem;