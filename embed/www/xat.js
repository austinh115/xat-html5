function Tick12(e){if(ToCq.length)return isWEB?void(parent.DoPageClick?parent.DoPageClick(ToCq.shift()):parent.parent.DoPageClick(ToCq.shift())):void(window.location=ToCq.shift());ToCqS.length&&(window.location="app://"+encodeURIComponent(JSON.stringify(ToCqS)),ToCqS=[])}function xatMain(e){var t=JSON.parse(e);config=defconfig;for(var a in t)config[a]=t[a];config.PhoneType=xInt(config.PhoneType),Animated="unanimatedsmilies"==config.tortoise?"S":"s",ThisPage=t.page;var i=document.getElementsByTagName("body")[0];i.style.fontSize=config.fontsize.toString()/2+"pt",config.PhoneType==PhoneTypes.DROIDPHONE&&(i.style.fontFamily="'RobotoRegular','Droid Sans',sans-serif"),isWEB=config.PhoneType==PhoneTypes.WEB,(Language=config.lang.substr(0,2).toLowerCase())||(Language="en")}function debug(e){return config[e]}function xtrace(e){debug("xtrace")&&ToC({Type:"xtrace",msg:e},!0)}function FromObjC(e){switch(e){case"webViewDidFinishLoad":case"viewWillAppear":case"MessageUpdate":case"MessageUpdateAll":case"FriendsUpdate":case"ChatsUpdate":case"VisitorsUpdate":break;case"MemoryWarning":return void DumpMemory(0);default:return}ThisPage&&ToC({Type:e,Page:ThisPage})}function ToC(e,t){if(e.Type||(e.Type=e.Command),e.Command||(e.Command=e.Type),e.Page||(e.Page=ThisPage),Classic&&"pop"==e.Next&&(e.Next=""),isWEB)return void(parent.ToCq?parent.ToCq.push(e):ToCq.push(e));t?ToCq.push("app://"+rfc3986EncodeURIComponent(JSON.stringify(e))):ToCq.push("app://"+encodeURIComponent(JSON.stringify(e)))}function openInNewTab(e,t){t||(t="_blank"),(t=window.open(e,t)).focus()}function HitWeb(e,t){if(!(e.search(/app:/i)>=0)){if(isWEB)return void openInNewTab(e,t);ToC({Command:"HitWeb",Url:e})}}function LinkValidator(e,t){e.stopPropagation();var a=t.charAt(0);if("@"==a)return void HitWeb(config.https+"//xat.me/"+t.substr(1));if("%"==a)return isWEB?void HitWeb(config.https+"//xat.com/"+t.substr(1)):void ToC({Command:"StartGroup",Group:t.substr(1)});var i,n=new Array(64);for(i=0;i<26;i++)n[i]=String.fromCharCode(i+65);for(i=26;i<52;i++)n[i]=String.fromCharCode(i+71);for(i=52;i<62;i++)n[i]=String.fromCharCode(i-4);n[62]="+",n[63]="/";var o=new Array,r=new Array;for(i=0;i<t.length;i++)o[i]=t.charCodeAt(i);for(i=0;i<o.length;i++)switch(i%3){case 0:r.push(n[(252&o[i])>>2]);break;case 1:r.push(n[(3&o[i-1])<<4|(240&o[i])>>4]);break;case 2:r.push(n[(15&o[i-1])<<2|(192&o[i])>>6]),r.push(n[63&o[i]])}for(i%3==1?r.push(n[(3&o[i-1])<<4]):i%3==2&&r.push(n[(15&o[i-1])<<2]),i=r.length;i%4!=0;i++)r.push("=");var l="m=1&";isWEB&&(l="");var s=config.https+"//linkvalidator.net/warn.php?"+l+"p=";for(i=0;i<r.length;i++)s+=r[i];HitWeb(s)}function WordIsLink(e){if(!e.match(/['"<>,;`]/)){if(e.match(/^[@%][a-zA-Z0-9_]+$/))return e.toLowerCase();if(!(e.indexOf(".")<0)){var t=e.toLowerCase();if(!(t.indexOf("app:")>=0)){if(t.indexOf("http")>=0)return e;var a=!1,i=2;t.indexOf("www.")>=0&&(a=!0);var n=t.indexOf("/");-1==n&&(n=t.length);for(var o,r=0;r<n;r++)if(((o=t.charCodeAt(r))<48||o>57)&&46!=o){i=0;break}return"."==t.charAt(n-1)&&(i=2),"."==t.charAt(n-2)&&(i=2),"."==t.charAt(n-3)&&i++,"."==t.charAt(n-4)&&i++,"."==t.charAt(n-5)&&i++,1==i&&(a=!0),a?"http://"+e:void 0}}}}function createSmText(e,t,a,i,n){void 0==e&&(e=""),void 0==t&&(t="message"),void 0==a&&(a="holder"),void 0==i&&(i="20");var o=document.createElement("span");o.setAttribute("class",t);var r=!0,l=10;(134217728&n||0==e.search("<inf8>"))&&(o.style.fontStyle="italic"),e.match(/&.*;/)&&(e=(e=(e=(e=(e=(e=e.replace(/&apos;/g,"'")).replace(/&quot;/g,'"')).replace(/&amp;/g,"＆")).replace(/&slsh;/g,"\\")).replace(/&gt;/g,"〉")).replace(/&lt;/g,"〈"));for(var s,d,c=[],m=e.split(/(\(.*?\)|<.*?>|\s)/),g=-1,u=!1,h=0;h<m.length;h++)0!=(d=m[h]).length&&" "!=d&&(s=!("("==d.charAt(0)||"<"==d.charAt(0)),2&n&&s&&d.search(".")>-1&&(d=" "+d,s=!1),u&&s?c[g]+=" "+d:c[++g]=d,u=s);1&n&&1==c.length&&"("==c[0].charAt(0)&&(i=30);for(h=0;h<c.length;h++)for(var p=c[h];;){if(0==p.length)break;if(p.length>2){if("("==p.charAt(0)){if("\ufeff"==p.charAt(1)){addText(o,"("+p.substring(2)+" ");break}if(l--<=0)break;if(p.search(" ")<0){o.appendChild(createSm(p,a,i)),addText(o," ");break}}if("<"==p.charAt(0)){if("s"==p.charAt(1)){var f=p.charAt(2);p=p.substr(3,p.length-5);var v=makeElement(o,"span",4==f?"":"swear"+f);if(4!=f)v.onclick=function(e){onSwear(e)};else{var b=15662848,C=p.indexOf("<");-1!==C&&(b=p.substring(0,C),p=p.substring(C+1)),v.style.backgroundColor="#"+toHex6(b)}addText(v,p),addText(o," ");break}if(">"!=p.charAt(p.length-1))break;o.appendChild(createSm(p,a,i));break}if(" "==p.charAt(0)&&!(268435456&n)){var y=WordIsLink(p=p.substr(1));if(y){var T=makeElement(o,"a");T.Link=y,T.onclick=function(e){return LinkValidator(e,this.Link),!1},T.href="#",addText(T,p),addText(o," ");break}}}addText(o,p+" ")," "!=p.charAt(0)&&"\ufeff"!=p.charAt(0)&&(r=!1);break}return r&&addText(o," "),o}function createSm(e,t,a,i){i||(i=-1),e=(e=e.replace(" ","")).toLowerCase();var n=document.createElement("span");return n.setAttribute("class",t),"<"==e.charAt(0)?e=IconToLib(e,a):("("!=e.charAt(0)&&(e="("+e+")"),e=Animated+"_"+e+"_"+a),loadImage(n,e,i),n}function SmileyToHttp(e,t){return iMux("GetStrip5.php?c="+Animated+"_"+escape(e)+"_"+t,"s")}function IconToLib(e,t){var a,i=0,n=0;switch(e=e.substr(1,e.length-2)){case"del":a="xdelete",i=1;break;case"o":a="chatter2",i=2;break;case"priv":a="lock",t=12;break;case"i":a="HelpIcon",i=1;break;case"inf8":n=39168;case"in":a="HelpIcon",i=2,20==t&&(t=18);break;case"ho":a="ho",i=1;break;default:return""}return"g_"+a+"_"+t+"_"+t+"_"+n+"_"+i}function LoadBackground(e){e="h"==e.charAt(0)?SafeImage(e,640,1136):config.xatback,document.body.style.background="url('"+e+"') no-repeat 0 0 / cover fixed"}function LoadImage(e,t,a,i,n){var o,r=30;i&&(r=i),n?(n.Width&&(r=n.Width),n.Height&&n.Height,xInt(n.GreyCnt)):n={},i||(i=r);var l="";return 160==i&&(l="160"),parseInt(t)>0&&(o=config.https+"//www.xatech.com/web_gear/chat/av/"+parseInt(t)+".png"),o||(o=t),"<"==o.charAt(0)&&(o=IconToLib(o,i),i=-3),e.holder=createImage(e,"avatarholder"+l,o,i),t}function createImage(e,t,a,i){var n=makeElement(e,"span",t);return loadImage(n,a,i),n}function Visible(e){var t=e.getBoundingClientRect(),a=(t.top>=0&&t.left>=0&&t.top)<=(window.innerHeight||document.documentElement.clientHeight);return t.bottom>=0&&a?1:0}function loadImage(e,t,a,i){if(""!=t){var n=t?t.charAt(0):"";if(!(a>0&&"h"!=n&&"("!=n&&"/"!=n)&&(!e||(t?(e.setAttribute("data-sm",t),e.setAttribute("data-size",a)):(t=e.getAttribute("data-sm"),a=e.getAttribute("data-size")),LineVisible))){var o=t.hashCode();void 0==i&&(i=8);var r;if((r=ImageHash[o])&&e)for(var l=r.length,s=0;s<l;s++){var d=r[s];if(!d[0]&&d[1])return e.appendChild(d[1]),d[0]=e,ImageHash[o].push(d),void ImageHash[o].splice(s,1)}if(r||(r=ImageHash[o]=[]),r.push([e,null]),!imgh[o]){if(imgh[o]=new Image,imgh[o].sm=t,imgh[o].smer=o,imgh[o].size=a,imgh[o].retries=i,imgh[o].failed=!1,imgh[o].onload=imageLoaded,imgh[o].onerror=imageError,r[0][3])return imgh[o].src=r[0][3],void(imgh[o].pRatio=r[0][4]);var c="";"<i>"==t?c=iMux("GetStrip5.php?c=g_HelpIcon_"+a+"_"+a+"_0_1","s"):"("==t.charAt(0)?c=SmileyToHttp(t,a):parseInt(t)>0&&(c=config.https+"//www.xatech.com/web_gear/chat/av/"+parseInt(t)+".png"),a<0?c=iMux("GetStrip5.php?c="+escape(t),"s"):c||((t=(t=t.split("#"))[0]).indexOf("Get")>=0&&(t.indexOf("GetStrip")>=0&&(t=""),t.indexOf("GetImage")>=0&&(t=(t=t.split("U=")).length>1?t[1]:"")),c=SafeImage(t,a,a)),imgh[o].src=c}}}}function imageLoaded(e){var t=e.target.smer,a=imgh[t];if(a.width>1&&a.height>1){var i,n=Math.round(a.width/a.height),o=a.width>=3*a.height&&a.width%a.height==0;if(o&&(i=a.height*n,!HeightFramesH[i])){HeightFramesH[i]=!0;var r="@-webkit-keyframes sm_"+i+" { from { -webkit-transform:translate3d(0,0,0); } to { -webkit-transform:translate3d(-"+i+"px,0,0); } }";document.styleSheets[0].insertRule(r,0)}var l=ImageHash[t];if(!l)return;var s=ImageHash[t].length,d=.75;for(-3==a.size?d=1:a.pRatio&&(d/=a.pRatio);--s>=0;)if(!l[s][1]){var c=document.createElement("span");if(a.size<0)c.style["-webkit-transform"]="translateZ(0) scale3d("+d+","+d+",1.0)";else{var m=a.size/a.height;c.style["-webkit-transform"]="translateZ(0) scale3d("+m+","+m+",1)"}if(c.style["-webkit-perspective"]="1000",c.style["-webkit-backface-visibility"]="hidden",c.style.display="block",c.style.width=a.height+"px",c.style.height=a.height+"px",c.style.overflow="hidden",c.style.position="absolute",-1==a.size){g=-(a.height-SmFudgeSize)/2;c.style["margin-top"]=g-SmFudge+"px",c.style["margin-left"]=g+"px",l[s][0]&&window.location.href.match(/actions.html$/)&&(c.style["margin-bottom"]=-(a.height-SmFudge)/2+"px",c.style["margin-left"]=c.style["margin-top"]="0px",c.style.position="relative")}else{if(-2==a.size)g=-(a.height-42)/2;else if(-3==a.size)g=-(a.height-30)/2;else var g=-(a.height-a.size)/2;c.style["margin-top"]=g+"px",c.style["margin-left"]=g+"px"}var u=document.createElement("span");u.style.position="absolute",u.style.top="0",u.style.left="0",u.style.width=a.height*n+"px",u.style.height=a.height+"px",o&&(u.style["-webkit-animation"]="sm_"+i+" "+n*(1/12)+"s steps("+n+") infinite",u.setAttribute("data-animation",u.style["-webkit-animation"])),u.style.background="url("+a.src+")no-repeat",c.appendChild(u),l[s][1]=c,l[s][2]=a.width*a.height,ImageMemory+=l[s][2],HolderSpan=l[s][0],HolderSpan&&HolderSpan.appendChild(c)}l[0][3]=imgh[t].src,l[0][4]=imgh[t].pRatio,delete imgh[t]}}function imageError(e){if(-1==e.target.retries){t=e.target.smer;delete imgh[t]}else{var t=e.target.smer;imgh[t];imgh[t].retries>0?imgh[t].failed=!0:delete imgh[t]}}function calcAvSize(e){return e<=30?30:e<=80?80:e<=160?160:e<=320?320:640}function onScrollEventHandler(e){manScrollTimeOut=5,zapTimeout||doZap(30)}function doZap(e){if(e)return void(zapTimeout=setTimeout(doZap,e));zapTimeout=null;for(var t=document.querySelectorAll("[data-line]"),a=t.length,i=[],n=[],o=0;o<a;++o){var r=t[o],l=r.getAttribute("data-visible"),s=Visible(r);l!=s&&(s?i.push(r):n.push(r),r.setAttribute("data-visible",s))}for(;n.length;)removeImages(n.shift());for(;i.length;)reloadImages(i.shift())}function removeImages(e){for(var t=e.querySelectorAll("[data-sm]"),a=t.length,i=0;i<a;++i){var n=t[i],o=n.getAttribute("data-sm"),r=ImageHash[o.hashCode()];if(!r)return;for(var l in r){var s=r[l];if(n==s[0]){s[0]=null;var d=s[1];if(!d)break;if(!d.parentNode)break;d.parentNode.removeChild(d);break}}}}function reloadImages(e){var t=e.querySelectorAll("[data-sm]"),a=t.length;LineVisible=1;for(var i=0;i<a;++i)loadImage(t[i])}function DumpMemory(e){if(!(ImageMemory<=e)){var t,a;ImageMemory=0;for(var i in ImageHash){for(var n=(t=ImageHash[i]).length-1;n>=0;n--){var o=t[n];if(0!=e)!o[0]||o[1]&&!o[1].parentNode?t.splice(n,1):o[2]&&(ImageMemory+=parseInt(o[2]));else{if(!(a=o[1])||!a.parentNode)continue;a.parentNode.removeChild(a)}}0==t.length&&delete ImageHash[i]}0==e&&(ImageHash={})}}function smtick(){LineVisible=1;for(var e in imgh)if(1==imgh[e].failed){var t=imgh[e].retries-1,a=imgh[e].sm,i=imgh[e].size;delete imgh[e],console.log("smtick  "+microtime(!0)+" "+a+" "+t),loadImage(null,a,i,t)}DumpMemory(1e7),Seconds++}function LimitMessages(e,t){try{var a=document.getElementById(e),i=a.childNodes,n=i.length-t;if(n>0)for(var o=n-1;o>0;o--)a.removeChild(i[o])}catch(e){}}function TranslateNodes(e,t){var a=!1;for(var i in LangFiles)if(LangFiles[i]){a=!0;break}if(a)for(var n,o,r,l=e.querySelectorAll("[data-localize]"),s=l.length,i=0;i<s;++i)r=(o=l[i]).getAttribute("data-localize").split("."),t&&t!=r[0]||(n=LangFiles[r[0]][r[1]])&&changeText(o,n)}function GotLang(e){for(var t in e)LangFiles[t]=e[t],TranslateNodes(document,t)}function LoadLang(e){if("en"!=Language){LangFiles=e;for(var t in e)loadJSON(config.https+"//xat.com/json/lang/getlang2.php?f="+t+"&l="+Language,GotLang)}}function makeElement(e,t,a,i){var n=document.createElement(t);return a&&(n.className=a),i&&(n.id=i),e&&e.appendChild(n),n}function addEditBox(e,t,a,i,n,o){var r=makeElement(e,"div"),l=makeElement(r,"span","edittitle");if(n&&(l.style.fontWeight="bold"),text=addText(l,a),void 0===i&&(i=""),"noedit"!==i){var s=makeElement(r,"input");"password"==o?s.type="password":(s.type="text",s.value=i),s.id=t}}function GetTranslation(e){var t=e.split(".");return!!(LangFiles&&LangFiles[t[0]]&&LangFiles[t[0]][t[1]])&&LangFiles[t[0]][t[1]]}function TransText(e,t){var a=GetTranslation(e);return a||t}function addText(e,t){if(Array.isArray(t)){if(Array.isArray(t[0])){for(var a in t)addText(e,t[a]);return""}if(t[0]){(e=makeElement(e,"span")).setAttribute("data-localize",t[0]);var i=GetTranslation(t[0]);t=t[1],i&&(t=i)}else t=t[1]}var n=document.createTextNode(t);return e&&e.appendChild(n),n}function changeText(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);addText(e,t)}function setTextNode(e,t,a){var i=document.getElementById(e);if(i){for(;i.firstChild;)i.removeChild(i.firstChild);t&&i.appendChild(document.createTextNode(t)),a&&i.appendChild(a)}}function clearDiv(e,t){if(t||(t=document.getElementById(e)),t)for(;t.firstChild;)t.removeChild(t.firstChild);return t}function removeById(e,t){for(var a=document.getElementById(e);t;)a&&(a=a.parentNode),t--;null!=a&&a.parentNode.removeChild(a)}function insertAfter(e,t){if(t){var a=t.parentNode;a.lastchild==t?a.appendChild(e):a.insertBefore(e,t.nextSibling)}}function restrictCharacters(e,t,a){if(!t)var t=window.event;return t.keyCode?code=t.keyCode:t.which&&(code=t.which),!!String.fromCharCode(code).match(a)}function setTitleBarNum(e){var t=document.getElementById("titleBar");t&&t.count&&(e>0?(t.count.innerHTML=e,t.count.style.visibility="visible"):t.count.style.visibility="hidden")}function addTitleBar(e,t,a,i,n){if(config.PhoneType!=PhoneTypes.IPHONE){clearDiv("titleBar");var o=document.getElementById("titleBar"),r=makeElement(makeElement(o,"div","listTable htmlTitleBarButtons"),"div","dialogRow"),l=makeElement(r,"div","dialogCell htmlTitleButton");l.onclick=a,addText(makeElement(l,"span",""),t);makeElement(r,"div","dialogCell dialogWide");var s=makeElement(r,"div","dialogCell dialogCellRight htmlTitleButton");s.onclick=n,addText(makeElement(s,"span","","TitleBarRight"),i);var d=makeElement(makeElement(makeElement(makeElement(o,"div","listTable htmlTitleBar"),"div","dialogRow"),"div","dialogCell dialogWide dialogCellCenter htmlTitleTitle"),"span","","TitleBarTitle");e.length>0&&addText(d,e)}}function AddSections(Sections,Click,Icons){clearDiv("topSelector");var div=document.getElementById("topSelector"),t1=makeElement(div,"div","listTable"),r1=makeElement(t1,"div","dialogRow");for(var i in Sections){Sec=Sections[i];var c1=makeElement(r1,"div","dialogCell");Click&&(c1.Click=Click+Sec+"')",c1.onclick=function(event){eval(this.Click)});var t2=makeElement(c1,"div","listTable tabTable"),r2=makeElement(t2,"div","dialogRow"),c2=makeElement(r2,"div","dialogCell dialogCellCenter tabLabelCell","Label"+Sec),img=makeElement(c2,"img","selector");img.height=16,img.width=16,img.src=Icons?"svg/"+Icons[i]+".svg":"svg/sel"+Sec+".svg";var span=makeElement(c2,"span","selector");addText(span,["mob1."+Sec.toLowerCase(),Sec]);var r3=makeElement(t2,"div","dialogRow"),c3=makeElement(r3,"div","dialogCell tabIndicatorCell","Indicator"+Sec)}}function SetSection(e){var t;if(t=document.getElementsByClassName("tabLabelCellSelected"))for(i in t)t[i].className="dialogCell dialogCellCenter tabLabelCell";if(t=document.getElementsByClassName("tabIndicatorCellSelected"))for(i in t)t[i].className="dialogCell tabIndicatorCell";(t=document.getElementById("Label"+e))&&(t.className+=" tabLabelCellSelected"),(t=document.getElementById("Indicator"+e))&&(t.className+=" tabIndicatorCellSelected"),CurrentSec=e}function FillInAll(e,t){for(var a in t)if(!e[t[a]])return AlertMessage("Please fill in all boxes"),!1;return!0}function AlertMessage(e,t){var a=clearAlertMessage();if(!a){var i="AlertDialog";HiddenDivs[i]='<div class="modalDialogContentClassic"><div class="dialogTitleBar"><span data-localize=mob1.message class="dialogTitle">Message</span><span data-localize=mob1.close class="dialogTitleAction" onclick="modalClose()">Close</span></div><div class="dialogBody"><div class="dialogPadding"><div id="AlertMessage"></div></div></div></div>',doModal(i),a=clearAlertMessage()}var n;if(e=e.replace(/<.*?>/g,""),e=e.replace(/<.*/g,""),e=e.replace(/\[link (.*?)\]/g,function(e,t){return n=t,""}),t?a.innerHTML=e:a.textContent=e,n){var o=makeElement(a,"a");o.href=config.https+"//"+n,o.target="_blank",addText(o,n)}a.style.color="#F00",a.style.fontWeight="bold",(a=document.getElementById("openModal"))&&(a.style.visibility="visible")}function clearAlertMessage(){ConnectingClose();var e=document.getElementById("openModal");return e&&(e=e.getElementsByClassName("AlertMessage")),e&&e.length>0?(e[0].textContent="",e[0]):(e=document.getElementById("AlertMessage"),e?(e.textContent="",e):null)}function BuildDialog(e,t){var a=e=makeElement(e,"div","modalDialogContentClassic"),i=e,n=e;for(var o in t){var r=t[o];switch(r.type){case"title":addEditBox2(e,0,"dialogTitleBar",r.name,"noedit","bold"),n=i=a=makeElement(e,"div","dialogBody"),makeElement(a=makeElement(a,"div","dialogPadding"),"div","AlertMessage"),i=makeElement(i=makeElement(a,"div","dialogBody"),"div","dialogTable");break;case"password":addEditBox2(i,r.id,"dialogRow",r.name,0,0,"password");break;case"dialog":addEditBox2(i,r.id,"dialogRow",r.name);break;case"text":addEditBox2(a,0,"",r.name,"noedit");break;default:addEditBox2(n,0,"dialogActions",r)}}}function addEditBox2(e,t,a,i,n,o,r){var l=makeElement(e,"div",a);switch(a){case"dialogTitleBar":addText(c=makeElement(l,"span","dialogTitle"),i+" "),(d=makeElement(l,"span","dialogTitleAction")).id="modalCancel";break;case"dialogRow":if(addText(d=makeElement(l,"div","dialogCell"),i+" "),void 0===n&&(n=""),"noedit"===n)break;var s=makeElement(d=makeElement(l,"div","dialogCell dialogWide"),"input","dialogInput");"password"==r?s.type="password":(s.type="text",s.value=n),s.id=t;break;case"":addText(l,i+" ");break;case"dialogActions":if("Cancel"==i.action){var d=document.getElementById("modalCancel");addText(d,i.label),d.setAttribute("onclick","modalClose()"),e.removeChild(l);break}addText(l," ");var c=makeElement(l,"span","dialogActionRight");if(addText(c,i.label),c.setAttribute("onclick","modalClose()"),1&i.flags)c.style.opacity="0.5";else{var m;"function"==typeof sendApp&&(m=sendApp),!m&&sendFunc&&(m=sendFunc),c.onclick=function(e){clearAlertMessage(),m(e,i.action,i.Power)}}}}function doModal(e){modalClose();var t=makeElement(document.body,"div","modalDialog");t.setAttribute("id","openModal");var a=makeElement(t,"div"),i="";if("string"==typeof e&&(i=e.charAt(0)),"{"!=i&&"["!=i||(e=JSON.parse(e)),null!==e&&"object"==typeof e)BuildDialog(a,e);else if("h"==e.charAt(0)){var n=makeElement(a,"iframe");n.setAttribute("src",e),n.setAttribute("width",300),n.setAttribute("height",500)}else{var o=makeElement(a,"div");CacheHiddenDivs(),o.innerHTML=HiddenDivs[e],TranslateNodes(o),"function"==typeof openSmiliesDialog&&openSmiliesDialog();var r=o.firstElementChild;if(r){var l=r.dataset.w,s=r.dataset.h;l||(l=.4),s||(s=.3);var d=(1-l)/2,c=(1-s)/2,m=o.offsetParent.offsetWidth,g=xInt(m*d);m-=2*g;var u=o.offsetParent.offsetHeight,h=xInt(u*c);u-=2*h,r.style.cssText="width:"+m+"px; height:"+u+"px; left:"+g+"px; top: "+h+"px;"}}var p;config.PhoneType!=PhoneTypes.DROIDPHONE&&config.PhoneType!=PhoneTypes.WEB||(p=document.getElementById("PushUp")),a.style.top=p?(t.clientHeight-a.clientHeight)/5:(t.clientHeight-a.clientHeight)/2,t.style.opacity=1,t.style.pointerEvents="auto"}function modalClose(){removeById("openModal")}function CacheHiddenDivs(){if(!DoneHiddenDivs){DoneHiddenDivs=!0;var e,t,a=document.getElementsByClassName("dialog");for(e=0;e<a.length;e++)t=a[e],Classic&&"LoginForm"==t.id||(HiddenDivs[t.id]=t.innerHTML,t.innerHTML="")}}function AddHammer(e,t){var a;switch(t){case Hammer.DIRECTION_LEFT:a="swipeleft";break;case Hammer.DIRECTION_RIGHT:a="swiperight";break;default:a="swipeleft swiperight",t=Hammer.DIRECTION_HORIZONTAL}var i=new Hammer(e,{preventDefault:!0,recognizers:[[Hammer.Swipe,{direction:t}]],cssProps:{userselect:!1}});return i.on(a,function(e){var t={Type:e.type};e.target.id?t.id=e.target.id:e.target.parentNode.id&&(t.id=e.target.parentNode.id),sendApp(t)}),i}function SetTotalUnRead(e){var t=document.getElementById("titleBar");t&&t.count&&(0==e?t.count.style.visibility="hidden":(e>9&&(e="9+"),t.count.innerHTML=e,t.count.style.visibility="visible"))}function getXats(){modalClose();var e={};e.html="",e.Page="profile",e.Command="GetXats",ToC(e)}function ShowCaptcha(e){"%"==e.charAt(0)&&(e=urldecode(e)),Obj=JSON.parse(e),Obj.Next="captcha",ToC(Obj)}function NOP(){}function isEmpty(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function MakeHelpMessage(e,t){LineVisible=1,t||(t="");var a=makeElement(0,"li","message",t),i=makeElement(makeElement(makeElement(makeElement(a,"div","listTable"),"div","dialogRow"),"div","dialogCell dialogWide noPointer"),"div","noftxt");i.innerHTML="";var n=makeElement(i,"p");n.className="chatsMessage";var o=createSmText(e);return n.appendChild(o),a}function InitPage(e){e.length>1?ConnectingOpen(e):ConnectingClose()}function ConnectingClose(){connTimeout&&clearTimeout(connTimeout),connTimeout=null,removeById("Connecting")}function ConnectingOpen(e){if(e&&document.getElementById("Connecting")){var t=document.getElementById("loading");if(t)return void(t.innerHTML=e+"&nbsp;<span>.</span><span>.</span><span>.</span></div>")}if(e)return connType=e,connTimeout&&clearTimeout(connTimeout),void(connTimeout=setTimeout(ConnectingOpen,500));ConnectingClose();var a=makeElement(document.body,"div","connectingDialog");a.setAttribute("id","Connecting");var i=makeElement(a,"div");i.innerHTML='<!DOCTYPE html><html lang="en"><body><div id="xatLoader" onclick="ConnectingClose()"><div id="xatLoaderInner"><img id="planet" src="svg/x.svg"/><img id="rocket" src="svg/ss.svg" /><div id="loading" class="txt"><span id="ConMsgId"></span>&nbsp;<span>.</span><span>.</span><span>.</span></div></div></div></body></html>',addText(document.getElementById("ConMsgId"),["mod1."+connType.toLowerCase(),connType]),i.style.top=(a.clientHeight-i.clientHeight)/2,a.style.opacity=1,a.style.pointerEvents="auto"}function onSwear(e){var t=e.target;t.className="",t.onclick=null,e.stopPropagation()}function xInt(e){return e=parseInt(e),isNaN(e)?0:e}function microtime(e){var t=(new Date).getTime()/1e3,a=parseInt(t,10);return e?t:Math.round(1e3*(t-a))/1e3+" "+a}function urldecode(e){return decodeURIComponent((e+"").replace(/\+/g,"%20"))}function loadJSON(e,t,a){var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){if(t){var e;try{e=JSON.parse(i.responseText)}catch(e){a&&a(e)}e&&t(e)}}else a&&a(i)},i.open("GET",e,!0),i.send()}function loadHTML(e,t,a){var i=new XMLHttpRequest;i.onreadystatechange=function(){4===i.readyState&&(200===i.status?t&&t(i.responseText):a&&a(i))},i.open("GET",e,!0),i.send()}function DecodeColor(e,t){function a(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),6*a<1?e+6*(t-e)*a:2*a<1?t:3*a<2?e+(t-e)*(2/3-a)*6:e}if(void 0!=e){var i=t&NamePowers.red>0,n=t&NamePowers.green>0,o=t&NamePowers.blue>0,r=t&NamePowers.light>0;if(0!=i||0!=n||0!=o||0!=r){var l=(e=e.toLowerCase()).split("r").length-1,s=e.split("g").length-1,d=e.split("b").length-1,c=e.split("+").length-1,m=e.split("-").length-1,g=.5;if(0==l&&0==s&&0==c&&0==m)for(var u=0,h=0;h<e.length;h++){var p=e.charAt(h);if(6==(u=p>="0"&&p<="9"||p>="a"&&p<="f"?u+1:0)){var f=parseInt(e.substr(h-u+1,6),16);if(0!=i&&0!=n&&0!=o&&0!=r)return f;d=255&f,s=f>>8&255,l=f>>16&255,c=m=0,0!=r&&(g=(Math.min(l,Math.min(s,d))+Math.max(l,Math.max(s,d)))/512);break}}if(0!=l||0!=s||0!=d||0!=c||0!=m){0==i&&(l=0),0==n&&(s=0),0==o&&(d=0),0==r&&(c=m=0),0==l&&0==s&&0==d&&(l=s=d=1);var v,b,C,y,T,k,w=l/(l+s+d),x=s/(l+s+d),E=d/(l+s+d),I=Math.min(w,Math.min(x,E)),S=Math.max(w,Math.max(x,E)),A=S-I;if(k=(S+I)/2,0==A)y=T=0;else{T=k<.5?A/(S+I):A/(2-S-I);var H=((S-w)/6+A/2)/A,N=((S-x)/6+A/2)/A,B=((S-E)/6+A/2)/A;w==S?y=B-N:x==S?y=1/3+H-B:E==S&&(y=2/3+N-H),y<0&&(y+=1),y>1&&(y-=1)}if((k=g+.0625*c-.0625*m)<0&&(k=0),k>1&&(k=1),0==T)v=b=C=k;else{var M=2*k-(h=k<.5?k*(1+T):k+T-T*k);v=a(M,h,y+1/3),b=a(M,h,y),C=a(M,h,y-1/3)}return v=Math.round(255*v),b=Math.round(255*b),C=Math.round(255*C),(v<<16)+(b<<8)+C}}}}function toHex6(e){return("00000"+Number(e).toString(16)).slice(-6).toUpperCase()}function MakeGlow(e){var t="0 0 0.2em #"+toHex6(e);return t+","+t+","+t}function rgbtohsv(e){var t,a,i,n=(e>>16&255)/255,o=(e>>8&255)/255,r=(255&e)/255,l=Math.min(n,o,r),s=Math.max(n,o,r);return t=l==s?0:s==n?(60*(o-r)/(s-l)+360)%360:s==o?60*(r-n)/(s-l)+120:60*(n-o)/(s-l)+240,a=0==s?0:(s-l)/s,i=s,new Array(t,a,i)}function hsvtorgb(e,t,a){var i,n,o,r,l,s,d,c;if(e%=360,0==a)return 0;switch(e/=60,r=Math.floor(e),l=e-r,s=a*(1-t),d=a*(1-t*l),c=a*(1-t*(1-l)),r){case 0:i=a,n=c,o=s;break;case 1:i=d,n=a,o=s;break;case 2:i=s,n=a,o=c;break;case 3:i=s,n=d,o=a;break;case 4:i=c,n=s,o=a;break;case 5:i=a,n=s,o=d}return Math.floor(255*i)<<16|Math.floor(255*n)<<8|Math.floor(255*o)}function ProcessName(e,t,a){void 0==e&&(e=""),"$"==e.charAt(0)&&(e=e.substr(1)),void 0==t&&(t=""),void 0==a&&(a=65535);var i,n,o,r,l,s={};return s.status="",t.length>0&&(o=t.split("#"),a&NamePowers.status&&(s.status=o[0]),a&NamePowers.statusglow&&(s.statusglow=DecodeColor(o[1],a)),a&NamePowers.statuscol&&(s.statuscol=DecodeColor(o[2],a))),l=r=e,e=e.replace(/\s*\(\uFEFF?hat.*?\)\s*/gi," "),e=e.replace(/\s*\(\uFEFF?glow.*?\)\s*/gi," "),e=e.replace(/[\s_]*$/gi,""),s.name=e+"\ufeff",(i=r.replace(/.*\((glow.*?)\).*/i,"$1"))!==r&&(i=i.split("#"),a&NamePowers.glow&&i[0]&&(s.glow=DecodeColor("g",a)),a&NamePowers.glow&&i[1]&&(s.glow=DecodeColor(i[1],a)),a&NamePowers.col&&i[2]&&(s.col=DecodeColor(i[2],a))),(n=l.replace(/.*\((hat.*?)\).*/i,"$1"))!==l&&(n=n.split("#"),a&NamePowers.hat&&n[0]&&(s.hat="h"),a&NamePowers.hat&&n[1]&&(s.hat=n[1]),a&NamePowers.hat&&n[2]&&(s.hatcol=DecodeColor(n[2],a))),s}function Getms(){return Date.Now()}function GetTimeToGo(e){if(0==e)return"";var t=(Date.now()-e)/6e4;return t<0?"":0==(t=parseInt(t))?["mob1.justnow","just now"]:t<120?[["",t+" "],["mob1.minsago","mins ago"]]:(t/=60,t<24?[["",parseInt(t)+" "],["mob1.hoursago","hours ago"]]:[["",parseInt(t/24)+" "],["mob1.daysago","days ago"]])}function iMux(e,a){for(a||(a="i"),t=e.substr(-10),i=0,n=0;n<10;n++)i+=t.charCodeAt(n);return config.https+"//"+a+(1&i)+".xat.com/web_gear/chat/"+e}function SafeImage(e,t,a){if(0==e.length)return"";var i=parse_url(e);return(i||(e="/"==e.charAt(0)?"https:"+e:"https://"+e,i=parse_url(e)))&&i.host?i.host.indexOf("xat.com")>=0&&i.path.indexOf("GetImage")>0?e:(t==a&&(t=a=calcAvSize(t)),iMux("GetImage5.php?"+Animated+"&W="+t+"&H="+a+"&U="+e)):""}function parse_url(e,t){for(var a=["source","scheme","authority","userInfo","user","pass","host","port","relative","path","directory","file","query","fragment"],i={},n=i["phpjs.parse_url.mode"]&&i["phpjs.parse_url.mode"].local_value||"php",o={php:/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},r=o[n].exec(e),l={},s=14;s--;)r[s]&&(l[a[s]]=r[s]);if(t)return l[t.replace("PHP_URL_","").toLowerCase()];if("php"!==n){var d=i["phpjs.parse_url.queryKey"]&&i["phpjs.parse_url.queryKey"].local_value||"queryKey";o=/(?:^|&)([^&=]*)=?([^&]*)/g,l[d]={},(l[a[12]]||"").replace(o,function(e,t,a){t&&(l[d][t]=a)})}return delete l.source,l}function xEscape(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}function rfc3986EncodeURIComponent(e){return encodeURIComponent(e).replace(/[!'()*~]/g,xEscape)}function addSmilies(e,t,a,i,n){syel||(syel=JSON.parse(e),soth=JSON.parse(t),spow=JSON.parse(a),spowhave=JSON.parse(i),stop=JSON.parse(n))}function detectIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return Browser="MS",parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){Browser="MS";var a=e.indexOf("rv:");return parseInt(e.substring(a+3,e.indexOf(".",a)),10)}var i=e.indexOf("Edge/");return i>0?(Browser="MS",parseInt(e.substring(i+5,e.indexOf(".",i)),10)):(e.toLowerCase().indexOf("firefox")>-1&&(Browser="FF"),!1)}function setTextBoxEditable(e,t){var a=document.getElementById(e);return a&&(a.setAttribute("contenteditable",t),t?a.classList.add("textBox","textBoxEdit"):a.classList.remove("textBox","textBoxEdit")),a}function isString(e){return"[object String]"===Object.prototype.toString.call(e)}var defconfig={fake:0,xtrace:1,trace:0,xatback:"XatBackground.jpg"},config=defconfig,uniqueid=1,ImageHash={},iidLine=1,LineVisible=0,ImageMemory=0,Seconds=0,ThisPage="",HiddenDivs={},DoneHiddenDivs,Animated,Language,Fac72={1:1,2:1,3:1,4:1,6:1,8:1,9:1,12:1,18:1,24:1,36:1,72:1},ToCq=[],ToCqS=[],HugKissDebug=!1,PhoneTypes={IPHONE:1,DROIDPHONE:2,WEB:3,WINPHONE:4},isWEB,sendFunc,Classic;setInterval(Tick12,83);var imgh=[],SmFudge=14,SmFudgeSize=19,HeightFramesH={},zapTimeout=null,manScrollTimeOut=0;setInterval(function(){smtick()},1e3);var LangFiles,connTimeout=null,connType,NamePowers={statusglow:16,statuscol:32,glow:4,col:8,status:2,hat:1,red:64,green:128,blue:256,light:512},Trusted;String.prototype.hashCode=function(){var e=0;if(0==this.length)return e;for(i=0;i<this.length;i++)ch=this.charCodeAt(i),e=(e<<5)-e+ch,e&=e;return e};var syel,soth,spowhave,spow,stop,scount,Browser;detectIE();