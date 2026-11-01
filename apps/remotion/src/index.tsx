import React from 'react';
import {registerRoot, Composition} from 'remotion';
import {PremiumDemo01} from './video';
registerRoot(() => <Composition id="PremiumDemo01" component={PremiumDemo01} width={1080} height={1920} fps={30} durationInFrames={450}/>);
