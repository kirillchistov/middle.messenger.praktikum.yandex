import { BlockProps } from './block-props';
import { BLOCK_EVENTS } from './block-events';

export type BlockEventMap = {
  [BLOCK_EVENTS.INIT]: [];
  [BLOCK_EVENTS.FLOW_CDM]: [];
  [BLOCK_EVENTS.FLOW_CDU]: [oldProps: BlockProps, newProps: BlockProps];
  [BLOCK_EVENTS.FLOW_RENDER]: [];
};
