export const BLOCK_EVENTS = {
  INIT: 'init',
  FLOW_CDM: 'flow:component-did-mount',
  FLOW_CDU: 'flow:component-did-update',
  FLOW_RENDER: 'flow:render',
} as const;

export type BlockEventName = (typeof BLOCK_EVENTS)[keyof typeof BLOCK_EVENTS];
