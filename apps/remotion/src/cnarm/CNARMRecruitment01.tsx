import React from 'react';
import {AbsoluteFill, useCurrentFrame, Sequence} from 'remotion';
import {Screen, Wipe, p} from '../video';
import {cnarmBrand as B} from './brand';
import {Direction, Eyebrow, KineticLine, OfficialLogo} from './primitives';
import brief from '../../../../briefs/cnarm-recruitment-01.json';

export type RecruitmentProps = typeof brief.props;
export const recruitmentDefaults: RecruitmentProps = brief.props;

const Hook:React.FC<RecruitmentProps>=(copy)=>{
  const f=useCurrentFrame();
  return <Screen bg={B.navy} color={B.cream}>
    <OfficialLogo/><Eyebrow text="MOBILITÉ PROFESSIONNELLE"/>
    <KineticLine text={copy.hook} y={490} size={100} at={-1} tracking={-4}/>
    <div style={{position:'absolute',left:90,top:625,height:7,width:810*p(f,0,15),background:B.orange}}/>
    <KineticLine text={copy.subject} y={668} size={156} at={4}/>
    <KineticLine text={copy.next} y={838} size={155} at={10}/>
    <KineticLine text={copy.job} y={1000} size={236} at={16} tracking={-10}/>
    <div style={{transform:`translate(${(1-p(f,25,48))*120}px,${(1-p(f,25,48))*120}px)`,opacity:p(f,25,40)}}><Direction x={712} y={1285} size={168}/></div>
    <div style={{position:'absolute',left:90,top:1375,width:485*p(f,32,52),height:3,background:B.pale,opacity:.45}}/>
  </Screen>;
};
const Question:React.FC<RecruitmentProps>=(copy)=>{
  const f=useCurrentFrame();
  return <Screen bg={B.orange} color={B.navy}>
    <Eyebrow text="UNE NOUVELLE DIRECTION" y={280} color={B.navy}/>
    <KineticLine text={copy.question} y={560} size={118} color={B.navy} at={4}/>
    <div style={{transform:`translateX(${(1-p(f,17,40))*30}px) scaleX(${.96+.04*p(f,17,40)})`,transformOrigin:'90px 800px'}}>
      <KineticLine text={copy.destination} y={720} size={140} color={B.navy} at={10} tracking={-6}/>
    </div>
    <div style={{position:'absolute',left:90,top:920,width:810*p(f,25,44),height:5,background:B.navy}}/>
    <div style={{transform:`translate(${(1-p(f,27,47))*-80}px,${(1-p(f,27,47))*80}px)`,opacity:p(f,27,40)}}>
      <Direction x={345} y={1060} size={430} color={B.navy}/>
    </div>
  </Screen>;
};
const Journey:React.FC<RecruitmentProps>=(copy)=>{
  const f=useCurrentFrame(); const progress=p(f,18,70);
  // A symbolic curve, deliberately not a geographic map.
  const t=progress, q=1-t;
  const x=q*q*q*170+3*q*q*t*170+3*q*t*t*800+t*t*t*800;
  const y=q*q*q*1330+3*q*q*t*940+3*q*t*t*1280+t*t*t*990;
  return <Screen bg={B.navy} color={B.cream}>
    <Eyebrow text="VOTRE AVENIR EN MOUVEMENT" y={280}/>
    <KineticLine text={copy.project} y={490} size={146} at={3}/>
    <KineticLine text={copy.opportunities} y={675} size={84} at={11} tracking={-4}/>
    <svg style={{position:'absolute',inset:0}} width={1080} height={1920} viewBox="0 0 1080 1920">
      <path d="M170 1330C170 940 800 1280 800 990" fill="none" stroke={B.pale} strokeOpacity=".15" strokeWidth="3"/>
      <path d="M170 1330C170 940 800 1280 800 990" fill="none" stroke={B.orange} strokeWidth="9" pathLength="1" strokeDasharray="1" strokeDashoffset={1-progress}/>
      <circle cx="170" cy="1330" r={23} fill={B.navy} stroke={B.orange} strokeWidth="7"/>
      <circle cx="800" cy="990" r={40} fill="none" stroke={B.pale} strokeWidth="2"/>
      <circle cx={x} cy={y} r="14" fill={B.cream}/>
      <path d="M780 1002L800 982L820 1002" fill="none" stroke={B.orange} strokeWidth="6" opacity={p(f,61,72)}/>
    </svg>
    <div data-safe-text data-copy="LA RÉUNION" style={{position:'absolute',left:115,top:1395,font:'600 26px Inter',color:B.pale,letterSpacing:2}}>LA RÉUNION</div>
    <div data-safe-text data-copy="HEXAGONE" style={{position:'absolute',left:656,top:880,font:'600 26px Inter',color:B.pale,letterSpacing:2}}>HEXAGONE</div>
  </Screen>;
};
const Support:React.FC<RecruitmentProps>=(copy)=>{
  const f=useCurrentFrame();
  return <Screen bg={B.cream} color={B.navy}>
    <Eyebrow text="À CHAQUE ÉTAPE DE VOTRE PROJET" y={280} color={B.navy}/>
    <KineticLine text={copy.organization} y={490} size={140} color={B.navy} at={4}/>
    <KineticLine text={copy.support} y={666} size={86} color={B.navy} at={10} tracking={-4}/>
    {copy.pillars.map((word,i)=><React.Fragment key={i}>
      <div style={{position:'absolute',left:90,top:908+i*159,width:810*p(f,31+i*8,45+i*8),height:2,background:B.navy,opacity:.3}}/>
      <div style={{position:'absolute',left:90,top:948+i*159,width:16,height:16,background:i===1?B.navy:B.orange,transform:`scale(${p(f,32+i*8,44+i*8)})`}}/>
      <KineticLine text={word} x={137} y={925+i*159} size={81} width={670} color={B.navy} at={33+i*8} tracking={-3}/>
    </React.Fragment>)}
    <div style={{opacity:p(f,60,70)}}><Direction x={766} y={1260} size={125} color={B.orange}/></div>
  </Screen>;
};
const Action:React.FC<RecruitmentProps>=(copy)=>{
  const f=useCurrentFrame();
  return <Screen bg={B.navy} color={B.cream}>
    <Eyebrow text="UNE NOUVELLE DIRECTION" y={280}/>
    <div style={{opacity:p(f,14,32)}}><Direction x={725} y={400} size={170}/></div>
    <KineticLine text={copy.ctaTitle[0]} y={630} size={110} at={9}/>
    <KineticLine text={copy.ctaTitle[1]} y={758} size={112} at={15}/>
    <div style={{position:'absolute',left:90,top:984,width:810*p(f,25,40),height:88,background:B.orange}}/>
    <KineticLine text={copy.cta} x={118} y={999} size={41} width={750} color={B.navy} at={28} tracking={-.7}/>
    <div style={{opacity:p(f,26,42),transform:`translateY(${(1-p(f,26,42))*25}px)`}}>
      <OfficialLogo x={90} y={1190} width={455}/>
      <div data-safe-text data-copy={copy.url} style={{position:'absolute',left:90,top:1370,font:'600 54px Inter',letterSpacing:-1,color:B.cream}}>{copy.url}</div>
    </div>
  </Screen>;
};

