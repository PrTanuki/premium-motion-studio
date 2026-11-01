import React from 'react';
import {registerRoot, Composition} from 'remotion';
import {PremiumDemo01} from './video';
import {CNARMRecruitment01, recruitmentDefaults} from './cnarm/CNARMRecruitment01';
registerRoot(() => <><Composition id="PremiumDemo01" component={PremiumDemo01} width={1080} height={1920} fps={30} durationInFrames={450}/><Composition id="CNARMRecruitment01" component={CNARMRecruitment01} width={1080} height={1920} fps={30} durationInFrames={450} defaultProps={recruitmentDefaults}/></>);
