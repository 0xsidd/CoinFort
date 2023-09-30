/*! For license information please see main.0a1b9fe8.js.LICENSE.txt */
  -webkit-text-fill-color: ${e=>{let{theme:a}=e;return a.materialTextDisabled}};
  color: ${e=>{let{theme:a}=e;return a.materialTextDisabled}};
  text-shadow: 1px 1px ${e=>{let{theme:a}=e;return a.materialTextDisabledShadow}};
  /* filter: grayscale(100%); */
`,jc=function(){let{background:e="material",color:a="materialText"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Qa`
  box-sizing: border-box;
  display: inline-block;
  background: ${a=>{let{theme:c}=a;return c[e]}};
  color: ${e=>{let{theme:c}=e;return c[a]}};
`},qc=e=>{let{mainColor:a="black",secondaryColor:c="transparent",pixelSize:d=2}=e;return Qa`
  background-image: ${[`linear-gradient(\n      45deg,\n      ${a} 25%,\n      transparent 25%,\n      transparent 75%,\n      ${a} 75%\n    )`,`linear-gradient(\n      45deg,\n      ${a} 25%,\n      transparent 25%,\n      transparent 75%,\n      ${a} 75%\n    )`].join(",")};
  background-color: ${c};
  background-size: ${`${2*d}px ${2*d}px`};
  background-position: 0 0, ${`${d}px ${d}px`};
`},zc=()=>Qa`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${e=>{let{theme:a}=e;return a.materialText}};
  background: ${e=>{let{$disabled:a,theme:c}=e;return a?c.flatLight:c.canvas}};
  border: 2px solid ${e=>{let{theme:a}=e;return a.canvas}};
  outline: 2px solid ${e=>{let{theme:a}=e;return a.flatDark}};
  outline-offset: -4px;
`,Qc={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Hc=function(){let{invert:e=!1,style:a="button"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const c=e?"bottomRightOuter":"topLeftOuter",d=e?"bottomRightInner":"topLeftInner",f=e?"topLeftInner":"bottomRightInner",b=e?"topLeftOuter":"bottomRightOuter";return Qa`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${e=>{let{theme:d}=e;return d[Qc[a][c]]}};
    border-top-color: ${e=>{let{theme:d}=e;return d[Qc[a][c]]}};
    border-right-color: ${e=>{let{theme:c}=e;return c[Qc[a][b]]}};
    border-bottom-color: ${e=>{let{theme:c}=e;return c[Qc[a][b]]}};
    box-shadow: ${e=>{let{theme:c,shadow:b}=e;return(e=>{let{theme:a,topLeftInner:c,bottomRightInner:d,hasShadow:f=!1,hasInsetShadow:b=!1}=e;return[!!f&&Nc,!!b&&Dc,null!==c&&`inset 1px 1px 0px 1px ${a[c]}`,null!==d&&`inset -1px -1px 0 1px ${a[d]}`].filter(Boolean).join(", ")})({theme:c,topLeftInner:Qc[a][d],bottomRightInner:Qc[a][f],hasShadow:b})}};
  `},$c=()=>Qa`
  outline: 2px dotted ${e=>{let{theme:a}=e;return a.materialText}};
