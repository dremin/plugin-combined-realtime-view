import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import CombinedRealtimeNavItem from './components/CombinedRealtimeNavItem/CombinedRealtimeNavItem';
import CombinedRealtimeView from './components/CombinedRealtimeView/CombinedRealtimeView';

const PLUGIN_NAME = 'CombinedRealtimeViewPlugin';
const COMBINED_VIEW_NAME = 'CombinedRealtimeView';

export default class CombinedRealtimeViewPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    // Add view
    flex.ViewCollection.Content.add(
      <flex.View name={COMBINED_VIEW_NAME} key="combined-realtime-view">
        <CombinedRealtimeView key="combined-realtime-view-content" />
      </flex.View>
    );
    
    // Add side nav button for the view
    flex.SideNav.Content.add(
      <CombinedRealtimeNavItem viewName={COMBINED_VIEW_NAME} key="combined-realtime-view-button" />
    );
    
    flex.Actions.addListener("beforeHistoryReplace", (payload, abortFunction) => {
      // If we are on the combined realtime view, rewrite the payload to avoid jumping to the standalone teams view.
      if (payload.indexOf('/teams/') >= 0 && manager.store.getState().flex.view.activeView == COMBINED_VIEW_NAME) {
        payload = payload.replace('/teams/', `/${COMBINED_VIEW_NAME}/`);
        abortFunction();
        flex.Actions.invokeAction("HistoryReplace", payload);
      }
    });
  }
}
