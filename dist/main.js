(()=>{"use strict";class t{constructor(){this.nextRotationLeftMove={left:"bottom",bottom:"right",right:"top",top:"left"},this.nextRotationRightMove={left:"top",top:"right",right:"bottom",bottom:"left"}}moveDown(){this.coordinates=this.coordinates.map((t=>{const{row:o}=t;return{...t,row:o+1}}))}moveRight(){this.coordinates=this.coordinates.map((t=>{const{column:o}=t;return{...t,column:o+1}}))}moveLeft(){this.coordinates=this.coordinates.map((t=>{const{column:o}=t;return{...t,column:o-1}}))}validMoveRight(t){return this.coordinates.filter((t=>t.side.includes("right"))).every((o=>{const{row:i,column:e}=o,n=e+1;if(n<=9)return"black"===t[i][n]}))}validMoveLeft(t){return this.coordinates.filter((t=>t.side.includes("left"))).every((o=>{const{row:i,column:e}=o,n=e-1;if(n>=0)return"black"===t[i][n]}))}clearCoordinates(t){const o=this.determineCoordinatesToClear(t);return this.coordinates=this.coordinates.filter((o=>{const{row:i}=o;return!t.includes(i)})),o}determineCoordinatesToClear(t){return this.coordinates.filter((o=>{const{row:i}=o;return t.includes(i)}))}}class o extends t{constructor(){super(),this.coordinates=[{row:0,column:4,side:["top","left"]},{row:0,column:5,side:["top","right"]},{row:1,column:4,side:["bottom","left"]},{row:1,column:5,side:["bottom","right"]}],this.color="yellow"}validMoveDown(t){return 0!==this.coordinates.length&&this.coordinates.filter((t=>t.side.includes("bottom"))).every((o=>{const{row:i,column:e}=o,n=i+1;return n<=19&&"black"===t[n][e]}))}rotateRight(){}rotateLeft(){}}class i extends t{constructor(){super(),this.coordinates=[{row:0,column:3,side:["top","bottom","left"]},{row:0,column:4,side:["top","bottom"]},{row:0,column:5,side:["top","bottom"]},{row:0,column:6,side:["top","bottom","right"]}],this.anchorPointDirection="left",this.color="orange",this.nextRotationRightMoveMethod={left:this.calcRotationLeftToTop.bind(this),top:this.calcRotationTopToRight.bind(this),right:this.calcRotationRightToBottom.bind(this),bottom:this.calcRotationBottomToLeft.bind(this)},this.nextRotationLeftMoveMethod={left:this.calcRotationLeftToBottom.bind(this),bottom:this.calcRotationBottomToRight.bind(this),right:this.calcRotationRightToTop.bind(this),top:this.calcRotationTopToLeft.bind(this)}}validMoveDown(t){return 0!==this.coordinates.length&&this.coordinates.filter((t=>t.side.includes("bottom"))).every((o=>{const{row:i,column:e}=o,n=i+1;return n<=19&&"black"===t[n][e]}))}rotateLeft(t){if(!this.validRotateLeft(t))return!1;this.coordinates=this.nextRotationLeftMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationLeftMove[this.anchorPointDirection]}validRotateLeft(t){const o=this.nextRotationLeftMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationLeftToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>({column:i,row:o-e,side:t.side.map((t=>this.nextRotationLeftMove[t]))})))}calcRotationBottomToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>({row:o,column:i-e,side:t.side.map((t=>this.nextRotationLeftMove[t]))})))}calcRotationRightToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>({column:i,row:o+e,side:t.side.map((t=>this.nextRotationLeftMove[t]))})))}calcRotationTopToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>({row:o,column:i+e,side:t.side.map((t=>this.nextRotationLeftMove[t]))})))}rotateRight(t){this.validRotateRight(t)&&(this.coordinates=this.nextRotationRightMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationRightMove[this.anchorPointDirection])}validRotateRight(t){const o=this.nextRotationRightMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationLeftToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>({column:i,row:o+e,side:t.side.map((t=>this.nextRotationRightMove[t]))})))}calcRotationTopToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>({row:o,column:i-e,side:t.side.map((t=>this.nextRotationRightMove[t]))})))}calcRotationRightToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>({column:i,row:o-e,side:t.side.map((t=>this.nextRotationRightMove[t]))})))}calcRotationBottomToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>({row:o,column:i+e,side:t.side.map((t=>this.nextRotationRightMove[t]))})))}}class e extends t{constructor(){super(),this.coordinates=[{row:0,column:4,side:["left","top"]},{row:1,column:4,side:["left","bottom"]},{row:1,column:5,side:["bottom"]},{row:1,column:6,side:["right","bottom"]}],this.color="blue",this.anchorPointDirection="top",this.nextRotationLeftMoveMethod={top:this.calcRotationTopToLeft.bind(this),left:this.calcRotationLeftToBottom.bind(this),bottom:this.calcRotationBottomToRight.bind(this),right:this.calcRotationRightToTop.bind(this)},this.nextRotationRightMoveMethod={left:this.calcRotationLeftToTop.bind(this),top:this.calcRotationTopToRight.bind(this),right:this.calcRotationRightToBottom.bind(this),bottom:this.calcRotationBottomToLeft.bind(this)}}validMoveDown(t){if(0===this.coordinates.length)return!1;const o=this.coordinates.filter((t=>t.side.includes("bottom"))).every((o=>{const{row:i,column:e}=o,n=i+1;return n<=19&&"black"===t[n][e]})),i=this.coordinates[0],{row:e,column:n}=i,s=!i.side.includes("right")||"black"===t[e+1][n];return o&&s}rotateRight(t){this.validRotateRight(t)&&(this.coordinates=this.nextRotationRightMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationRightMove[this.anchorPointDirection])}validRotateRight(t){const o=this.nextRotationRightMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationTopToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-1:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o+n}}))}calcRotationRightToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o-n}}))}calcRotationBottomToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-1:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o-n}}))}calcRotationLeftToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o+n}}))}rotateLeft(t){this.validRotateLeft(t)&&(this.coordinates=this.nextRotationLeftMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationLeftMove[this.anchorPointDirection])}validRotateLeft(t){const o=this.nextRotationLeftMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.slice(1).every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationTopToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-1:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o-n}}))}calcRotationLeftToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o-n}}))}calcRotationBottomToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-1:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o+n}}))}calcRotationRightToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o+n}}))}}class n extends t{constructor(){super(),this.coordinates=[{row:0,column:6,side:["right","top"]},{row:1,column:6,side:["right","bottom"]},{row:1,column:5,side:["bottom"]},{row:1,column:4,side:["left","bottom"]}],this.color="green",this.anchorPointDirection="top",this.nextRotationLeftMoveMethod={top:this.calcRotationTopToLeft.bind(this),left:this.calcRotationLeftToBottom.bind(this),bottom:this.calcRotationBottomToRight.bind(this),right:this.calcRotationRightToTop.bind(this)},this.nextRotationRightMoveMethod={left:this.calcRotationLeftToTop.bind(this),top:this.calcRotationTopToRight.bind(this),right:this.calcRotationRightToBottom.bind(this),bottom:this.calcRotationBottomToLeft.bind(this)}}validMoveDown(t){if(0===this.coordinates.length)return!1;const o=this.coordinates.filter((t=>t.side.includes("bottom"))).every((o=>{const{row:i,column:e}=o,n=i+1;return n<=19&&"black"===t[n][e]})),i=this.coordinates[0],{row:e,column:n}=i,s=!i.side.includes("left")||"black"===t[e+1][n];return o&&s}rotateRight(t){if(!this.validRotateRight(t))return!1;this.coordinates=this.nextRotationRightMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationRightMove[this.anchorPointDirection]}validRotateRight(t){const o=this.nextRotationRightMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationTopToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-1:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o-n}}))}calcRotationRightToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o-n}}))}calcRotationBottomToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-1:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o+n}}))}calcRotationLeftToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o+n}}))}rotateLeft(t){if(!this.validRotateLeft(t))return!1;this.coordinates=this.nextRotationLeftMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationLeftMove[this.anchorPointDirection]}validRotateLeft(t){const o=this.nextRotationLeftMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationTopToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-1:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o+n}}))}calcRotationLeftToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o-n}}))}calcRotationBottomToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-1:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o-n}}))}calcRotationRightToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o+n}}))}}class s extends t{constructor(){super(),this.coordinates=[{row:0,column:5,side:["top"]},{row:1,column:4,side:["bottom","left"]},{row:1,column:5,side:["bottom"]},{row:1,column:6,side:["bottom","right"]}],this.color="purple",this.anchorPointDirection="top",this.nextRotationLeftMoveMethod={top:this.calcRotationTopToLeft.bind(this),left:this.calcRotationLeftToBottom.bind(this),bottom:this.calcRotationBottomToRight.bind(this),right:this.calcRotationRightToTop.bind(this)},this.nextRotationRightMoveMethod={left:this.calcRotationLeftToTop.bind(this),top:this.calcRotationTopToRight.bind(this),right:this.calcRotationRightToBottom.bind(this),bottom:this.calcRotationBottomToLeft.bind(this)}}validMoveDown(t){if(0===this.coordinates.length)return!1;if(!this.coordinates.filter((t=>t.side.includes("bottom"))).every((o=>{const{row:i,column:e}=o,n=i+1;return n<=19&&"black"===t[n][e]})))return!1;const o=this.coordinates[0],{row:i,column:e}=o;return(!o.side.includes("left")&&!o.side.includes("right")||"black"===t[i+1][e])&&(!o.side.includes("bottom")||t[i][e-1]&&"black"===t[i][e+1])}rotateRight(t){if(!this.validRotateRight(t))return!1;this.coordinates=this.nextRotationRightMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationRightMove[this.anchorPointDirection]}validRotateRight(t){const o=this.nextRotationRightMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationTopToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o+n}}))}calcRotationRightToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o-n}}))}calcRotationBottomToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o-n}}))}calcRotationLeftToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o+n}}))}rotateLeft(t){if(!this.validRotateLeft(t))return!1;this.coordinates=this.nextRotationLeftMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationLeftMove[this.anchorPointDirection]}validRotateLeft(t){const o=this.nextRotationLeftMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationTopToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o-n}}))}calcRotationLeftToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o-n}}))}calcRotationBottomToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>0?1:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o+n}}))}calcRotationRightToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?1:e,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o+n}}))}}class r extends t{constructor(){super(),this.coordinates=[{row:0,column:5,side:["top"]},{row:0,column:4,side:["top","left"]},{row:1,column:5,side:["bottom"]},{row:1,column:6,side:["bottom","right"]}],this.color="red",this.anchorPointDirection="top",this.nextRotationLeftMoveMethod={top:this.calcRotationTopToLeft.bind(this),left:this.calcRotationLeftToBottom.bind(this),bottom:this.calcRotationBottomToRight.bind(this),right:this.calcRotationRightToTop.bind(this)},this.nextRotationRightMoveMethod={left:this.calcRotationLeftToTop.bind(this),top:this.calcRotationTopToRight.bind(this),right:this.calcRotationRightToBottom.bind(this),bottom:this.calcRotationBottomToLeft.bind(this)}}validMoveDown(t){if(0===this.coordinates.length)return!1;if(!this.coordinates.filter((t=>t.side.includes("bottom"))).every((o=>{const{row:i,column:e}=o,n=i+1;return n<=19&&"black"===t[n][e]})))return!1;const o=this.coordinates[0],{row:i,column:e,side:n}=o,[s]=n;return"top"===s?"black"===t[i+1][e-1]:"right"===s?"black"===t[i+1][e]:"bottom"===s?"black"===t[i][e-1]:"left"===s?"black"===t[i+1][e+1]:void 0}rotateLeft(t){if(!this.validRotateLeft(t))return!1;this.coordinates=this.nextRotationLeftMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationLeftMove[this.anchorPointDirection]}validRotateLeft(t){const o=this.nextRotationLeftMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationTopToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>1?1:0;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o-n}}))}calcRotationLeftToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>1?1:0,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o-n}}))}calcRotationBottomToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>1?1:0;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o+n}}))}calcRotationRightToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>1?1:0,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o+n}}))}rotateRight(t){if(!this.validRotateRight(t))return!1;this.coordinates=this.nextRotationRightMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationRightMove[this.anchorPointDirection]}validRotateRight(t){const o=this.nextRotationRightMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationTopToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>1?1:0;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o+n}}))}calcRotationRightToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>1?1:0,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o-n}}))}calcRotationBottomToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>1?1:0;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o-n}}))}calcRotationLeftToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>1?1:0,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o+n}}))}}class c extends t{constructor(){super(),this.coordinates=[{row:0,column:5,side:["top"]},{row:0,column:6,side:["top","right"]},{row:1,column:5,side:["bottom"]},{row:1,column:4,side:["bottom","left"]}],this.color="pink",this.anchorPointDirection="top",this.nextRotationLeftMoveMethod={top:this.calcRotationTopToLeft.bind(this),left:this.calcRotationLeftToBottom.bind(this),bottom:this.calcRotationBottomToRight.bind(this),right:this.calcRotationRightToTop.bind(this)},this.nextRotationRightMoveMethod={left:this.calcRotationLeftToTop.bind(this),top:this.calcRotationTopToRight.bind(this),right:this.calcRotationRightToBottom.bind(this),bottom:this.calcRotationBottomToLeft.bind(this)}}validMoveDown(t){if(0===this.coordinates.length)return!1;if(!this.coordinates.filter((t=>t.side.includes("bottom"))).every((o=>{const{row:i,column:e}=o,n=i+1;return n<=19&&"black"===t[n][e]})))return!1;const o=this.coordinates[0],{row:i,column:e}=o;return o.side.includes("top")?"black"===t[i+1][e+1]:o.side.includes("right")?"black"===t[i+1][e-1]:o.side.includes("bottom")?"black"===t[i][e+1]:!!o.side.includes("left")&&"black"===t[i+1][e]}rotateLeft(t){if(!this.validRotateLeft(t))return!1;this.coordinates=this.nextRotationLeftMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationLeftMove[this.anchorPointDirection]}validRotateLeft(t){const o=this.nextRotationLeftMoveMethod[this.anchorPointDirection]();return!!o.every((t=>{const{row:o,column:i}=t;return o>=0&&o<=19&&i>=0&&i<=9}))&&o.every((o=>{const{row:i,column:e}=o;return"black"===t[i][e]}))}calcRotationTopToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>1?1:0;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o+n}}))}calcRotationLeftToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>1?1:0,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i+s,row:o-n}}))}calcRotationBottomToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>1?1:0;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o-n}}))}calcRotationRightToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>1?1:0,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationLeftMove[t])),column:i-s,row:o+n}}))}rotateRight(){this.coordinates=this.nextRotationRightMoveMethod[this.anchorPointDirection](),this.anchorPointDirection=this.nextRotationRightMove[this.anchorPointDirection]}validRotateRight(){}calcRotationTopToRight(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>1?1:0;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o-n}}))}calcRotationRightToBottom(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>1?1:0,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o-n}}))}calcRotationBottomToLeft(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>0?e-2:e,s=e>1?1:0;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i+s,row:o+n}}))}calcRotationLeftToTop(){const t=this.coordinates[0],{row:o,column:i}=t;return this.coordinates.map(((t,e)=>{const n=e>1?1:0,s=e>0?e-2:e;return{side:t.side.map((t=>this.nextRotationRightMove[t])),column:i-s,row:o+n}}))}}class a{constructor(t){const a=[];for(let t=0;t<20;t++){const t=[];for(let o=0;o<10;o++)t.push("black");a.push(t)}this.document=document,this.gamePaused=!1,this.gameBoard=a,this.currentPiece=null,this.droppedPieces=[],this.stage=t,this.gameOver=!1,this.currentScore=0,this.interval=setInterval((()=>this.currentPieceDefaultMove()),500),this.allPieces=[new o,new i,new e,new n,new s,new r,new c]}currentPieceDefaultMove(){this.isCurrentPieceStuck()&&this.checkGameOver(),this.isCurrentPieceStuck()&&this.gameOver&&this.restartGame(document),this.isCurrentPieceStuck()||this.gameOver?this.handleCurrentPieceStuck():(this.clearOldTetrominoPosition(),this.currentPiece.moveDown(),this.updateGrid(),this.render())}pauseGame(){this.gamePaused?(this.interval=setInterval((()=>this.currentPieceDefaultMove()),500),this.gamePaused=!1):(clearInterval(this.interval),this.gamePaused=!0)}render(){this.stage.removeAllChildren(),this.gameBoard.forEach(((t,o)=>{t.forEach(((t,i)=>{const e=new createjs.Shape;e.graphics.beginFill(t).drawRect(30*i,30*o,30,30),this.stage.addChild(e)}))})),this.stage.update()}updateGrid(){this.currentPiece.coordinates.forEach((t=>{const{row:o,column:i}=t;this.gameBoard[o][i]=this.currentPiece.color}))}startGame(){this.createNewPiece()}isCurrentPieceStuck(){return!this.currentPiece.validMoveDown(this.gameBoard)}createNewPiece(){const t=Math.floor(Math.random()*this.allPieces.length),o=this.allPieces[t];this.currentPiece=o,this.droppedPieces.push(o)}calculateCompletedRows(){const t=[];return this.gameBoard.forEach(((o,i)=>{o.every((t=>"black"!==t))&&t.push(i)})),t}calculateScore(){const t=this.calculateCompletedRows().length,o=t<4?100*t:200*t;this.currentScore+=o}clearGameBoardRows(t){this.droppedPieces.forEach((o=>{for(o.clearCoordinates(t).forEach((t=>{const{row:o,column:i}=t;this.gameBoard[o][i]="black"}));o.validMoveDown(this.gameBoard);)o.coordinates.forEach((t=>{const{row:o,column:i}=t;this.gameBoard[o][i]="black"})),o.moveDown(),o.coordinates.forEach((t=>{const{row:i,column:e}=t;this.gameBoard[i][e]=o.color}))}))}clearOldTetrominoPosition(){this.currentPiece.coordinates.forEach((t=>{const{row:o,column:i}=t;this.gameBoard[o][i]="black"}))}checkGameOver(){const t=this.currentPiece.coordinates.filter((t=>t.side.includes("top")));for(let o=0;o<t.length;o++){const i=t[o],{row:e}=i;if(0===e){this.gameOver=!0,this.pauseGame();break}}}restartGame(t){if(this.gameOver){this.pauseGame();const o=t.createElement("h1"),i=t.createTextNode("GAME OVER");o.appendChild(i),t.body.appendChild(o);const e=t.createElement("button");return e.innerHTML="RESTART GAME",e.addEventListener("click",(()=>{init(),o.removeChild(i),t.body.removeChild(e)})),void t.body.appendChild(e)}}executeMove(t){39===t.keyCode&&this.currentPiece.validMoveRight(this.gameBoard)?(this.clearOldTetrominoPosition(),this.currentPiece.moveRight()):37===t.keyCode&&this.currentPiece.validMoveLeft(this.gameBoard)?(this.clearOldTetrominoPosition(),this.currentPiece.moveLeft()):40===t.keyCode&&this.currentPiece.validMoveDown(this.gameBoard)?(this.clearOldTetrominoPosition(),this.currentPiece.moveDown()):38===t.keyCode?(this.clearOldTetrominoPosition(),this.currentPiece.rotateRight(this.gameBoard)):88===t.keyCode&&(this.clearOldTetrominoPosition(),this.currentPiece.rotateLeft(this.gameBoard)),this.updateGrid(),this.render()}handleCurrentPieceStuck(){if(!this.isCurrentPieceStuck())return;const t=this.calculateCompletedRows();t.length>0&&(this.calculateScore(),this.clearGameBoardRows(t)),this.checkGameOver(),this.createNewPiece(),this.updateGrid(),this.render(),console.log(this)}handleKeyPress(t){t.preventDefault(),this.gamePaused||this.executeMove(t)}}let h,d;window.init=()=>{d=new createjs.Stage("tetris"),h=new a(d,document),h.startGame();const t=new createjs.Shape;t.graphics.beginFill("#000000").drawRect(0,0,300,600),d.addChild(t),h.updateGrid(),h.render(),h.calculateScore();const o=document.createElement("h1"),i=document.createTextNode(`Score: ${h.currentScore}`);o.appendChild(i),document.body.appendChild(o);const e=document.createElement("button");e.innerHTML="PAUSE GAME",e.addEventListener("click",(()=>h.pauseGame())),document.body.appendChild(e),h.gameOver&&h.gamePaused||document.addEventListener("keydown",(t=>h.handleKeyPress(t))),console.log(h)},window.onload=init})();