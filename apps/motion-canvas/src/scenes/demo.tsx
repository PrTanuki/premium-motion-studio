import {makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {createRef, waitFor} from '@motion-canvas/core';
export default makeScene2D(function* (view) {
  const heading = createRef<Txt>();
  view.fill('#151515');
  view.add(<><Rect width={14} height={180} fill={'#FF6333'} x={-370}/><Txt ref={heading} text={'MOTION\nSTUDIO.'} fill={'#F5F0E6'} fontFamily={'Space Grotesk, sans-serif'} fontSize={140} fontWeight={700} x={-25}/></>);
  yield* waitFor(3);
});