`,Gc="undefined"!==typeof btoa?btoa:e=>Fc.from(e).toString("base64"),Kc=function(e){return`url(data:image/svg+xml;base64,${Gc(`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g transform="rotate(${arguments.length>1&&void 0!==arguments[1]?arguments[1]:0} 13 13)">\n      <polygon fill="${e}" points="6,10 20,10 13,17"/>\n    </g>\n  </svg>`)})`},Vc=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return Qa`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${a=>{let{theme:c}=a;return qc({mainColor:"flat"===e?c.flatLight:c.material,secondaryColor:"flat"===e?c.canvas:c.borderLightest})}}
  }
  ::-webkit-scrollbar-thumb {
    ${jc()}
    ${"flat"===e?zc():Hc({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${e=>{let{theme:a}=e;return a.material}};
  }
  ::-webkit-scrollbar-button {
    ${jc()}
    ${"flat"===e?zc():Hc({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${"default"===e?Hc({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${e=>{let{theme:a}=e;return Kc(a.materialText,90)}};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${e=>{let{theme:a}=e;return Kc(a.materialText,270)}};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${e=>{let{theme:a}=e;return Kc(a.materialText,180)}};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${e=>{let{theme:a}=e;return Kc(a.materialText,0)}};
  }
`},Wc=Ga.a`
  color: ${e=>{let{theme:a}=e;return a.anchor}};
  font-size: inherit;
  text-decoration: ${e=>{let{underline:a}=e;return a?"underline":"none"}};
  &:visited {
    color: ${e=>{let{theme:a}=e;return a.anchorVisited}};
  }
`;(0,d.forwardRef)(((e,a)=>{let{children:c,underline:f=!0,...b}=e;return d.createElement(Wc,{ref:a,underline:f,...b},c)})).displayName="Anchor";const Yc=Ga.header`
  ${Hc()};
  ${jc()};

  position: ${e=>{var a;return null!==(a=e.position)&&void 0!==a?a:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Zc=(0,d.forwardRef)(((e,a)=>{let{children:c,fixed:f=!0,position:b="fixed",...t}=e;return d.createElement(Yc,{fixed:f,position:!1!==f?b:void 0,ref:a,...t},c)}));Zc.displayName="AppBar";const Jc=()=>{};function Xc(e,a,c){return null!==c&&e>c?c:null!==a&&e<a?a:e}function ed(e,a,c){const d=Math.round((e-c)/a)*a+c;return Number(d.toFixed(function(e){if(Math.abs(e)<1){const a=e.toExponential().split("e-"),c=a[0].split(".")[1];return(c?c.length:0)+parseInt(a[1],10)}const a=e.toString().split(".")[1];return a?a.length:0}(a)))}function ad(e){return"number"===typeof e?`${e}px`:e}const cd=Ga.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${e=>{let{size:a}=e;return`\n    height: ${a};\n    width: ${a};\n    `}}
  border-radius: ${e=>{let{square:a}=e;return a?0:"50%"}};
  overflow: hidden;
  ${e=>{let{noBorder:a,theme:c}=e;return!a&&`\n    border-top: 2px solid ${c.borderDark};\n    border-left: 2px solid ${c.borderDark};\n    border-bottom: 2px solid ${c.borderLightest};\n    border-right: 2px solid ${c.borderLightest};\n    background: ${c.material};\n  `}}
  ${e=>{let{src:a}=e;return!a&&"\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    font-weight: bold;\n    font-size: 1rem;\n  "}}
`,dd=Ga.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,fd=(0,d.forwardRef)(((e,a)=>{let{alt:c="",children:f,noBorder:b=!1,size:t=35,square:r=!1,src:n,...i}=e;return d.createElement(cd,{noBorder:b,ref:a,size:ad(t),square:r,src:n,...i},n?d.createElement(dd,{src:n,alt:c}):f)}));fd.displayName="Avatar";const bd={sm:"28px",md:"36px",lg:"44px"},td=Qa`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${e=>{let{size:a="md"}=e;return bd[a]}};
  width: ${e=>{let{fullWidth:a,size:c="md",square:d}=e;return a?"100%":d?bd[c]:"auto"}};
  padding: ${e=>{let{square:a}=e;return a?0:"0 10px"}};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${e=>{let{disabled:a}=e;return!a&&"2px"}};
  }
  padding-top: ${e=>{let{active:a,disabled:c}=e;return a&&!c&&"2px"}};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,rd=Ga.button`
  ${e=>{let{active:a,disabled:c,primary:d,theme:f,variant:b}=e;return"flat"===b?Qa`
          ${zc()}
          ${d?`\n          border: 2px solid ${f.checkmark};\n            outline: 2px solid ${f.flatDark};\n            outline-offset: -4px;\n          `:`\n          border: 2px solid ${f.flatDark};\n            outline: 2px solid transparent;\n            outline-offset: -4px;\n          `}
          &:focus:after, &:active:after {
            ${!a&&!c&&$c}
            outline-offset: -4px;
          }
        `:"menu"===b||"thin"===b?Qa`
          ${jc()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!c&&!a&&Hc({style:"buttonThin"})}
          }
          &:active {
            ${!c&&Hc({style:"buttonThinPressed"})}
          }
          ${a&&Hc({style:"buttonThinPressed"})}
          ${c&&Uc()}
        `:Qa`
          ${jc()};
          border: none;
          ${c&&Uc()}
          ${a?qc({mainColor:f.material,secondaryColor:f.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${d?Qa`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${f.borderDarkest};
                `:Qa`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Hc(a?{style:"raised"===b?"window":"button",invert:!0}:{style:"raised"===b?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!c&&Hc({style:"raised"===b?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!a&&!c&&$c}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${a?"0":"1px"};
          }
        `}}
  ${td}
`,nd=(0,d.forwardRef)(((e,a)=>{let{onClick:c,disabled:f=!1,children:b,type:t="button",fullWidth:r=!1,size:n="md",square:i=!1,active:o=!1,onTouchStart:x=Jc,primary:s=!1,variant:l="default",...u}=e;return d.createElement(rd,{active:o,disabled:f,$disabled:f,fullWidth:r,onClick:f?void 0:c,onTouchStart:x,primary:s,ref:a,size:n,square:i,type:t,variant:l,...u},b)}));function id(e){let{defaultValue:a,onChange:c,onChangePropName:f="onChange",readOnly:b,value:t,valuePropName:r="value"}=e;const n=void 0!==t,[i,o]=(0,d.useState)(a),x=(0,d.useCallback)((e=>{n||o(e)}),[n]);if(n&&"function"!==typeof c&&!b){const e=`Warning: You provided a \`${r}\` prop to a component without an \`${f}\` handler.${"value"===r?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${f}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${f}\` function that updates \`${r}\`.`}`;console.warn(e)}return[n?t:i,x]}nd.displayName="Button";const od=Ga.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>bd[e.size]};
  width: ${e=>e.square?bd[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>bd[e.size]};
  color: ${e=>{let{theme:a}=e;return a.materialText}};
  pointer-events: ${e=>{let{$disabled:a}=e;return a?"none":"auto"}};
  font-weight: ${e=>{let{primary:a}=e;return a?"bold":"normal"}};
  &:hover {
    ${e=>{let{theme:a,$disabled:c}=e;return!c&&`\n        color: ${a.materialTextInvert};\n        background: ${a.hoverBackground};\n      `}}

    cursor: default;
  }
  ${e=>e.$disabled&&Uc()}
`,xd=(0,d.forwardRef)(((e,a)=>{let{size:c="lg",disabled:f,square:b,children:t,onClick:r,primary:n,...i}=e;return d.createElement(od,{$disabled:f,size:c,square:b,onClick:f?void 0:r,primary:n,role:"menuitem",ref:a,"aria-disabled":f,...i},t)}));xd.displayName="MenuListItem";const sd=Ga.ul.attrs((()=>({role:"menu"})))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Hc({style:"window"})}
  ${jc()}
  ${e=>e.inline&&"\n    display: inline-flex;\n    align-items: center;\n  "}
  list-style: none;
  position: relative;
`;sd.displayName="MenuList";const ld=20,ud=Ga.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ld}px;
  height: ${ld}px;
  opacity: 0;
  z-index: -1;
`,hd=Ga.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${e=>{let{$disabled:a}=e;return a?"auto":"pointer"}};
  user-select: none;
  font-size: 1rem;
  color: ${e=>{let{theme:a}=e;return a.materialText}};
  ${e=>e.$disabled&&Uc()}

  ${od} & {
    margin: 0;
    height: 100%;
  }
  ${od}:hover & {
    ${e=>{let{$disabled:a,theme:c}=e;return!a&&Qa`
        color: ${c.materialTextInvert};
      `}};
  }
`,pd=Ga.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ud}:focus ~ & {
    ${$c}
  }
  ${ud}:not(:disabled) ~ &:active {
    ${$c}
  }
`,md=Ga.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${e=>{let{theme:a}=e;return a.borderDark}};
  border-top-color: ${e=>{let{theme:a}=e;return a.borderDark}};
  border-right-color: ${e=>{let{theme:a}=e;return a.borderLightest}};
  border-bottom-color: ${e=>{let{theme:a}=e;return a.borderLightest}};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${e=>{let{theme:a}=e;return a.borderDarkest}};
    border-top-color: ${e=>{let{theme:a}=e;return a.borderDarkest}};
    border-right-color: ${e=>{let{theme:a}=e;return a.borderLight}};
    border-bottom-color: ${e=>{let{theme:a}=e;return a.borderLight}};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${Dc};`}
  }
`,gd=Ga.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Vc()}
`,yd=(0,d.forwardRef)(((e,a)=>{let{children:c,shadow:f=!0,...b}=e;return d.createElement(md,{ref:a,shadow:f,...b},d.createElement(gd,null,c))}));yd.displayName="ScrollView";const vd=Qa`
  width: ${ld}px;
  height: ${ld}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,_d=Ga(md)`
  ${vd}
  width: ${ld}px;
  height: ${ld}px;
  background: ${e=>{let{$disabled:a,theme:c}=e;return a?c.material:c.canvas}};
  &:before {
    box-shadow: none;
  }
`,wd=Ga.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${e=>{let{$disabled:a,theme:c}=e;return a?c.flatLight:c.canvas}};
  ${vd}
  width: ${16}px;
  height: ${16}px;
  outline: none;
  border: 2px solid ${e=>{let{theme:a}=e;return a.flatDark}};
  background: ${e=>{let{$disabled:a,theme:c}=e;return a?c.flatLight:c.canvas}};
`,Ad=Ga.span.attrs((()=>({"data-testid":"checkmarkIcon"})))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${e=>{let{$disabled:a,theme:c}=e;return a?c.checkmarkDisabled:c.checkmark}};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,Ed=Ga.span.attrs((()=>({"data-testid":"indeterminateIcon"})))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${e=>{let{$disabled:a,theme:c}=e;return qc({mainColor:a?c.checkmarkDisabled:c.checkmark})}}
    background-position: 0px 0px, 2px 2px;
  }
`,Md={flat:wd,default:_d},Ld=(0,d.forwardRef)(((e,a)=>{let{checked:c,className:f="",defaultChecked:b=!1,disabled:t=!1,indeterminate:r=!1,label:n="",onChange:i=Jc,style:o={},value:x,variant:s="default",...l}=e;var u;const[h,p]=id({defaultValue:b,onChange:i,readOnly:null!==(u=l.readOnly)&&void 0!==u?u:t,value:c}),m=(0,d.useCallback)((e=>{const a=e.target.checked;p(a),i(e)}),[i,p]),g=Md[s];let y=null;return r?y=Ed:h&&(y=Ad),d.createElement(hd,{$disabled:t,className:f,style:o},d.createElement(ud,{disabled:t,onChange:t?void 0:m,readOnly:t,type:"checkbox",value:x,checked:h,"data-indeterminate":r,ref:a,...l}),d.createElement(g,{$disabled:t,role:"presentation"},y&&d.createElement(y,{$disabled:t,variant:s})),n&&d.createElement(pd,null,n))}));Ld.displayName="Checkbox";const Sd=Ga.div`
  ${e=>{let{orientation:a,theme:c,size:d="100%"}=e;return"vertical"===a?`\n    height: ${ad(d)};\n    border-left: 2px solid ${c.borderDark};\n    border-right: 2px solid ${c.borderLightest};\n    margin: 0;\n    `:`\n    width: ${ad(d)};\n    border-bottom: 2px solid ${c.borderLightest};\n    border-top: 2px solid ${c.borderDark};\n    margin: 0;\n    `}}
`;Sd.displayName="Separator";const Cd=Ga(rd)`
  padding-left: 8px;
`,Id=Ga(Sd)`
  height: 21px;
  position: relative;
  top: 0;
`,kd=Ga.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Pd=Ga.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${e=>{let{color:a}=e;return a}};

  ${e=>{let{$disabled:a}=e;return a?Qa`
          border: 2px solid ${e=>{let{theme:a}=e;return a.materialTextDisabled}};
          filter: drop-shadow(
            1px 1px 0px ${e=>{let{theme:a}=e;return a.materialTextDisabledShadow}}
          );
        `:Qa`
          border: 2px solid ${e=>{let{theme:a}=e;return a.materialText}};
        `}}
  ${kd}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${$c}
    outline-offset: -8px;
  }
`,Bd=Ga.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${e=>{let{$disabled:a}=e;return a?Qa`
          border-top: 6px solid ${e=>{let{theme:a}=e;return a.materialTextDisabled}};
          filter: drop-shadow(
            1px 1px 0px ${e=>{let{theme:a}=e;return a.materialTextDisabledShadow}}
          );
        `:Qa`
          border-top: 6px solid ${e=>{let{theme:a}=e;return a.materialText}};
        `}}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${e=>{let{variant:a}=e;return"flat"===a?"6px":"8px"}};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`;(0,d.forwardRef)(((e,a)=>{let{value:c,defaultValue:f,onChange:b=Jc,disabled:t=!1,variant:r="default",...n}=e;var i;const[o,x]=id({defaultValue:f,onChange:b,readOnly:null!==(i=n.readOnly)&&void 0!==i?i:t,value:c});return d.createElement(Cd,{disabled:t,as:"div",variant:r,size:"md"},d.createElement(kd,{onChange:e=>{const a=e.target.value;x(a),b(e)},readOnly:t,disabled:t,value:null!==o&&void 0!==o?o:"#008080",type:"color",ref:a,...n}),d.createElement(Pd,{$disabled:t,color:null!==o&&void 0!==o?o:"#008080",role:"presentation"}),"default"===r&&d.createElement(Id,{orientation:"vertical"}),d.createElement(Bd,{$disabled:t,variant:r}))})).displayName="ColorInput";const Rd=Ga.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${e=>{let{pixelSize:a}=e;return Qa`
    width: ${11*a}px;
    height: ${21*a}px;
    margin: ${a}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${qc({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:a})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${a}px;
      border-left: ${a}px solid var(--react95-digit-bg-color);
      border-right: ${a}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${a}px;
      border-left: ${a}px solid var(--react95-digit-primary-color);
      border-right: ${a}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${a}px;
      width: ${9*a}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${a}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${2*a}px);
      top: ${2*a}px;
      left: ${a}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${a}px;
      border-left: ${a}px solid var(--react95-digit-bg-color);
      border-right: ${a}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${a}px solid var(--react95-digit-primary-color);
      border-right: ${a}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${a}px;
      width: ${9*a}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${a}px;
    }
    span.center:after {
      bottom: ${a}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${a}px;
      border-top: ${a}px solid var(--react95-digit-bg-color);
      border-bottom: ${a}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*a}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${a}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${2*a}px);
      top: ${a}px;
      left: ${2*a}px;
    }
  `}}
`,Td=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Od=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Fd(e){let{digit:a=0,pixelSize:c=2,...f}=e;const b=Od[Number(a)].map(((e,a)=>e?`${Td[a]} active`:Td[a]));return d.createElement(Rd,{pixelSize:c,...f},b.map(((e,a)=>d.createElement("span",{className:e,key:a}))))}const Nd=Ga.div`
  ${Hc({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Dd={sm:1,md:2,lg:3,xl:4},Ud=(0,d.forwardRef)(((e,a)=>{let{value:c=0,minLength:f=3,size:b="md",...t}=e;const r=(0,d.useMemo)((()=>c.toString().padStart(f,"0").split("")),[f,c]);return d.createElement(Nd,{ref:a,...t},r.map(((e,a)=>d.createElement(Fd,{digit:e,pixelSize:Dd[b],key:a}))))}));Ud.displayName="Counter";const jd=Qa`
  display: flex;
  align-items: center;
  width: ${e=>{let{fullWidth:a}=e;return a?"100%":"auto"}};
  min-height: ${bd.md};
`,qd=Ga(md).attrs({"data-testid":"variant-default"})`
  ${jd}
  background: ${e=>{let{$disabled:a,theme:c}=e;return a?c.material:c.canvas}};
`,zd=Ga.div.attrs({"data-testid":"variant-flat"})`
  ${zc()}
  ${jd}
  position: relative;
`,Qd=Qa`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${e=>{let{theme:a}=e;return a.canvasText}};
  ${e=>{let{disabled:a,variant:c}=e;return"flat"!==c&&a&&Uc()}}
`,Hd=Ga.input`
  ${Qd}
  padding: 0 8px;
`,$d=Ga.textarea`
  ${Qd}
  padding: 8px;
  resize: none;
  ${e=>{let{variant:a}=e;return Vc(a)}}
`,Gd=(0,d.forwardRef)(((e,a)=>{let{className:c,disabled:f=!1,fullWidth:b,onChange:t=Jc,shadow:r=!0,style:n,variant:i="default",...o}=e;const x="flat"===i?zd:qd,s=(0,d.useMemo)((()=>{var e;return o.multiline?d.createElement($d,{disabled:f,onChange:f?void 0:t,readOnly:f,ref:a,variant:i,...o}):d.createElement(Hd,{disabled:f,onChange:f?void 0:t,readOnly:f,ref:a,type:null!==(e=o.type)&&void 0!==e?e:"text",variant:i,...o})}),[f,t,o,a,i]);return d.createElement(x,{className:c,fullWidth:b,$disabled:f,shadow:r,style:n},s)}));Gd.displayName="TextInput";const Kd=Ga.div`
  display: inline-flex;
  align-items: center;
`,Vd=Ga(nd)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${e=>{let{variant:a}=e;return"flat"===a?Qa`
          height: calc(50% - 1px);
        `:Qa`
          height: 50%;
        `}}
`,Wd=Ga.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${e=>{let{variant:a}=e;return"flat"===a?Qa`
          height: calc(${bd.md} - 4px);
        `:Qa`
          height: ${bd.md};
          margin-left: 2px;
        `}}
`,Yd=Ga.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${e=>{let{invert:a}=e;return a?Qa`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${e=>{let{theme:a}=e;return a.materialText}};
        `:Qa`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${e=>{let{theme:a}=e;return a.materialText}};
        `}}
  ${Vd}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${e=>{let{theme:a}=e;return a.materialTextDisabledShadow}}
    );
    ${e=>{let{invert:a}=e;return a?Qa`
            border-bottom-color: ${e=>{let{theme:a}=e;return a.materialTextDisabled}};
          `:Qa`
            border-top-color: ${e=>{let{theme:a}=e;return a.materialTextDisabled}};
          `}}
  }
`,Zd=(0,d.forwardRef)(((e,a)=>{let{className:c,defaultValue:f,disabled:b=!1,max:t,min:r,onChange:n,readOnly:i,step:o=1,style:x,value:s,variant:l="default",width:u,...h}=e;const[p,m]=id({defaultValue:f,onChange:n,readOnly:i,value:s}),g=(0,d.useCallback)((e=>{const a=parseFloat(e.target.value);m(a)}),[m]),y=(0,d.useCallback)((e=>{const a=Xc(parseFloat(((null!==p&&void 0!==p?p:0)+e).toFixed(2)),null!==r&&void 0!==r?r:null,null!==t&&void 0!==t?t:null);m(a),null===n||void 0===n||n(a)}),[t,r,n,m,p]),v=(0,d.useCallback)((()=>{void 0!==p&&(null===n||void 0===n||n(p))}),[n,p]),_=(0,d.useCallback)((()=>{y(o)}),[y,o]),w=(0,d.useCallback)((()=>{y(-o)}),[y,o]),A="flat"===l?"flat":"raised";return d.createElement(Kd,{className:c,style:{...x,width:void 0!==u?ad(u):"auto"},...h},d.createElement(Gd,{value:p,variant:l,onChange:g,disabled:b,type:"number",readOnly:i,ref:a,fullWidth:!0,onBlur:v}),d.createElement(Wd,{variant:l},d.createElement(Vd,{"data-testid":"increment",variant:A,disabled:b||i,onClick:_},d.createElement(Yd,{invert:!0})),d.createElement(Vd,{"data-testid":"decrement",variant:A,disabled:b||i,onClick:w},d.createElement(Yd,null))))}));Zd.displayName="NumberInput";const Jd=e=>(0,d.useMemo)((()=>null!==e&&void 0!==e?e:function(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let a="";for(let c=0;c<10;c+=1)a+=e[Math.floor(62*Math.random())];return a}()),[e]),Xd=Qa`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,ef=Qa`
  background: ${e=>{let{theme:a}=e;return a.hoverBackground}};
  color: ${e=>{let{theme:a}=e;return a.canvasTextInvert}};
`,af=Ga.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,cf=Ga.div`
  ${Xd}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${af}:focus & {
    ${ef}
    border: 2px dotted ${e=>{let{theme:a}=e;return a.focusSecondary}};
  }
`,df=Qa`
  height: ${bd.md};
  display: inline-block;
  color: ${e=>{let{$disabled:a=!1,theme:c}=e;return a?Uc():c.canvasText}};
  font-size: 1rem;
  cursor: ${e=>{let{$disabled:a}=e;return a?"default":"pointer"}};
`,ff=Ga(md)`
  ${df}
  background: ${e=>{let{$disabled:a=!1,theme:c}=e;return a?c.material:c.canvas}};
  &:focus {
    outline: 0;
  }
`,bf=Ga.div`
  ${zc()}
  ${df}
  background: ${e=>{let{$disabled:a=!1,theme:c}=e;return a?c.flatLight:c.canvas}};
`,tf=Ga.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Xd}
  cursor: pointer;
  &:disabled {
    ${Uc()};
    background: ${e=>{let{theme:a}=e;return a.material}};
    cursor: default;
  }
`,rf=Ga(rd).attrs((()=>({"aria-hidden":"true"})))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${e=>{let{variant:a="default"}=e;return"flat"===a?Qa`
          height: 100%;
          margin-right: 0;
        `:Qa`
          height: 100%;
        `}}
  ${e=>{let{native:a=!1,variant:c="default"}=e;return a&&("flat"===c?"\n      position: absolute;\n      right: 0;\n      height: 100%;\n      ":"\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    height: calc(100% - 4px);\n    ")}}
    pointer-events: ${e=>{let{$disabled:a=!1,native:c=!1}=e;return a||c?"none":"auto"}}
`,nf=Ga.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${e=>{let{$disabled:a=!1,theme:c}=e;return a?c.materialTextDisabled:c.materialText}};
  ${e=>{let{$disabled:a=!1,theme:c}=e;return a&&`\n    filter: drop-shadow(1px 1px 0px ${c.materialTextDisabledShadow});\n    border-top-color: ${c.materialTextDisabled};\n    `}}
  ${rf}:active & {
    margin-top: 2px;
  }
`,of=Ga.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${e=>{let{theme:a}=e;return a.canvas}};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Nc};
  ${e=>{let{variant:a="default"}=e;return"flat"===a?Qa`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${e=>{let{theme:a}=e;return a.flatDark}};
        `:Qa`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${e=>{let{theme:a}=e;return a.borderDarkest}};
        `}}
  ${e=>{let{variant:a="default"}=e;return Vc(a)}}
`,xf=Ga.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${bd.md} - 4px);
  line-height: calc(${bd.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>{let{theme:a}=e;return a.canvasText}};
  &:focus {
    outline: 0;
  }
  ${e=>{let{active:a}=e;return a?ef:""}}
  user-select: none;
`,sf=[],lf=e=>{let{className:a,defaultValue:c,disabled:f,native:b,onChange:t,options:r=sf,readOnly:n,style:i,value:o,variant:x,width:s}=e;var l;const u=(0,d.useMemo)((()=>r.filter(Boolean)),[r]),[h,p]=id({defaultValue:null!==c&&void 0!==c?c:null===(l=null===u||void 0===u?void 0:u[0])||void 0===l?void 0:l.value,onChange:t,readOnly:n,value:o}),m=!(f||n),g=(0,d.useMemo)((()=>({className:a,style:{...i,width:s}})),[a,i,s]),y=(0,d.useMemo)((()=>d.createElement(rf,{as:"div","data-testid":"select-button",$disabled:f,native:b,tabIndex:-1,variant:"flat"===x?"flat":"raised"},d.createElement(nf,{"data-testid":"select-icon",$disabled:f}))),[f,b,x]),v=(0,d.useMemo)((()=>"flat"===x?bf:ff),[x]);return(0,d.useMemo)((()=>({isEnabled:m,options:u,value:h,setValue:p,wrapperProps:g,DropdownButton:y,Wrapper:v})),[y,v,m,u,p,h,g])},uf={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},hf=(0,d.forwardRef)(((e,a)=>{let{className:c,defaultValue:f,disabled:b,onChange:t,options:r,readOnly:n,style:i,value:o,variant:x,width:s,...l}=e;const{isEnabled:u,options:h,setValue:p,value:m,DropdownButton:g,Wrapper:y}=lf({defaultValue:f,disabled:b,native:!0,onChange:t,options:r,readOnly:n,value:o,variant:x}),v=(0,d.useCallback)((e=>{const a=h.find((a=>a.value===e.target.value));a&&(p(a.value),null===t||void 0===t||t(a,{fromEvent:e}))}),[t,h,p]);return d.createElement(y,{className:c,style:{...i,width:s}},d.createElement(af,null,d.createElement(tf,{...l,disabled:b,onChange:u?v:Jc,ref:a,value:m},h.map(((e,a)=>{var c;return d.createElement("option",{key:`${e.value}-${a}`,value:e.value},null!==(c=e.label)&&void 0!==c?c:e.value)}))),g))}));function pf(e){let{activateOptionIndex:a,active:c,index:f,onClick:b,option:t,selected:r,setRef:n}=e;const i=(0,d.useCallback)((()=>{a(f)}),[a,f]),o=(0,d.useCallback)((e=>{n(e,f)}),[f,n]),x=Jd();return d.createElement(xf,{active:c,"aria-selected":r?"true":void 0,"data-value":t.value,id:x,onClick:b,onMouseEnter:i,ref:o,role:"option",tabIndex:0},t.label)}hf.displayName="SelectNative";const mf=(0,d.forwardRef)((function(e,a){let{"aria-label":c,"aria-labelledby":f,className:b,defaultValue:t,disabled:r=!1,formatDisplay:n,inputProps:i,labelId:o,menuMaxHeight:x,name:s,onBlur:l,onChange:u,onClose:h,onFocus:p,onKeyDown:m,onMouseDown:g,onOpen:y,open:v,options:_,readOnly:w,shadow:A=!0,style:E,variant:M="default",value:L,width:S="auto",...C}=e;const{isEnabled:I,options:k,setValue:P,value:B,wrapperProps:R,DropdownButton:T,Wrapper:O}=lf({className:b,defaultValue:t,disabled:r,native:!1,onChange:u,options:_,style:E,readOnly:w,value:L,variant:M,width:S}),F=(0,d.useRef)(null),N=(0,d.useRef)(null),D=(0,d.useRef)(null),{activeOption:U,handleActivateOptionIndex:j,handleBlur:q,handleButtonKeyDown:z,handleDropdownKeyDown:Q,handleFocus:H,handleMouseDown:$,handleOptionClick:G,handleSetDropdownRef:K,handleSetOptionRef:V,open:W,selectedOption:Y}=(e=>{let{onBlur:a,onChange:c,onClose:f,onFocus:b,onKeyDown:t,onMouseDown:r,onOpen:n,open:i,options:o,readOnly:x,value:s,selectRef:l,setValue:u,wrapperRef:h}=e;const p=(0,d.useRef)(null),m=(0,d.useRef)([]),g=(0,d.useRef)(0),y=(0,d.useRef)(0),v=(0,d.useRef)(),_=(0,d.useRef)("search"),w=(0,d.useRef)(""),A=(0,d.useRef)(),[E,M]=id({defaultValue:!1,onChange:n,onChangePropName:"onOpen",readOnly:x,value:i,valuePropName:"open"}),L=(0,d.useMemo)((()=>{const e=o.findIndex((e=>e.value===s));return g.current=Xc(e,0,null),o[e]}),[o,s]),[S,C]=(0,d.useState)(o[0]),I=(0,d.useCallback)((e=>{const a=p.current,c=m.current[e];if(!c||!a)return void(v.current=e);v.current=void 0;const d=a.clientHeight,f=a.scrollTop,b=a.scrollTop+d,t=c.offsetTop,r=c.offsetHeight,n=c.offsetTop+c.offsetHeight;t<f&&a.scrollTo(0,t),n>b&&a.scrollTo(0,t-d+r),c.focus({preventScroll:!0})}),[p]),k=(0,d.useCallback)((function(e){let{scroll:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var c;const d=o.length-1;let f;switch(e){case"first":f=0;break;case"last":f=d;break;case"next":f=Xc(y.current+1,0,d);break;case"previous":f=Xc(y.current-1,0,d);break;case"selected":f=Xc(null!==(c=g.current)&&void 0!==c?c:0,0,d);break;default:f=e}y.current=f,C(o[f]),a&&I(f)}),[y,o,I]),P=(0,d.useCallback)((e=>{let{fromEvent:a}=e;M(!0),k("selected",{scroll:!0}),null===n||void 0===n||n({fromEvent:a})}),[k,n,M]),B=(0,d.useCallback)((()=>{_.current="search",w.current="",clearTimeout(A.current)}),[]),R=(0,d.useCallback)((e=>{let{focusSelect:a,fromEvent:c}=e;var d;null===f||void 0===f||f({fromEvent:c}),M(!1),C(o[0]),B(),v.current=void 0,a&&(null===(d=l.current)||void 0===d||d.focus())}),[B,f,o,l,M]),T=(0,d.useCallback)((e=>{let{fromEvent:a}=e;E?R({focusSelect:!1,fromEvent:a}):P({fromEvent:a})}),[R,P,E]),O=(0,d.useCallback)(((e,a)=>{let{fromEvent:d}=a;g.current!==e&&(g.current=e,u(o[e].value),null===c||void 0===c||c(o[e],{fromEvent:d}))}),[c,o,u]),F=(0,d.useCallback)((e=>{let{focusSelect:a,fromEvent:c}=e;O(y.current,{fromEvent:c}),R({focusSelect:a,fromEvent:c})}),[R,O]),N=(0,d.useCallback)(((e,a)=>{let{fromEvent:c,select:d}=a;var f;switch("cycleFirstLetter"===_.current&&e!==w.current&&(_.current="search"),e===w.current?_.current="cycleFirstLetter":w.current+=e,_.current){case"search":{let a=o.findIndex((e=>{var a;return 0===(null===(a=e.label)||void 0===a?void 0:a.toLocaleUpperCase().indexOf(w.current))}));a<0&&(a=o.findIndex((a=>{var c;return 0===(null===(c=a.label)||void 0===c?void 0:c.toLocaleUpperCase().indexOf(e))})),w.current=e),a>=0&&(d?O(a,{fromEvent:c}):k(a,{scroll:!0}));break}case"cycleFirstLetter":{const a=d?null!==(f=g.current)&&void 0!==f?f:-1:y.current;let b=o.findIndex(((c,d)=>{var f;return d>a&&0===(null===(f=c.label)||void 0===f?void 0:f.toLocaleUpperCase().indexOf(e))}));b<0&&(b=o.findIndex((a=>{var c;return 0===(null===(c=a.label)||void 0===c?void 0:c.toLocaleUpperCase().indexOf(e))}))),b>=0&&(d?O(b,{fromEvent:c}):k(b,{scroll:!0}));break}}clearTimeout(A.current),A.current=setTimeout((()=>{"search"===_.current&&(w.current="")}),1e3)}),[k,o,O]),D=(0,d.useCallback)((e=>{var a;0===e.button&&(e.preventDefault(),null===(a=l.current)||void 0===a||a.focus(),T({fromEvent:e}),null===r||void 0===r||r(e))}),[r,l,T]),U=(0,d.useCallback)((e=>{F({focusSelect:!0,fromEvent:e})}),[F]),j=(0,d.useCallback)((e=>{const{altKey:a,code:c,ctrlKey:d,metaKey:f,shiftKey:b}=e,{ARROW_DOWN:t,ARROW_UP:r,END:n,ENTER:i,ESC:o,HOME:x,SPACE:s,TAB:l}=uf,u=a||d||f||b;if(!(c===l&&(a||d||f)||c!==l&&u))switch(c){case t:if(e.preventDefault(),!E)return void P({fromEvent:e});k("next",{scroll:!0});break;case r:if(e.preventDefault(),!E)return void P({fromEvent:e});k("previous",{scroll:!0});break;case n:if(e.preventDefault(),!E)return void P({fromEvent:e});k("last",{scroll:!0});break;case i:if(!E)return;e.preventDefault(),F({focusSelect:!0,fromEvent:e});break;case o:if(!E)return;e.preventDefault(),R({focusSelect:!0,fromEvent:e});break;case x:if(e.preventDefault(),!E)return void P({fromEvent:e});k("first",{scroll:!0});break;case s:e.preventDefault(),E?F({focusSelect:!0,fromEvent:e}):P({fromEvent:e});break;case l:if(!E)return;b||e.preventDefault(),F({focusSelect:!b,fromEvent:e});break;default:!u&&c.match(/^Key/)&&(e.preventDefault(),e.stopPropagation(),N(c.replace(/^Key/,""),{select:!E,fromEvent:e}))}}),[k,R,E,P,N,F]),q=(0,d.useCallback)((e=>{j(e),null===t||void 0===t||t(e)}),[j,t]),z=(0,d.useCallback)((e=>{k(e)}),[k]),Q=(0,d.useCallback)((e=>{E||(B(),null===a||void 0===a||a(e))}),[B,a,E]),H=(0,d.useCallback)((e=>{B(),null===b||void 0===b||b(e)}),[B,b]),$=(0,d.useCallback)((e=>{p.current=e,void 0!==v.current&&I(v.current)}),[I]),G=(0,d.useCallback)(((e,a)=>{m.current[a]=e,v.current===a&&I(v.current)}),[I]);return(0,d.useEffect)((()=>{if(!E)return()=>{};const e=e=>{var a;const c=e.target;(null===(a=h.current)||void 0===a?void 0:a.contains(c))||(e.preventDefault(),R({focusSelect:!1,fromEvent:e}))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[R,E,h]),(0,d.useMemo)((()=>({activeOption:S,handleActivateOptionIndex:z,handleBlur:Q,handleButtonKeyDown:q,handleDropdownKeyDown:j,handleFocus:H,handleMouseDown:D,handleOptionClick:U,handleSetDropdownRef:$,handleSetOptionRef:G,open:E,selectedOption:L})),[S,z,Q,q,H,j,D,U,$,G,E,L])})({onBlur:l,onChange:u,onClose:h,onFocus:p,onKeyDown:m,onMouseDown:g,onOpen:y,open:v,options:k,value:B,selectRef:N,setValue:P,wrapperRef:D});(0,d.useImperativeHandle)(a,(()=>({focus:e=>{var a;null===(a=N.current)||void 0===a||a.focus(e)},node:F.current,value:String(B)})),[B]);const Z=(0,d.useMemo)((()=>Y?"function"===typeof n?n(Y):Y.label:""),[n,Y]),J=I?1:void 0,X=(0,d.useMemo)((()=>x?{overflow:"auto",maxHeight:x}:void 0),[x]),ee=Jd(),ae=(0,d.useMemo)((()=>k.map(((e,a)=>{const c=`${B}-${a}`,f=e===U,b=e===Y;return d.createElement(pf,{activateOptionIndex:j,active:f,index:a,key:c,onClick:G,option:e,selected:b,setRef:V})}))),[U,j,G,V,k,Y,B]);return d.createElement(O,{...R,$disabled:r,ref:D,shadow:A,style:{...E,width:S}},d.createElement("input",{name:s,ref:F,type:"hidden",value:String(B),...i}),d.createElement(af,{"aria-disabled":r,"aria-expanded":W,"aria-haspopup":"listbox","aria-label":c,"aria-labelledby":null!==f&&void 0!==f?f:o,"aria-owns":I&&W?ee:void 0,onBlur:q,onFocus:H,onKeyDown:z,onMouseDown:I?$:g,ref:N,role:"button",tabIndex:J,...C},d.createElement(cf,null,Z),T),I&&W&&d.createElement(of,{id:ee,onKeyDown:Q,ref:K,role:"listbox",style:X,tabIndex:0,variant:M},ae))}));mf.displayName="Select";const gf=Ga.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,yf=(0,d.forwardRef)((function(e,a){let{children:c,noPadding:f=!1,...b}=e;return d.createElement(gf,{noPadding:f,ref:a,...b},c)}));yf.displayName="Toolbar";const vf=Ga.div`
  padding: 16px;
`,_f=(0,d.forwardRef)((function(e,a){let{children:c,...f}=e;return d.createElement(vf,{ref:a,...f},c)}));_f.displayName="WindowContent";const wf=Ga.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${e=>{let{theme:a}=e;return a.material}};
  ${e=>{let{active:a}=e;return!1===a?Qa`
          background: ${e=>{let{theme:a}=e;return a.headerNotActiveBackground}};
          color: ${e=>{let{theme:a}=e;return a.headerNotActiveText}};
        `:Qa`
          background: ${e=>{let{theme:a}=e;return a.headerBackground}};
          color: ${e=>{let{theme:a}=e;return a.headerText}};
        `}}

  ${rd} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Af=(0,d.forwardRef)((function(e,a){let{active:c=!0,children:f,...b}=e;return d.createElement(wf,{active:c,ref:a,...b},f)}));Af.displayName="WindowHeader";const Ef=Ga.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Hc({style:"window"})}
  ${jc()}
`,Mf=Ga.span`
  ${e=>{let{theme:a}=e;return Qa`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${a.borderLightest} 16.67%,
      ${a.material} 16.67%,
      ${a.material} 33.33%,
      ${a.borderDark} 33.33%,
      ${a.borderDark} 50%,
      ${a.borderLightest} 50%,
      ${a.borderLightest} 66.67%,
      ${a.material} 66.67%,
      ${a.material} 83.33%,
      ${a.borderDark} 83.33%,
      ${a.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}}
`,Lf=(0,d.forwardRef)(((e,a)=>{let{children:c,resizable:f=!1,resizeRef:b,shadow:t=!0,...r}=e;return d.createElement(Ef,{ref:a,shadow:t,...r},c,f&&d.createElement(Mf,{"data-testid":"resizeHandle",ref:b}))}));Lf.displayName="Window";const Sf=Ga(yd)`
  width: 234px;
  margin: 1rem 0;
  background: ${e=>{let{theme:a}=e;return a.canvas}};
`,Cf=Ga.div`
  display: flex;
  background: ${e=>{let{theme:a}=e;return a.materialDark}};
  color: #dfe0e3;
`,If=Ga.div`
  display: flex;
  flex-wrap: wrap;
`,kf=Ga.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Pf=Ga.span`
  cursor: pointer;

  background: ${e=>{let{active:a,theme:c}=e;return a?c.hoverBackground:"transparent"}};
  color: ${e=>{let{active:a,theme:c}=e;return a?c.canvasTextInvert:c.canvasText}};

  &:hover {
    border: 2px dashed
      ${e=>{let{theme:a,active:c}=e;return c?"none":a.materialDark}};
  }
`,Bf=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];const Rf=(0,d.forwardRef)(((e,a)=>{let{className:c,date:f=(new Date).toISOString(),onAccept:b,onCancel:t,shadow:r=!0}=e;const[n,i]=(0,d.useState)((()=>function(e){const a=new Date(Date.parse(e));return{day:a.getUTCDate(),month:a.getUTCMonth(),year:a.getUTCFullYear()}}(f))),{year:o,month:x,day:s}=n,l=(0,d.useCallback)((e=>{let{value:a}=e;i((e=>({...e,month:a})))}),[]),u=(0,d.useCallback)((e=>{i((a=>({...a,year:e})))}),[]),h=(0,d.useCallback)((e=>{i((a=>({...a,day:e})))}),[]),p=(0,d.useCallback)((()=>{const e=[n.year,n.month+1,n.day].map((e=>String(e).padStart(2,"0"))).join("-");null===b||void 0===b||b(e)}),[n.day,n.month,n.year,b]),m=(0,d.useMemo)((()=>{const e=Array.from({length:42}),a=function(e,a,c){return new Date(e,a,c).getDay()}(o,x,1);let c=s;const f=function(e,a){return new Date(e,a+1,0).getDate()}(o,x);return c=c<f?c:f,e.forEach(((b,t)=>{if(t>=a&&t<f+a){const f=t-a+1;e[t]=d.createElement(kf,{key:t,onClick:()=>{h(f)}},d.createElement(Pf,{active:f===c},f))}else e[t]=d.createElement(kf,{key:t})})),e}),[s,h,x,o]);return d.createElement(Lf,{className:c,ref:a,shadow:r,style:{margin:20}},d.createElement(Af,null,d.createElement("span",{role:"img","aria-label":"\ud83d\udcc6"},"\ud83d\udcc6"),"Date"),d.createElement(_f,null,d.createElement(yf,{noPadding:!0,style:{justifyContent:"space-between"}},d.createElement(mf,{options:Bf,value:x,onChange:l,width:128,menuMaxHeight:200}),d.createElement(Zd,{value:o,onChange:u,width:100})),d.createElement(Sf,null,d.createElement(Cf,null,d.createElement(kf,null,"S"),d.createElement(kf,null,"M"),d.createElement(kf,null,"T"),d.createElement(kf,null,"W"),d.createElement(kf,null,"T"),d.createElement(kf,null,"F"),d.createElement(kf,null,"S")),d.createElement(If,null,m)),d.createElement(yf,{noPadding:!0,style:{justifyContent:"space-between"}},d.createElement(nd,{fullWidth:!0,onClick:t,disabled:!t},"Cancel"),d.createElement(nd,{fullWidth:!0,onClick:b?p:void 0,disabled:!b},"OK"))))}));Rf.displayName="DatePicker";const Tf=Ga.div`
  position: relative;
  font-size: 1rem;
  ${e=>{let{variant:a}=e;return(e=>{switch(e){case"status":case"well":return Qa`
        ${Hc({style:"status"})}
      `;case"window":case"outside":return Qa`
        ${Hc({style:"window"})}
      `;case"field":return Qa`
        ${Hc({style:"field"})}
      `;default:return Qa`
        ${Hc()}
      `}})(a)}}
  ${e=>{let{variant:a}=e;return jc("field"===a?{background:"canvas",color:"canvasText"}:void 0)}}
`,Of=(0,d.forwardRef)(((e,a)=>{let{children:c,shadow:f=!1,variant:b="window",...t}=e;return d.createElement(Tf,{ref:a,shadow:f,variant:b,...t},c)}));Of.displayName="Frame";const Ff=Ga.fieldset`
  position: relative;
  border: 2px solid
    ${e=>{let{theme:a,variant:c}=e;return"flat"===c?a.flatDark:a.borderLightest}};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${e=>{let{theme:a}=e;return a.materialText}};
  ${e=>{let{variant:a}=e;return"flat"!==a&&Qa`
      box-shadow: -1px -1px 0 1px ${e=>{let{theme:a}=e;return a.borderDark}},
        inset -1px -1px 0 1px ${e=>{let{theme:a}=e;return a.borderDark}};
    `}}
  ${e=>e.$disabled&&Uc()}
`,Nf=Ga.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${e=>{let{theme:a,variant:c}=e;return"flat"===c?a.canvas:a.material}};
`;(0,d.forwardRef)(((e,a)=>{let{label:c,disabled:f=!1,variant:b="default",children:t,...r}=e;return d.createElement(Ff,{"aria-disabled":f,$disabled:f,variant:b,ref:a,...r},c&&d.createElement(Nf,{variant:b},c),t)})).displayName="GroupBox";const Df=Ga.div`
  ${e=>{let{theme:a,size:c="100%"}=e;return`\n  display: inline-block;\n  box-sizing: border-box;\n  height: ${ad(c)};\n  width: 5px;\n  border-top: 2px solid ${a.borderLightest};\n  border-left: 2px solid ${a.borderLightest};\n  border-bottom: 2px solid ${a.borderDark};\n  border-right: 2px solid ${a.borderDark};\n  background: ${a.material};\n`}}
`;Df.displayName="Handle";const Uf=Ga.div`
  display: inline-block;
  height: ${e=>{let{size:a}=e;return ad(a)}};
  width: ${e=>{let{size:a}=e;return ad(a)}};
`,jf=Ga.span`
  display: block;
  background: ${"url('data:image/gif;base64,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')"};
  background-size: cover;
  width: 100%;
  height: 100%;
`,qf=(0,d.forwardRef)(((e,a)=>{let{size:c=30,...f}=e;return d.createElement(Uf,{size:c,ref:a,...f},d.createElement(jf,null))}));qf.displayName="Hourglass";const zf=Ga.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Qf=Ga.div`
  position: relative;
`,Hf=Ga.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${e=>{let{theme:a}=e;return a.material}};
  border-top: 4px solid ${e=>{let{theme:a}=e;return a.borderLightest}};
  border-left: 4px solid ${e=>{let{theme:a}=e;return a.borderLightest}};
  border-bottom: 4px solid ${e=>{let{theme:a}=e;return a.borderDark}};
  border-right: 4px solid ${e=>{let{theme:a}=e;return a.borderDark}};

  outline: 1px dotted ${e=>{let{theme:a}=e;return a.material}};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${e=>{let{theme:a}=e;return a.material}};
  }
  box-shadow: 1px 1px 0 1px ${e=>{let{theme:a}=e;return a.borderDarkest}};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,$f=Ga(md).attrs((()=>({"data-testid":"background"})))`
  width: 100%;
  height: 100%;
`,Gf=Ga.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${e=>{let{theme:a}=e;return a.material}};
  border-left: 2px solid ${e=>{let{theme:a}=e;return a.borderLightest}};
  border-bottom: 2px solid ${e=>{let{theme:a}=e;return a.borderDarkest}};
  border-right: 2px solid ${e=>{let{theme:a}=e;return a.borderDarkest}};
  box-shadow: inset 0px 0px 0px 2px ${e=>{let{theme:a}=e;return a.borderDark}};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${e=>{let{theme:a}=e;return a.material}};
    border-left: 2px solid ${e=>{let{theme:a}=e;return a.borderLightest}};
    border-right: 2px solid ${e=>{let{theme:a}=e;return a.borderDarkest}};
    box-shadow: inset 0px 0px 0px 2px ${e=>{let{theme:a}=e;return a.borderDark}};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${e=>{let{theme:a}=e;return a.material}};
    border: 2px solid ${e=>{let{theme:a}=e;return a.borderDark}};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${e=>{let{theme:a}=e;return a.borderLightest}},
      1px 1px 0 1px ${e=>{let{theme:a}=e;return a.borderDarkest}};
  }
`;(0,d.forwardRef)(((e,a)=>{let{backgroundStyles:c,children:f,...b}=e;return d.createElement(zf,{ref:a,...b},d.createElement(Qf,null,d.createElement(Hf,null,d.createElement($f,{style:c},f)),d.createElement(Gf,null)))})).displayName="Monitor";const Kf=Ga.div`
  display: inline-block;
  height: ${bd.md};
  width: 100%;
`,Vf=Ga(md)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Wf=Qa`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Yf=Ga.div`
  position: relative;
  top: 4px;
  ${Wf}
  background: ${e=>{let{theme:a}=e;return a.canvas}};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${e=>{let{theme:a}=e;return a.materialText}};
`,Zf=Ga.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Wf}
  color: ${e=>{let{theme:a}=e;return a.materialTextInvert}};
  background: ${e=>{let{theme:a}=e;return a.progress}};
  clip-path: polygon(
    0 0,
    ${e=>{let{value:a=0}=e;return a}}% 0,
    ${e=>{let{value:a=0}=e;return a}}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Jf=Ga.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Xf=Ga.span`
  display: inline-block;
  width: ${17}px;
  box-sizing: border-box;
  height: 100%;
  background: ${e=>{let{theme:a}=e;return a.progress}};
  border-color: ${e=>{let{theme:a}=e;return a.material}};
  border-width: 0px 1px;
  border-style: solid;
`,eb=(0,d.forwardRef)(((e,a)=>{let{hideValue:c=!1,shadow:f=!0,value:b,variant:t="default",...r}=e;const n=c?null:`${b}%`,i=(0,d.useRef)(null),[o,x]=(0,d.useState)([]),s=(0,d.useCallback)((()=>{if(!i.current||void 0===b)return;const e=i.current.getBoundingClientRect().width,a=Math.round(b/100*e/17);x(Array.from({length:a}))}),[b]);return(0,d.useEffect)((()=>(s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s))),[s]),d.createElement(Kf,{"aria-valuenow":void 0!==b?Math.round(b):void 0,ref:a,role:"progressbar",variant:t,...r},d.createElement(Vf,{variant:t,shadow:f},"default"===t?d.createElement(d.Fragment,null,d.createElement(Yf,{"data-testid":"defaultProgress1"},n),d.createElement(Zf,{"data-testid":"defaultProgress2",value:b},n)):d.createElement(Jf,{ref:i,"data-testid":"tileProgress"},o.map(((e,a)=>d.createElement(Xf,{key:a}))))))}));eb.displayName="ProgressBar";const ab=Qa`
  width: ${ld}px;
  height: ${ld}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,cb=Ga(md)`
  ${ab}
  background: ${e=>{let{$disabled:a,theme:c}=e;return a?c.material:c.canvas}};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,db=Ga.div`
  ${zc()}
  ${ab}
  outline: none;
  background: ${e=>{let{$disabled:a,theme:c}=e;return a?c.flatLight:c.canvas}};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${e=>{let{theme:a}=e;return a.flatDark}};
    border-radius: 50%;
  }
`,fb=Ga.span.attrs((()=>({"data-testid":"checkmarkIcon"})))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,bb={flat:db,default:cb};(0,d.forwardRef)(((e,a)=>{let{checked:c,className:f="",disabled:b=!1,label:t="",onChange:r,style:n={},variant:i="default",...o}=e;const x=bb[i];return d.createElement(hd,{$disabled:b,className:f,style:n},d.createElement(x,{$disabled:b,role:"presentation"},c&&d.createElement(fb,{$disabled:b,variant:i})),d.createElement(ud,{disabled:b,onChange:b?void 0:r,readOnly:b,type:"radio",checked:c,ref:a,...o}),t&&d.createElement(pd,null,t))})).displayName="Radio";const tb="undefined"!==typeof window?d.useLayoutEffect:d.useEffect;function rb(e){const a=d.useRef(e);return tb((()=>{a.current=e})),d.useCallback((function(){return(0,a.current)(...arguments)}),[])}function nb(e,a){"function"===typeof e?e(a):e&&(e.current=a)}function ib(e,a){return(0,d.useMemo)((()=>null==e&&null==a?null:c=>{nb(e,c),nb(a,c)}),[e,a])}var ob=c(4164);let xb,sb=!0,lb=!1;const ub={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function hb(e){e.metaKey||e.altKey||e.ctrlKey||(sb=!0)}function pb(){sb=!1}function mb(){"hidden"===this.visibilityState&&lb&&(sb=!0)}function gb(e){const{target:a}=e;try{return a.matches(":focus-visible")}catch(c){}return sb||function(e){if("type"in e){const{type:a,tagName:c}=e;if("INPUT"===c&&ub[a]&&!e.readOnly)return!0;if("TEXTAREA"===c&&!e.readOnly)return!0}return!(!("isContentEditable"in e)||!e.isContentEditable)}(a)}function yb(){lb=!0,window.clearTimeout(xb),xb=window.setTimeout((()=>{lb=!1}),100)}function vb(){const e=(0,d.useCallback)((e=>{const a=(0,ob.findDOMNode)(e);var c;null!=a&&((c=a.ownerDocument).addEventListener("keydown",hb,!0),c.addEventListener("mousedown",pb,!0),c.addEventListener("pointerdown",pb,!0),c.addEventListener("touchstart",pb,!0),c.addEventListener("visibilitychange",mb,!0))}),[]);return{isFocusVisible:gb,onBlurVisible:yb,ref:e}}function _b(e,a){if(void 0!==a&&"changedTouches"in e){for(let c=0;c<e.changedTouches.length;c+=1){const d=e.changedTouches[c];if(d.identifier===a)return{x:d.clientX,y:d.clientY}}return!1}return"clientX"in e&&{x:e.clientX,y:e.clientY}}function wb(e){return e&&e.ownerDocument||document}const Ab=Ga.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${e=>{let{hasMarks:a}=e;return a?"41px":"39px"}};
    ${e=>{let{isFocused:a,theme:c}=e;return a&&`\n        outline: 2px dotted ${c.materialText};\n        `}}
  }

  ${e=>{let{orientation:a,size:c}=e;return"vertical"===a?Qa`
          height: ${c};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${e=>{let{hasMarks:a}=e;return a?"41px":"39px"}};
          }
        `:Qa`
          width: ${c};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${e=>{let{hasMarks:a}=e;return a?"41px":"39px"}};
          }
        `}}

  pointer-events: ${e=>{let{$disabled:a}=e;return a?"none":"auto"}};
`,Eb=()=>Qa`
  position: absolute;
  ${e=>{let{orientation:a}=e;return"vertical"===a?Qa`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:Qa`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}}
`,Mb=Ga(md)`
  ${Eb()}
`,Lb=Ga(md)`
  ${Eb()}

  border-left-color: ${e=>{let{theme:a}=e;return a.flatLight}};
  border-top-color: ${e=>{let{theme:a}=e;return a.flatLight}};
  border-right-color: ${e=>{let{theme:a}=e;return a.canvas}};
  border-bottom-color: ${e=>{let{theme:a}=e;return a.canvas}};
  &:before {
    border-left-color: ${e=>{let{theme:a}=e;return a.flatDark}};
    border-top-color: ${e=>{let{theme:a}=e;return a.flatDark}};
    border-right-color: ${e=>{let{theme:a}=e;return a.flatLight}};
    border-bottom-color: ${e=>{let{theme:a}=e;return a.flatLight}};
  }
`,Sb=Ga.span`
  position: relative;
  ${e=>{let{orientation:a}=e;return"vertical"===a?Qa`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:Qa`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}}
  ${e=>{let{variant:a}=e;return"flat"===a?Qa`
          ${zc()}
          outline: 2px solid ${e=>{let{theme:a}=e;return a.flatDark}};
          background: ${e=>{let{theme:a}=e;return a.flatLight}};
        `:Qa`
          ${jc()}
          ${Hc()}
          &:focus {
            outline: none;
          }
        `}}
    ${e=>{let{$disabled:a,theme:c}=e;return a&&qc({mainColor:c.material,secondaryColor:c.borderLightest})}}
`,Cb=Ga.span`
  display: inline-block;
  position: absolute;

  ${e=>{let{orientation:a}=e;return"vertical"===a?Qa`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${6}px;
          border-bottom: 2px solid ${e=>{let{theme:a}=e;return a.materialText}};
        `:Qa`
          bottom: ${-6}px;
          height: ${6}px;
          transform: translateX(-1px);
          border-left: 1px solid ${e=>{let{theme:a}=e;return a.materialText}};
          border-right: 1px solid ${e=>{let{theme:a}=e;return a.materialText}};
        `}}

  color:  ${e=>{let{theme:a}=e;return a.materialText}};
  ${e=>{let{$disabled:a,theme:c}=e;return a&&Qa`
      ${Uc()}
      box-shadow: 1px 1px 0px ${c.materialTextDisabledShadow};
      border-color: ${c.materialTextDisabled};
    `}}
`,Ib=Ga.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${e=>{let{orientation:a}=e;return"vertical"===a?Qa`
          transform: translate(${8}px, ${7}px);
        `:Qa`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}}
`,kb=(0,d.forwardRef)(((e,a)=>{let{defaultValue:c,disabled:f=!1,marks:b=!1,max:t=100,min:r=0,name:n,onChange:i,onChangeCommitted:o,onMouseDown:x,orientation:s="horizontal",size:l="100%",step:u=1,value:h,variant:p="default",...m}=e;const g="flat"===p?Lb:Mb,y="vertical"===s,[v=r,_]=id({defaultValue:c,onChange:null!==i&&void 0!==i?i:o,value:h}),{isFocusVisible:w,onBlurVisible:A,ref:E}=vb(),[M,L]=(0,d.useState)(!1),S=(0,d.useRef)(),C=(0,d.useRef)(null),I=ib(E,S),k=ib(a,I),P=rb((e=>{w(e)&&L(!0)})),B=rb((()=>{!1!==M&&(L(!1),A())})),R=(0,d.useRef)(),T=(0,d.useMemo)((()=>!0===b&&Number.isFinite(u)?[...Array(Math.round((t-r)/u)+1)].map(((e,a)=>({label:void 0,value:r+u*a}))):Array.isArray(b)?b:[]),[b,t,r,u]),O=rb((e=>{const a=(t-r)/10,c=T.map((e=>e.value)),d=c.indexOf(v);let f=0;switch(e.key){case"Home":f=r;break;case"End":f=t;break;case"PageUp":u&&(f=v+a);break;case"PageDown":u&&(f=v-a);break;case"ArrowRight":case"ArrowUp":f=u?v+u:c[d+1]||c[c.length-1];break;case"ArrowLeft":case"ArrowDown":f=u?v-u:c[d-1]||c[0];break;default:return}e.preventDefault(),u&&(f=ed(f,u,r)),f=Xc(f,r,t),_(f),L(!0),null===i||void 0===i||i(f),null===o||void 0===o||o(f)})),F=(0,d.useCallback)((e=>{if(!S.current)return 0;const a=S.current.getBoundingClientRect();let c,d;if(c=y?(a.bottom-e.y)/a.height:(e.x-a.left)/a.width,d=function(e,a,c){return(c-a)*e+a}(c,r,t),u)d=ed(d,u,r);else{const e=T.map((e=>e.value)),a=function(e,a){var c;const{index:d}=null!==(c=e.reduce(((e,c,d)=>{const f=Math.abs(a-c);return null===e||f<e.distance||f===e.distance?{distance:f,index:d}:e}),null))&&void 0!==c?c:{};return null!==d&&void 0!==d?d:-1}(e,d);d=e[a]}return d=Xc(d,r,t),d}),[T,t,r,u,y]),N=rb((e=>{var a;const c=_b(e,R.current);if(!c)return;const d=F(c);null===(a=C.current)||void 0===a||a.focus(),_(d),L(!0),null===i||void 0===i||i(d)})),D=rb((e=>{const a=_b(e,R.current);if(!a)return;const c=F(a);null===o||void 0===o||o(c),R.current=void 0;const d=wb(S.current);d.removeEventListener("mousemove",N),d.removeEventListener("mouseup",D),d.removeEventListener("touchmove",N),d.removeEventListener("touchend",D)})),U=rb((e=>{var a;null===x||void 0===x||x(e),e.preventDefault(),null===(a=C.current)||void 0===a||a.focus(),L(!0);const c=_b(e,R.current);if(c){const e=F(c);_(e),null===i||void 0===i||i(e)}const d=wb(S.current);d.addEventListener("mousemove",N),d.addEventListener("mouseup",D)})),j=rb((e=>{var a;e.preventDefault();const c=e.changedTouches[0];null!=c&&(R.current=c.identifier),null===(a=C.current)||void 0===a||a.focus(),L(!0);const d=_b(e,R.current);if(d){const e=F(d);_(e),null===i||void 0===i||i(e)}const f=wb(S.current);f.addEventListener("touchmove",N),f.addEventListener("touchend",D)}));return(0,d.useEffect)((()=>{const{current:e}=S;null===e||void 0===e||e.addEventListener("touchstart",j);const a=wb(e);return()=>{null===e||void 0===e||e.removeEventListener("touchstart",j),a.removeEventListener("mousemove",N),a.removeEventListener("mouseup",D),a.removeEventListener("touchmove",N),a.removeEventListener("touchend",D)}}),[D,N,j]),d.createElement(Ab,{$disabled:f,hasMarks:Boolean(T.length),isFocused:M,onMouseDown:U,orientation:s,ref:k,size:ad(l),...m},d.createElement("input",{disabled:f,name:n,type:"hidden",value:null!==v&&void 0!==v?v:0}),T&&T.map((e=>d.createElement(Cb,{$disabled:f,"data-testid":"tick",key:e.value/(t-r)*100,orientation:s,style:{[y?"bottom":"left"]:(e.value-r)/(t-r)*100+"%"}},e.label&&d.createElement(Ib,{"aria-hidden":!0,"data-testid":"mark",orientation:s},e.label)))),d.createElement(g,{orientation:s,variant:p}),d.createElement(Sb,{$disabled:f,"aria-disabled":!!f||void 0,"aria-orientation":s,"aria-valuemax":t,"aria-valuemin":r,"aria-valuenow":v,onBlur:B,onFocus:P,onKeyDown:O,orientation:s,ref:C,role:"slider",style:{[y?"bottom":"left"]:(y?-100:0)+100*(v-r)/(t-r)+"%"},tabIndex:f?void 0:0,variant:p}))}));kb.displayName="Slider";const Pb=Ga.tbody`
  background: ${e=>{let{theme:a}=e;return a.canvas}};
  display: table-row-group;
  box-shadow: ${Dc};
  overflow-y: auto;
`,Bb=(0,d.forwardRef)((function(e,a){let{children:c,...f}=e;return d.createElement(Pb,{ref:a,...f},c)}));Bb.displayName="TableBody";const Rb=Ga.td`
  padding: 0 8px;
`,Tb=(0,d.forwardRef)((function(e,a){let{children:c,...f}=e;return d.createElement(Rb,{ref:a,...f},c)}));Tb.displayName="TableDataCell";const Ob=Ga.thead`
  display: table-header-group;
`,Fb=(0,d.forwardRef)((function(e,a){let{children:c,...f}=e;return d.createElement(Ob,{ref:a,...f},c)}));Fb.displayName="TableHead";const Nb=Ga.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${e=>{let{theme:a}=e;return a.material}};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Hc()}

    border-left: none;
    border-top: none;
  }
  ${e=>{let{$disabled:a}=e;return!a&&Qa`
      &:active {
        &:before {
          ${Hc({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}}

  color: ${e=>{let{theme:a}=e;return a.materialText}};
  ${e=>{let{$disabled:a}=e;return a&&Uc()}}
  &:hover {
    color: ${e=>{let{theme:a}=e;return a.materialText}};
    ${e=>{let{$disabled:a}=e;return a&&Uc()}}
  }
`,Db=(0,d.forwardRef)((function(e,a){let{disabled:c=!1,children:f,onClick:b,onTouchStart:t=Jc,sort:r,...n}=e;const i="asc"===r?"ascending":"desc"===r?"descending":void 0;return d.createElement(Nb,{$disabled:c,"aria-disabled":c,"aria-sort":i,onClick:c?void 0:b,onTouchStart:c?void 0:t,ref:a,...n},d.createElement("div",null,f))}));Db.displayName="TableHeadCell";const Ub=Ga.tr`
  color: inherit;
  display: table-row;
  height: calc(${bd.md} - 2px);
  line-height: calc(${bd.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${e=>{let{theme:a}=e;return a.canvasText}};
  &:hover {
    background: ${e=>{let{theme:a}=e;return a.hoverBackground}};
    color: ${e=>{let{theme:a}=e;return a.canvasTextInvert}};
  }
`,jb=(0,d.forwardRef)((function(e,a){let{children:c,...f}=e;return d.createElement(Ub,{ref:a,...f},c)}));jb.displayName="TableRow";const qb=Ga.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,zb=Ga(md)`
  &:before {
    box-shadow: none;
  }
`,Qb=(0,d.forwardRef)(((e,a)=>{let{children:c,...f}=e;return d.createElement(zb,null,d.createElement(qb,{ref:a,...f},c))}));Qb.displayName="Table";const Hb=Ga.button`
  ${jc()}
  ${Hc()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${bd.md};
  line-height: ${bd.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${e=>{let{theme:a}=e;return a.materialText}};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${$c}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`\n    z-index: 1;\n    height: calc(${bd.md} + 4px);\n    top: -4px;\n    margin-bottom: -6px;\n    padding: 0 16px;\n    margin-left: -8px;\n    &:not(:last-child) {\n      margin-right: -8px;\n    }\n  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${e=>{let{theme:a}=e;return a.material}};
    bottom: -4px;
    left: 2px;
  }
`;(0,d.forwardRef)(((e,a)=>{let{value:c,onClick:f,selected:b=!1,children:t,...r}=e;return d.createElement(Hb,{"aria-selected":b,selected:b,onClick:e=>null===f||void 0===f?void 0:f(c,e),ref:a,role:"tab",...r},t)})).displayName="Tab";const $b=Ga.div`
  ${jc()}
  ${Hc()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`;(0,d.forwardRef)(((e,a)=>{let{children:c,...f}=e;return d.createElement($b,{ref:a,...f},c)})).displayName="TabBody";const Gb=Ga.div`
  position: relative;
  ${e=>{let{isMultiRow:a,theme:c}=e;return a&&`\n  button {\n    flex-grow: 1;\n  }\n  button:last-child:before {\n    border-right: 2px solid ${c.borderDark};\n  }\n  `}}
`,Kb=Ga.div.attrs((()=>({"data-testid":"tab-row"})))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${e=>{let{theme:a}=e;return a.borderDarkest}};
    border-left: 2px solid ${e=>{let{theme:a}=e;return a.borderLightest}};
  }
`;(0,d.forwardRef)(((e,a)=>{let{value:c,onChange:f=Jc,children:b,rows:t=1,...r}=e;const n=(0,d.useMemo)((()=>{var e;const a=function(e,a){const c=[];for(let d=a;d>0;d-=1)c.push(e.splice(0,Math.ceil(e.length/d)));return c}(null!==(e=d.Children.map(b,(e=>{if(!d.isValidElement(e))return null;const a={selected:e.props.value===c,onClick:f};return d.cloneElement(e,a)})))&&void 0!==e?e:[],t).map(((e,a)=>({key:a,tabs:e}))),r=a.findIndex((e=>e.tabs.some((e=>e.props.selected))));return a.push(a.splice(r,1)[0]),a}),[b,f,t,c]);return d.createElement(Gb,{...r,isMultiRow:t>1,role:"tablist",ref:a},n.map((e=>d.createElement(Kb,{key:e.key},e.tabs))))})).displayName="Tabs";const Vb=["blur","focus"],Wb=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Yb(e){return"nativeEvent"in e&&Vb.includes(e.type)}function Zb(e){return"nativeEvent"in e&&Wb.includes(e.type)}const Jb={top:"top: -4px;\n        left: 50%;\n        transform: translate(-50%, -100%);",bottom:"bottom: -4px;\n           left: 50%;\n           transform: translate(-50%, 100%);",left:"left: -4px;\n         top: 50%;\n         transform: translate(-100%, -50%);",right:"right: -4px;\n          top: 50%;\n          transform: translate(100%, -50%);"},Xb=Ga.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${e=>{let{theme:a}=e;return a.borderDarkest}};
  background: ${e=>{let{theme:a}=e;return a.tooltip}};
  box-shadow: ${Nc};
  text-align: center;
  font-size: 1rem;
  ${e=>Jb[e.position]}
`,et=Ga.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,at=(0,d.forwardRef)(((e,a)=>{let{className:c,children:f,disableFocusListener:b=!1,disableMouseListener:t=!1,enterDelay:r=1e3,leaveDelay:n=0,onBlur:i,onClose:o,onFocus:x,onMouseEnter:s,onMouseLeave:l,onOpen:u,style:h,text:p,position:m="top",...g}=e;const[y,v]=(0,d.useState)(!1),[_,w]=(0,d.useState)(),[A,E]=(0,d.useState)(),M=!b,L=!t,S=e=>{e.persist(),Yb(e)?null===x||void 0===x||x(e):Zb(e)&&(null===s||void 0===s||s(e)),(e=>{window.clearTimeout(_),window.clearTimeout(A);const a=window.setTimeout((()=>{v(!0),null===u||void 0===u||u(e)}),r);w(a)})(e)},C=e=>{e.persist(),Yb(e)?null===i||void 0===i||i(e):Zb(e)&&(null===l||void 0===l||l(e)),(e=>{window.clearTimeout(_),window.clearTimeout(A);const a=window.setTimeout((()=>{v(!1),null===o||void 0===o||o(e)}),n);E(a)})(e)},I=M?C:void 0,k=M?S:void 0,P=L?S:void 0,B=L?C:void 0,R=M?0:void 0;return d.createElement(et,{"data-testid":"tooltip-wrapper",onBlur:I,onFocus:k,onMouseEnter:P,onMouseLeave:B,tabIndex:R},d.createElement(Xb,{className:c,"data-testid":"tooltip",position:m,ref:a,show:y,style:h,...g},p),f)}));at.displayName="Tooltip";const ct=Ga(pd)`
  white-space: nowrap;
`,dt=Qa`
  :focus {
    outline: none;
  }

  ${e=>{let{$disabled:a}=e;return a?"cursor: default;":Qa`
          cursor: pointer;

          :focus {
            ${ct} {
              background: ${e=>{let{theme:a}=e;return a.hoverBackground}};
              color: ${e=>{let{theme:a}=e;return a.materialTextInvert}};
              outline: 2px dotted ${e=>{let{theme:a}=e;return a.focusSecondary}};
            }
          }
        `}}
`,ft=Ga.ul`
  position: relative;
  isolation: isolate;

  ${e=>{let{isRootLevel:a}=e;return a&&Qa`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${e=>{let{theme:a}=e;return a.borderDark}};
      }
    `}}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${e=>{let{theme:a}=e;return a.borderDark}};
      font-size: 12px;
    }
  }
`,bt=Ga.li`
  position: relative;
  padding-left: ${e=>{let{hasItems:a}=e;return a?"0":"13px"}};

  ${e=>{let{isRootLevel:a}=e;return a?Qa`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${e=>{let{theme:a}=e;return a.material}};
            }
          }
        `:Qa`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${e=>{let{theme:a}=e;return a.material}};
            }
          }
        `}}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${e=>{let{theme:a}=e;return a.borderDark}};
    }
  }
`,tt=Ga.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,rt=Ga.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${e=>{let{theme:a}=e;return a.materialText}};
  user-select: none;
  padding-left: 18px;
  ${dt};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,nt=Ga(hd)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${dt};
`,it=Ga.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  ${'\n  html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1.5;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nul,\nli {\n  list-style-type: none;\n}\nbutton {\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  color: black;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n\ninput[type="number"]::-webkit-outer-spin-button,\ninput[type="number"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type="number"] {\n  -moz-appearance: textfield;\n}\n\n'}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ht}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ut}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`,um=()=>{const e=Mc(),[a,c]=(0,d.useState)("register");return(0,Ya.jsx)("div",{className:"main-page-container",children:(0,Ya.jsxs)("div",{style:{width:"650px"},children:[(0,Ya.jsx)(lm,{}),(0,Ya.jsxs)(Da,{theme:Wa(),children:[(0,Ya.jsxs)(sd,{style:{display:"flex",flexDirection:"row",width:"100%"},children:[(0,Ya.jsx)(xd,{style:{flex:"1",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>{c("register"),e("/register")},children:"Register"}),(0,Ya.jsx)(Sd,{orientation:"vertical",size:"43px"}),(0,Ya.jsx)(xd,{style:{flex:"1",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>{c("swapAssets"),e("/swap")},children:"Swap Assets"}),(0,Ya.jsx)(Sd,{orientation:"vertical",size:"43px"}),(0,Ya.jsx)(xd,{style:{flex:"1",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>{c("transferAssets"),e("/transfer-assets")},children:"Transfer Assets"}),(0,Ya.jsx)(Sd,{orientation:"vertical",size:"43px"}),(0,Ya.jsx)(xd,{style:{flex:"1",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>{c("customOperations"),e("/custom-operations")},children:"Custom operations"}),(0,Ya.jsx)(Sd,{orientation:"vertical",size:"43px"}),(0,Ya.jsx)(xd,{style:{flex:"1",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>{c("walletInfo"),e("/wallet-info")},children:"Wallet info."})]}),"register"===a&&(0,Ya.jsx)(Hu,{}),"swapAssets"===a&&(0,Ya.jsx)(tm,{}),"transferAssets"===a&&(0,Ya.jsx)(im,{}),"customOperations"===a&&(0,Ya.jsx)(om,{}),"walletInfo"===a&&(0,Ya.jsx)(sm,{})]})]})})},hm=()=>(0,Ya.jsx)(Rc,{children:(0,Ya.jsx)(um,{})}),pm=()=>(0,Ya.jsxs)("div",{className:"App",children:[(0,Ya.jsx)(Za,{}),(0,Ya.jsx)(hm,{})]}),mm=e=>{e&&e instanceof Function&&c.e(787).then(c.bind(c,787)).then((a=>{let{getCLS:c,getFID:d,getFCP:f,getLCP:b,getTTFB:t}=a;c(e),d(e),f(e),b(e),t(e)}))};b.createRoot(document.getElementById("root")).render((0,Ya.jsx)(d.StrictMode,{children:(0,Ya.jsx)(pm,{})})),mm()})()})();
//# sourceMappingURL=main.0a1b9fe8.js.map