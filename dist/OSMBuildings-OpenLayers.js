var OSMBuildings=function(){function va(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function Sa(a){for(var b=Infinity,c=-Infinity,d=Infinity,e=-Infinity,f=0,h=a.length-3;f<h;f+=2)b=T(b,a[f]),c=N(c,a[f]),d=T(d,a[f+1]),e=N(e,a[f+1]);return{x:b+(c-b)/2<<0,y:d+(e-d)/2<<0}}function Y(a,b){var c={};a/=U;b/=U;c[Ta]=0>=b?90:1<=b?-90:wa*(2*Ua(Va(A*(1-2*b)))-O);c[Wa]=360*(1===a?1:(a%1+1)%1)-180;return c}function xa(a,b,c){function d(a){if("XDomainRequest"in B&&a!==e.readyState&&(e.readyState=a,e.onreadystatechange))e.onreadystatechange()}
a=a.replace(/\{ *([\w_]+) *\}/g,function(a,c){return b[c]||a});var e="XDomainRequest"in B?new XDomainRequest:new XMLHttpRequest;e.onerror=function(){e.status=500;e.statusText="Error";d(4)};e.ontimeout=function(){e.status=408;e.statusText="Timeout";d(4)};e.onprogress=function(){d(3)};e.onload=function(){e.status=200;e.statusText="Ok";d(4)};e.onreadystatechange=function(){4===e.readyState&&e.status&&!(200>e.status||299<e.status)&&c&&e.responseText&&c(JSON.parse(e.responseText))};d(0);e.open("GET",a);
d(1);e.send(null);d(2);return e}function Z(a){for(var b=C+q,c=x+p,d=0,e=a.length-3;d<e;d+=2)if(a[d]>q&&a[d]<b&&a[d+1]>p&&a[d+1]<c)return!0;return!1}function ya(a){D=V+a.x;E=x+a.y;u.render(!0)}function za(a){C=a.w;x=a.h;V=C/2<<0;ja=x/2<<0;D=V;E=x;u.setSize(C,x);ka=F-50}function Aa(a){y=a;U=Xa<<y;a=Y(q+V,p+ja);Ba=Math.abs(40075040*Ca(a.latitude)/la(2,y+8));s=la(0.95,y-L);ma=""+I.alpha(s);$=""+aa.alpha(s);W=""+P.alpha(s)}var l=Math,Va=l.exp,Ya=l.log,Za=l.sin,Ca=l.cos,Da=l.tan,Ua=l.atan,ba=l.atan2,T=
l.min,N=l.max,Ea=l.sqrt,Fa=l.ceil,Ga=l.floor,la=l.pow,B=window,na=document,Ha=Ha||Array,Ia=Ia||Array;B.console||(B.console={});var l=/iP(ad|hone|od)/g.test(navigator.userAgent),$a=B.requestAnimationFrame&&!l?B.requestAnimationFrame:function(a){a()},J,oa=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},ab={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",
blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",
darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",
lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",
mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",
peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",
white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Q=function(a,b,c,d){this.H=a;this.S=b;this.L=c;this.A=d},l=Q.prototype;l.toString=function(){var a=Math.min(360,Math.max(0,this.H)),b=Math.min(1,Math.max(0,this.S)),c=Math.min(1,Math.max(0,this.L)),d=Math.min(1,Math.max(0,this.A)),e;if(0===b)a=e=b=c;else{var f=0.5>c?c*(1+b):c+b-c*b,c=2*c-f,a=a/360,b=oa(c,f,a+1/3);e=oa(c,f,a);a=oa(c,f,a-1/3)}b*=255;e*=255;a*=255;return 1===d?"#"+(16777216+(b<<16)+(e<<8)+a).toString(16).slice(1,
7):"rgba("+[Math.round(b),Math.round(e),Math.round(a),d.toFixed(2)].join()+")"};l.hue=function(a){return new Q(this.H*a,this.S,this.L,this.A)};l.saturation=function(a){return new Q(this.H,this.S*a,this.L,this.A)};l.lightness=function(a){return new Q(this.H,this.S,this.L*a,this.A)};l.alpha=function(a){return new Q(this.H,this.S,this.L,this.A*a)};J=function(a){var b=0,c=0,d=0,e=1,f;a=(""+a).toLowerCase().replace("grey","gray");a=ab[a]||a;if(f=a.match(/^#(\w{2})(\w{2})(\w{2})$/))b=parseInt(f[1],16),
c=parseInt(f[2],16),d=parseInt(f[3],16);if(f=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))b=parseInt(f[1],10),c=parseInt(f[2],10),d=parseInt(f[3],10),e=f[4]?parseFloat(f[5]):1;b/=255;c/=255;d/=255;a=Math.max(b,c,d);var h=Math.min(b,c,d),g;f=(a+h)/2;var j=a-h;if(j){h=0.5<f?j/(2-a-h):j/(a+h);switch(a){case b:g=(c-d)/j+(c<d?6:0);break;case c:g=(d-b)/j+2;break;case d:g=(b-c)/j+4}g*=60}else g=h=0;return new Q(g,h,f,e)};var Ja,l=Math,pa=l.PI,n=l.sin,G=l.cos,Ka=l.tan,La=l.asin,Ma=l.atan2,M=pa/
180,ca=23.4397*M;Ja=function(a,b,c){c=M*-c;b*=M;a=a.valueOf()/864E5-0.5+2440588-2451545;var d=M*(357.5291+0.98560028*a),e=M*(1.9148*n(d)+0.02*n(2*d)+3E-4*n(3*d)),e=d+e+102.9372*M+pa,d=La(n(0)*G(ca)+G(0)*n(ca)*n(e)),e=Ma(n(e)*G(ca)-Ka(0)*n(ca),G(e));c=M*(280.16+360.9856235*a)-c-e;return{altitude:La(n(b)*n(d)+G(b)*G(d)*G(c)),azimuth:Ma(n(c),G(c)*n(b)-Ka(d)*G(b))-pa/2}};var t={YARD_TO_METER:0.9144,FOOT_TO_METER:0.3048,INCH_TO_METER:0.0254,METERS_PER_LEVEL:3,clockwise:"CW",counterClockwise:"CCW",getWinding:function(a){var b,
c,d,e,f=0,h,g;h=0;for(g=a.length-3;h<g;h+=2)b=a[h],c=a[h+1],d=a[h+2],e=a[h+3],f+=b*e-d*c;return 0<f/2?this.clockwise:this.counterClockwise},makeWinding:function(a,b){if(this.getWinding(a)===b)return a;for(var c=[],d=a.length-2;0<=d;d-=2)c.push(a[d],a[d+1]);return c},toMeters:function(a){a=""+a;var b=parseFloat(a);return b===a||~a.indexOf("m")?b<<0:~a.indexOf("yd")?b*this.YARD_TO_METER<<0:~a.indexOf("ft")?b*this.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*this.FOOT_TO_METER+a[1]*this.INCH_TO_METER<<
0):b<<0},getRadius:function(a){for(var b=90,c=-90,d=0,e=a.length;d<e;d+=2)b=T(b,a[d]),c=N(c,a[d]);return 6378137*((c-b)/wa)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",
bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||
a]||null},alignProperties:function(a){var b={};a=a||{};b.height=this.toMeters(a.height);b.height||(a["building:height"]&&(b.height=this.toMeters(a["building:height"])),a.levels&&(b.height=a.levels*this.METERS_PER_LEVEL<<0),a["building:levels"]&&(b.height=a["building:levels"]*this.METERS_PER_LEVEL<<0),b.height||(b.height=bb));b.minHeight=this.toMeters(a.min_height);b.min_height||(a["building:min_height"]&&(b.minHeight=this.toMeters(a["building:min_height"])),a.min_level&&(b.minHeight=a.min_level*this.METERS_PER_LEVEL<<
0),a["building:min_level"]&&(b.minHeight=a["building:min_level"]*this.METERS_PER_LEVEL<<0));b.wallColor=a.wallColor||a.color;b.wallColor||(a.color&&(b.wallColor=a.color),a["building:material"]&&(b.wallColor=this.getMaterialColor(a["building:material"])),a["building:facade:material"]&&(b.wallColor=this.getMaterialColor(a["building:facade:material"])),a["building:cladding"]&&(b.wallColor=this.getMaterialColor(a["building:cladding"])),a["building:color"]&&(b.wallColor=a["building:color"]),a["building:colour"]&&
(b.wallColor=a["building:colour"]));b.roofColor=a.roofColor;b.roofColor||(a["roof:material"]&&(b.roofColor=this.getMaterialColor(a["roof:material"])),a["building:roof:material"]&&(b.roofColor=this.getMaterialColor(a["building:roof:material"])),a["roof:color"]&&(b.roofColor=a["roof:color"]),a["roof:colour"]&&(b.roofColor=a["roof:colour"]),a["building:roof:color"]&&(b.roofColor=a["building:roof:color"]),a["building:roof:colour"]&&(b.roofColor=a["building:roof:colour"]));switch(a["building:shape"]){case "cone":case "cylinder":b.shape=
a["building:shape"];break;case "dome":b.shape="dome";break;case "sphere":b.shape="cylinder"}if(("cone"===a["roof:shape"]||"dome"===a["roof:shape"])&&a["roof:height"])b.shape="cylinder",b.roofShape=a["roof:shape"],b.roofHeight=this.toMeters(a["roof:height"]);b.roofHeight?b.height=N(0,b.height-b.roofHeight):b.roofHeight=0;return b}},Na,Oa=function(a){var b,c,d,e,f,h=[],g=[],j=0;d=[];switch(a.type){case "GeometryCollection":b=0;for(c=a.geometries.length;b<c;b++)if(h=Oa(a.geometries[b]))d=d.concat(h);
return d;case "Polygon":e=a.coordinates;break;case "MultiPolygon":e=a.coordinates[0];break;default:return d}f=e[0];b=0;for(c=f.length;b<c;b++)h.push(f[b][1],f[b][0]),void 0!==f[b][2]&&(j+=f[b][2]);b=0;for(c=e.length-1;b<c;b++){f=e[b+1];g[b]=[];a=0;for(d=f.length;a<d;a++)g[b].push(f[a][1],f[a][0]);g[b]=t.makeWinding(g[b],t.counterClockwise)}return[{outer:t.makeWinding(h,t.clockwise),inner:g.length?g:null,height:j/e[0].length}]};Na=function(a,b){var c,d,e,f,h=[],g,j,m,k;c=0;for(d=a.length;c<d;c++)if(g=
a[c],!("Feature"!==g.type||!1===b(g))){m=t.alignProperties(g.properties);j=Oa(g.geometry);e=0;for(f=j.length;e<f;e++){k=m;var l={},H=void 0;for(H in k)k.hasOwnProperty(H)&&(l[H]=k[H]);k=l;k.footprint=j[e].outer;if("cone"===k.shape||"cylinder"===k.shape)k.radius=t.getRadius(k.footprint);k.holes=j[e].inner;k.id=g.id||g.properties.id||[k.footprint[0],k.footprint[1],k.height,k.minHeight].join();h.push(k)}}return h};var Pa,Qa=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&
(!a.layer||0<=a.layer)},ra=function(a){if(a){for(var b=[],c,d=0,e=a.length;d<e;d++)c=qa[a[d]],b.push(c[0],c[1]);b[b.length-2]!==b[0]&&b[b.length-1]!==b[1]&&b.push(b[0],b[1]);if(!(8>b.length))return b}},cb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},sa=function(a,b){var c=t.alignProperties(a.tags);a.id&&(c.id=a.id);b&&(c.footprint=t.makeWinding(b,t.clockwise));if("cone"===c.shape||"cylinder"===c.shape)c.radius=t.getRadius(c.footprint);return c},qa,X,da,ea;Pa=function(a,
b){qa={};X={};da=[];ea=b;for(var c,d=0,e=a.length;d<e;d++)switch(c=a[d],c.type){case "node":qa[c.id]=[c.lat,c.lon];break;case "way":if(Qa(c)){var f=void 0,f=void 0;if((f=ra(c.nodes))&&!1!==ea(c))f=sa(c,f),da.push(f)}else if(f=c.tags,!f||!f.highway&&!f.railway&&!f.landuse)X[c.id]=c;break;case "relation":var h=c,g=void 0,j=void 0;c=[];var m=j=void 0,k=void 0,f=void 0;if(Qa(h)&&!("multipolygon"!==h.tags.type&&"building"!==h.tags.type||!1===ea(h))){for(var g=h.members,j=m=void 0,k=[],l=0,H=g.length;l<
H;l++)m=g[l],"way"===m.type&&X[m.ref]&&(!m.role||"outer"===m.role?j=X[m.ref]:("inner"===m.role||"enclave"===m.role)&&k.push(X[m.ref]));g=j?{outer:j,inner:k}:void 0;if(g&&(m=sa(h),j=g.outer))if((k=ra(j.nodes))&&!1!==ea(j)){j=sa(j,k);h=0;for(k=g.inner.length;h<k;h++)(f=ra(g.inner[h].nodes))&&c.push(t.makeWinding(f,t.counterClockwise));c.length&&(j.holes=c);da.push(cb(j,m))}}}return da};var A=Math.PI,O=A/2,db=A/4,wa=180/A,Xa=256,y,U,L=15,Ta="latitude",Wa="longitude",C=0,x=0,V=0,ja=0,q=0,p=0,I=J("rgba(200, 190, 180)"),
aa=I.lightness(0.8),P=I.lightness(1.2),ma=""+I,$=""+aa,W=""+P,Ba=1,s=1,ka,bb=5,D,E,F=450,fa,ta={time:new Date,data:{},add:function(a,b){this.data[b]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},v={currentItemsIndex:{},items:[],cropDecimals:function(a){return parseFloat(a.toFixed(5))},getPixelFootprint:function(a){for(var b,c,
d=new Ha(a.length),e=0,f=a.length-1;e<f;e+=2)b=a[e+1],c=T(1,N(0,0.5-Ya(Da(db+O*a[e]/180))/A/2)),b=(b/360+0.5)*U<<0,c=c*U<<0,d[e]=b,d[e+1]=c;a=d;d=a.length/2;e=new Ia(d);f=0;b=d-1;var h,g,j,m=[],k=[],l=[];for(e[f]=e[b]=1;b;){h=0;for(c=f+1;c<b;c++){g=a[2*c];var H=a[2*c+1],q=a[2*f],p=a[2*f+1],r=a[2*b],u=a[2*b+1],s=r-q,n=u-p,t=void 0;if(0!==s||0!==n)t=((g-q)*s+(H-p)*n)/(s*s+n*n),1<t?(q=r,p=u):0<t&&(q+=s*t,p+=n*t);s=g-q;n=H-p;g=s*s+n*n;g>h&&(j=c,h=g)}2<h&&(e[j]=1,m.push(f),k.push(j),m.push(j),k.push(b));
f=m.pop();b=k.pop()}for(c=0;c<d;c++)e[c]&&l.push(a[2*c],a[2*c+1]);d=l;if(!(8>d.length))return d},createClosure:function(a){var b=this;return function(c){c=b.parse(c);ta.add(c,a);b.addRenderItems(c,!0)}},parse:function(a){return!a?[]:"FeatureCollection"===a.type?Na(a.features,this.each):a.osm3s?Pa(a.elements,this.each):[]},resetItems:function(){this.items=[];this.currentItemsIndex={}},addRenderItems:function(a,b){for(var c=this.scale(a),d=0,e=c.length;d<e;d++)this.currentItemsIndex[c[d].id]||(c[d].scale=
b?0:1,this.items.push(c[d]),this.currentItemsIndex[c[d].id]=1);R||(R=setInterval(function(){for(var a=v.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);u.render();b||(clearInterval(R),R=null)},33))},scale:function(a){var b,c,d,e,f=[],h,g,j,m,k,l,q,p,n,r=6/la(2,y-L);b=0;for(c=a.length;b<c;b++)if(h=a[b],g=h.height/r,j=isNaN(h.minHeight)?0:h.minHeight/r,!(j>ka)&&(m=this.getPixelFootprint(h.footprint))){p=[];if(h.holes){d=0;for(e=h.holes.length;d<e;d++)(n=
this.getPixelFootprint(h.holes[d]))&&p.push(n)}e=d=null;if(h.wallColor&&(k=J(h.wallColor)))d=k.alpha(s),e=""+d.lightness(0.8),d=""+d;l=null;if(h.roofColor&&(k=J(h.roofColor)))l=""+k.alpha(s);q=h.roofHeight/r;g<=j&&0>=q||f.push({id:h.id,footprint:m,height:T(g,ka),minHeight:j,wallColor:d,altColor:e,roofColor:l,roofShape:h.roofShape,roofHeight:q,center:Sa(m),holes:p.length?p:null,shape:h.shape,radius:h.radius/Ba})}return f},set:function(a){this.isStatic=!0;this.resetItems();this.addRenderItems(this.staticData=
this.parse(a),!0)},load:function(a){this.url=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";(this.isStatic=!/(.+\{[nesw]\}){4,}/.test(this.url))?(this.resetItems(),xa(this.url,{},function(a){this.addRenderItems(this.staticData=this.parse(a),!0)})):this.update()},update:function(){this.resetItems();if(!(y<L))if(this.isStatic)this.addRenderItems(this.staticData);
else if(this.url){var a,b,c,d,e=Y(q,p);a=Y(q+C,p+x);var f=0.0075*Fa(e.latitude/0.0075),h=0.015*Fa(a.longitude/0.015);a=0.0075*Ga(a.latitude/0.0075);for(e=0.015*Ga(e.longitude/0.015);a<=f;a+=0.0075)for(b=e;b<=h;b+=0.015)a=this.cropDecimals(a),b=this.cropDecimals(b),d=a+","+b,(c=ta.get(d))?this.addRenderItems(c):xa(this.url,{n:this.cropDecimals(a+0.0075),e:this.cropDecimals(b+0.015),s:a,w:b},this.createClosure(d));ta.purge()}},each:function(){}},ga={draw:function(a,b,c,d,e,f,h,g){var j,m=this._extrude(a,
b,d,e,f,h),k=[];if(c){b=0;for(j=c.length;b<j;b++)k[b]=this._extrude(a,c[b],d,e,f,h)}a.fillStyle=g;a.beginPath();this._ring(a,m);if(c){b=0;for(j=k.length;b<j;b++)this._ring(a,k[b])}a.closePath();a.stroke();a.fill()},_extrude:function(a,b,c,d,e,f){c=F/(F-c);for(var h=F/(F-d),g={x:0,y:0},j={x:0,y:0},m,k,l=[],n=0,r=b.length-3;n<r;n+=2)g.x=b[n]-q,g.y=b[n+1]-p,j.x=b[n+2]-q,j.y=b[n+3]-p,m=K.project(g,c),k=K.project(j,c),d&&(g=K.project(g,h),j=K.project(j,h)),(j.x-g.x)*(m.y-g.y)>(m.x-g.x)*(j.y-g.y)&&(a.fillStyle=
g.x<j.x&&g.y<j.y||g.x>j.x&&g.y>j.y?f:e,a.beginPath(),this._ring(a,[j.x,j.y,g.x,g.y,m.x,m.y,k.x,k.y]),a.closePath(),a.fill()),l[n]=m.x,l[n+1]=m.y;return l},_ring:function(a,b){a.moveTo(b[0],b[1]);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c],b[c+1])},polygon:function(a,b,c){a.beginPath();this.ring(a,b);if(c){b=0;for(var d=c.length;b<d;b++)this.ring(a,c[b])}a.closePath();a.stroke();a.fill()},ring:function(a,b){a.moveTo(b[0]-q,b[1]-p);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c]-q,b[c+1]-p)},shadow:function(a,
b,c,d,e){for(var f=null,h={x:0,y:0},g={x:0,y:0},j,m,k=0,l=b.length-3;k<l;k+=2)h.x=b[k]-q,h.y=b[k+1]-p,g.x=b[k+2]-q,g.y=b[k+3]-p,j=z.project(h,d),m=z.project(g,d),e&&(h=z.project(h,e),g=z.project(g,e)),(g.x-h.x)*(j.y-h.y)>(j.x-h.x)*(g.y-h.y)?(1===f&&a.lineTo(h.x,h.y),f=0,k||a.moveTo(h.x,h.y),a.lineTo(g.x,g.y)):(0===f&&a.lineTo(j.x,j.y),f=1,k||a.moveTo(j.x,j.y),a.lineTo(m.x,m.y));if(c){k=0;for(l=c.length;k<l;k++)this.ring(a,c[k])}},mask:function(a,b,c){this.ring(a,b);if(c){b=0;for(var d=c.length;b<
d;b++)this.ring(a,c[b])}}},w={draw:function(a,b,c,d,e,f,h,g,j){b={x:b.x-q,y:b.y-p};var m=F/(F-e);e=K.project(b,m);d*=m;f&&(m=F/(F-f),b=K.project(b,m),c*=m);(m=this._tangents(b,c,e,d))?(f=ba(m[0].y1-b.y,m[0].x1-b.x),m=ba(m[1].y1-b.y,m[1].x1-b.x)):(f=1.5*A,m=1.5*A);a.fillStyle=h;a.beginPath();a.arc(e.x,e.y,d,O,f,!0);a.arc(b.x,b.y,c,f,O);a.closePath();a.fill();a.fillStyle=g;a.beginPath();a.arc(e.x,e.y,d,m,O,!0);a.arc(b.x,b.y,c,O,m);a.closePath();a.fill();a.fillStyle=j;this._circle(a,e,d)},_circle:function(a,
b,c){a.beginPath();a.arc(b.x,b.y,c,0,2*A);a.stroke();a.fill()},circle:function(a,b,c){this._circle(a,{x:b.x-q,y:b.y-p},c)},shadow:function(a,b,c,d,e,f){b={x:b.x-q,y:b.y-p};e=z.project(b,e);var h;f&&(b=z.project(b,f));var g=this._tangents(b,c,e,d);g?(f=ba(g[0].y1-b.y,g[0].x1-b.x),h=ba(g[1].y1-b.y,g[1].x1-b.x),a.moveTo(g[1].x2,g[1].y2),a.arc(e.x,e.y,d,h,f),a.arc(b.x,b.y,c,f,h)):(a.moveTo(b.x+c,b.y),a.arc(b.x,b.y,c,0,2*A))},mask:function(a,b,c){var d=b.x-q;b=b.y-p;a.moveTo(d+c,b);a.arc(d,b,c,0,2*A)},
_tangents:function(a,b,c,d){var e=a.x-c.x,f=a.y-c.y,h=b-d,g=e*e+f*f;if(!(g<=h*h)){var g=Ea(g),e=-e/g,f=-f/g,h=h/g,g=[],j,m,k;j=Ea(N(0,1-h*h));for(var l=1;-1<=l;l-=2)m=e*h-l*j*f,k=f*h+l*j*e,g.push({x1:a.x+b*m<<0,y1:a.y+b*k<<0,x2:c.x+d*m<<0,y2:c.y+d*k<<0});return g}}},K={project:function(a,b){return{x:(a.x-D)*b+D<<0,y:(a.y-E)*b+E<<0}},render:function(){var a=this.context;a.clearRect(0,0,C,x);if(!(y<L||fa)){var b,c,d,e={x:D+q,y:E+p},f,h,g,j,l=v.items,k;l.sort(function(a,b){return a.minHeight-b.minHeight||
va(b.center,e)-va(a.center,e)||b.height-a.height});for(var n=0,r=l.length;n<r;n++)if(b=l[n],!ua.isSimple(b)&&(f=b.footprint,Z(f)))switch(c=1>b.scale?b.height*b.scale:b.height,d=0,b.minHeight&&(d=1>b.scale?b.minHeight*b.scale:b.minHeight),h=b.wallColor||ma,g=b.altColor||$,j=b.roofColor||W,a.strokeStyle=g,b.shape){case "cylinder":f=b.center;k=b.radius;w.draw(a,f,k,k,c,d,h,g,j);"cone"===b.roofShape&&w.draw(a,f,k,0,c+b.roofHeight,c,j,""+J(j).lightness(0.9));"dome"===b.roofShape&&w.draw(a,f,k,k/2,c+b.roofHeight,
c,j,""+J(j).lightness(0.9));break;case "cone":w.draw(a,b.center,b.radius,0,c,d,h,g);break;case "dome":w.draw(a,b.center,b.radius,b.radius/2,c,d,h,g);break;default:ga.draw(a,f,b.holes,c,d,h,g,j)}}}},ua={maxZoom:L+2,maxHeight:5,isSimple:function(a){return y<=this.maxZoom&&a.height+a.roofHeight<this.maxHeight},render:function(){var a=this.context;a.clearRect(0,0,C,x);if(!(y<L||fa||y>this.maxZoom))for(var b,c,d=v.items,e=0,f=d.length;e<f;e++)b=d[e],b.height>=this.maxHeight||(c=b.footprint,Z(c)&&(a.strokeStyle=
b.altColor||$,a.fillStyle=b.roofColor||W,"cylinder"===b.shape||"cone"===b.shape||"dome"===b.shape?w.circle(a,b.center,b.radius):ga.polygon(a,c,b.holes)))}},z={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,direction:{x:0,y:0},project:function(a,b){return{x:a.x+this.direction.x*b,y:a.y+this.direction.y*b}},render:function(){var a=this.context,b,c,d;a.clearRect(0,0,C,x);if(this.enabled&&!(y<L||fa))if(b=Y(V+q,ja+p),b=Ja(this.date,b.latitude,b.longitude),!(0>=b.altitude)){c=
1/Da(b.altitude);d=5>c?0.75:5*(1/c);this.direction.x=Ca(b.azimuth)*c;this.direction.y=Za(b.azimuth)*c;var e,f,h,g;b=v.items;var j;a.canvas.style.opacity=d/(2*s);a.shadowColor=this.blurColor;a.shadowBlur=this.blurSize*(s/2);a.fillStyle=this.color;a.beginPath();d=0;for(c=b.length;d<c;d++)if(e=b[d],g=e.footprint,Z(g))switch(f=1>e.scale?e.height*e.scale:e.height,h=0,e.minHeight&&(h=1>e.scale?e.minHeight*e.scale:e.minHeight),e.shape){case "cylinder":g=e.center;j=e.radius;w.shadow(a,g,j,j,f,h);"cone"===
e.roofShape&&w.shadow(a,g,j,0,f+e.roofHeight,f);"dome"===e.roofShape&&w.shadow(a,g,j,j/2,f+e.roofHeight,f);break;case "cone":w.shadow(a,e.center,e.radius,0,f,h);break;case "dome":w.shadow(a,e.center,e.radius,e.radius/2,f,h);break;default:ga.shadow(a,g,e.holes,f,h)}a.closePath();a.fill();a.shadowBlur=null;a.globalCompositeOperation="destination-out";a.beginPath();d=0;for(c=b.length;d<c;d++)if(e=b[d],g=e.footprint,Z(g)&&!e.minHeight)switch(e.shape){case "cylinder":case "cone":case "dome":w.mask(a,e.center,
e.radius);break;default:ga.mask(a,g,e.holes)}a.fillStyle="#00ff00";a.fill();a.globalCompositeOperation="source-over"}}},R,u={container:na.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;z.context=this.createContext();ua.context=this.createContext();K.context=this.createContext()},render:function(a){$a(function(){a||(z.render(),ua.render());K.render()})},createContext:function(){var a=
na.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var b=a.getContext("2d");b.lineCap="round";b.lineJoin="round";b.lineWidth=1;b.mozImageSmoothingEnabled=!1;b.webkitImageSmoothingEnabled=!1;this.items.push(a);this.container.appendChild(a);return b},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,
b){for(var c=0,d=this.items.length;c<d;c++)this.items[c].width=a,this.items[c].height=b},screenshot:function(){var a=na.createElement("CANVAS"),b=a.getContext("2d"),c,d,e;a.width=C;a.height=x;clearInterval(R);R=null;e=v.items;c=0;for(d=e.length;c<d;c++)e[c].scale=1;this.render(!0);c=0;for(d=this.items.length;c<d;c++)e=this.items[c],""!==e.style.opacity&&(b.globalAlpha=parseFloat(e.style.opacity)),b.drawImage(e,0,0),b.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,b){this.container.style.left=
a+"px";this.container.style.top=b+"px"}};u.init();if(B.DeviceMotionEvent){var Ra=(new Date).getTime(),ha=0,ia=0;B.addEventListener("devicemotion",function(a){var b,c=(new Date).getTime();if(!(c<Ra+33)&&(a=a.accelerationIncludingGravity||a.acceleration)){switch(B.orientation){case -90:b=a.x;a.x=a.y;a.y=-b;break;case 90:b=a.x;a.x=-a.y;a.y=b;break;case -180:a.x*=-1,a.y*=-1}Ra=c;D-=ha;E-=ia;ha=-25*a.x+0.5*ha;ia=25*a.y+0.5*ia;D+=ha;E+=ia;u.render(!0)}})}var S=OpenLayers.Layer.prototype,l=function(a){this.offset=
{x:0,y:0};S.initialize.call(this,this.name,{projection:"EPSG:900913"});a.addLayer(this)},r=l.prototype=new OpenLayers.Layer;r.name="OSM Buildings";r.attribution='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';r.isBaseLayer=!1;r.alwaysInRange=!0;r.setOrigin=function(){var a=this.map,b=a.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),a=a.resolution,c=this.maxExtent,d=(c.top-b.lat)/a<<0;q=(b.lon-c.left)/a<<0;p=d};r.setMap=function(a){this.map||S.setMap.call(this,a);u.appendTo(this.div);za(a.size);
Aa(a.zoom);this.setOrigin();v.update()};r.removeMap=function(a){u.remove();S.removeMap.call(this,a);this.map=null};r.onMapResize=function(){var a=this.map;S.onMapResize.call(this);za(a.size.w,a.size.h);u.render();v.update()};r.moveTo=function(a,b,c){var d=this.map;a=S.moveTo.call(this,a,b,c);if(!c){c=parseInt(d.layerContainerDiv.style.left,10);var e=parseInt(d.layerContainerDiv.style.top,10);this.div.style.left=-c+"px";this.div.style.top=-e+"px"}this.setOrigin();this.offset.x=0;this.offset.y=0;ya(this.offset);
b?(b=d.zoom,fa=!1,Aa(b),v.update(),u.render()):(u.render(),v.update());return a};r.moveByPx=function(a,b){this.offset.x+=a;this.offset.y+=b;var c=S.moveByPx.call(this,a,b);ya(this.offset);return c};r.setStyle=function(a){a=a||{};var b;if(b=a.color||a.wallColor)I=J(b),ma=""+I.alpha(s),aa=I.lightness(0.8),$=""+aa.alpha(s),P=I.lightness(1.2),W=""+P.alpha(s);a.roofColor&&(P=J(a.roofColor),W=""+P.alpha(s));void 0!==a.shadows&&(z.enabled=!!a.shadows);u.render();return this};r.setDate=function(a){z.date=
a;z.render();return this};r.loadData=function(a){v.load(a);return this};r.setData=function(a){v.set(a);return this};r.each=function(a,b){v.each=function(c){return a.call(b,c)};return this};r.screenshot=function(a){var b=u.screenshot();a&&(B.location.href=b.replace("image/png","image/octet-stream"));return b};l.VERSION="0.1.9a";l.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return l}();