/** Reusable five-scene template. Props carry copy; brand and choreography stay fixed. */
export const CNARMRecruitment01:React.FC<RecruitmentProps>=(props)=>{
  const f=useCurrentFrame();
  return <AbsoluteFill style={{background:B.navy}}>
    <Sequence name="01 · Accroche" durationInFrames={100}><Hook {...props}/></Sequence>
    <AbsoluteFill style={{clipPath:`inset(${625*(1-p(f,83,99))}px 0 ${1288*(1-p(f,83,99))}px 0)`}}><Sequence name="02 · Nouvelle direction" from={84} durationInFrames={106}><Question {...props}/></Sequence></AbsoluteFill>
    <AbsoluteFill style={{clipPath:`polygon(0 0,${p(f,172,189)*120}% 0,${p(f,172,189)*120-20}% 100%,0 100%)`}}>
      <Sequence name="03 · Trajectoire" from={172} durationInFrames={108}><Journey {...props}/></Sequence>
    </AbsoluteFill>
    <AbsoluteFill style={{clipPath:`circle(${p(f,262,279)*190}% at 74.07% 51.56%)`}}>
      <Sequence name="04 · Accompagnement" from={262} durationInFrames={108}><Support {...props}/></Sequence>
    </AbsoluteFill>
    <Wipe f={f} start={352} end={369}><Sequence name="05 · Agir" from={352}><Action {...props}/></Sequence></Wipe>
  </AbsoluteFill>;
};
