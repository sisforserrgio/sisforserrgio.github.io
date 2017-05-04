import { ITEM_CLICK_GEOMETRY } from './types';

export function itemClickGeometry(geometry) {
  return {
    type: ITEM_CLICK_GEOMETRY,
    payload: geometry
  };
}
