import fs from 'node:fs';
const b=JSON.parse(fs.readFileSync('briefs/demo-01.json','utf8'));
function check(ok,msg){if(!ok)throw Error(msg);}
check(b.width===1080&&b.height===1920&&b.fps===30&&b.durationInFrames===450,'Incorrect video settings');
check(Array.isArray(b.scenes)&&b.scenes.length===5,'Expected 5 scenes');
check(b.scenes[0].from===0&&b.scenes.at(-1).to===449,'Invalid timeline endpoints');
for(let i=0;i<b.scenes.length;i++){let s=b.scenes[i];check(Number.isInteger(s.from)&&Number.isInteger(s.to)&&s.to>=s.from,'Invalid scene '+s.id);if(i)check(s.from===b.scenes[i-1].to+1,'Gap/overlap in narrative scenes');}
console.log('Brief validated: 450 frames, 5 scenes, 1080x1920, 30fps');
