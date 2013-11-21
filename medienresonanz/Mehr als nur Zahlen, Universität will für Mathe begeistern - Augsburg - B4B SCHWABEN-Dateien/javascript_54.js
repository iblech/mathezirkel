function nfyWallpaper()
{$(".container_skyscraper").attr("class","container_skyscraper_wallpaper");$(".container_skyscraper_fixed").attr("class","container_skyscraper_wallpaper_fixed");$("#container_banner").attr("id","container_banner_wallpaper");}function SetCookie(name,value){var argv=SetCookie.arguments;var argc=SetCookie.arguments.length;var expires=(argc>2)?argv[2]:null;var path=(argc>3)?argv[3]:null;var domain=(argc>4)?argv[4]:null;var secure=(argc>5)?argv[5]:false;document.cookie=name+"="+escape(value)+
((expires==null)?"":("; expires="+expires.toGMTString()))+
((path==null)?"":("; path="+path))+
((domain==null)?"":("; domain="+domain))+
((secure==true)?"; secure":"");}
function formatTitleFancybox(title,currentArray,currentIndex,currentOpts)
{return'<div class="fancy-title">'+(title&&title.length?'<b>'+title+'</b>':'')+'<br />Bild '+(currentIndex+1)+'/'+currentArray.length+'</div>';}
jQuery.fn.center=function(absolute){return this.each(function(){var t=jQuery(this);t.css({position:absolute?'absolute':'fixed',left:'50%',top:'50%',zIndex:'99'}).css({marginLeft:'-'+(t.outerWidth()/2)+'px',marginTop:'-'+(t.outerHeight()/2)+'px'});if(absolute){t.css({marginTop:parseInt(t.css('marginTop'),10)+jQuery(window).scrollTop(),marginLeft:parseInt(t.css('marginLeft'),10)+jQuery(window).scrollLeft()});}});};function openPopup(url)
{return window.open(url,'_blank','scrollbars=yes,menubar=no,height=600,width=750,resizable=yes,toolbar=no,location=no,status=no');}
function fillDefaults(defaults,formId)
{for(field in defaults)
{if($("#"+formId+" :input[name="+field+"]").val()=='')
{$("#"+formId+" :input[name="+field+"]").val(defaults[field]);}}}
function clearDefaults(defaults,fieldName,formId)
{if(fieldName!=false)
{if($("#"+formId+" :input[name="+fieldName+"]").val()==defaults[fieldName])
{$("#"+formId+" :input[name="+fieldName+"]").val('');}}
else
{for(field in defaults)
{if($("#"+formId+" :input[name="+field+"]").val()==defaults[field])
{$("#"+formId+" :input[name="+field+"]").val('');}}}}
function writeDate()
{var currDate=new Date();var year=currDate.getFullYear();var m=currDate.getMonth()+1;var month=(m<10)?'0'+m:m;var d=currDate.getDate();var day=(d<10)?'0'+d:d;var dayNr=currDate.getDay();var dayNames=new Array('Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag');var dayTextDe=dayNames[dayNr];var completeDate=dayTextDe+', '+day+'.'+month+'.'+year;return completeDate;}
function getSubdomain(returnValue)
{var full=window.location.host;var parts=full.split('.');var sub=parts[0];var domain=parts[1];var type=parts[2];var domainInfo=new Array();domainInfo['sub']=sub;domainInfo['domain']=domain;domainInfo['type']=type;if(typeof domainInfo[returnValue]!='undefined')
{return domainInfo[returnValue];}}
function getLogoStringBySubdomain()
{var subdomain=getSubdomain('sub');var tmpDomain=getSubdomain('domain');var domain=tmpDomain.replace(/b4b/gi,'');var subdomainArray=new Array();subdomainArray['alb-bodensee']='bodensee';subdomainArray['albbodensee']='bodensee';subdomainArray['baden']='baden';subdomainArray['berlin-brandenburg']='berlin-brandenburg';subdomainArray['berlinbrandenburg']='berlin-brandenburg';subdomainArray['bremen']='bremen';subdomainArray['bw-nord']='bw-nord';subdomainArray['hamburg']='hamburg';subdomainArray['heilbronn-franken']='heilbronn-franken';subdomainArray['mainfranken']='mainfranken';subdomainArray['mecklenburg']='mecklenburg';subdomainArray['mv']='mecklenburg';subdomainArray['mittelfranken']='mittelfranken';subdomainArray['mittelhessen']='mittelhessen';subdomainArray['mittelstand']='mittelstand';subdomainArray['mittlerer-neckar']='mittlerer-neckar';subdomainArray['mittlererneckar']='mittlerer-neckar';subdomainArray['niedersachsen']='niedersachsen';subdomainArray['nord']='nord';subdomainArray['oberbayern']='oberbayern';subdomainArray['offenbach']='offenbach';subdomainArray['ostbayern']='ostbayern';subdomainArray['revier']='revier';subdomainArray['rhein-main']='rhein-main';subdomainArray['rheinmain']='rhein-main';subdomainArray['rhein-neckar']='rhein-neckar';subdomainArray['rheinneckar']='rhein-neckar';subdomainArray['rhein-neckar-odenwald']='rhein-neckar';subdomainArray['rheinland']='rheinland';subdomainArray['saar-pfalz']='saar-pfalz';subdomainArray['saarpfalz']='saar-pfalz';subdomainArray['sachsen-anhalt']='sachsen-anhalt';subdomainArray['sachsenanhalt']='sachsen-anhalt';subdomainArray['sachsen']='sachsen';subdomainArray['schwaben']='schwaben';subdomainArray['thueringen']='thueringen';subdomainArray['westfalen']='westfalen';subdomainArray['wiesbaden']='wiesbaden';if(typeof subdomain!='undefined'&&subdomain!='cms'&&subdomain!='')
{if(typeof subdomainArray[subdomain]!='undefined')
{return subdomainArray[subdomain];}
else
{if(typeof domain!='undefined'&&domain!='')
{if(typeof subdomainArray[domain]!='undefined')
{return subdomainArray[domain];}}}}}jQuery.extend(jQuery.easing,{easein:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var ts=t-d/2;return-2*c*ts*ts/(d*d)+2*c*ts/d+c/2+b;},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b;},expoin:function(x,t,b,c,d){var flip=1;if(c<0){flip*=-1;c*=-1;}
return flip*(Math.exp(Math.log(c)/d*t))+b;},expoout:function(x,t,b,c,d){var flip=1;if(c<0){flip*=-1;c*=-1;}
return flip*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b;},expoinout:function(x,t,b,c,d){var flip=1;if(c<0){flip*=-1;c*=-1;}
if(t<d/2)return flip*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return flip*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b;},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b;},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b;},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;}});(function($){$.dimensions={version:'@VERSION'};$.each(['Height','Width'],function(i,name){$.fn['inner'+name]=function(){if(!this[0])return;var torl=name=='Height'?'Top':'Left',borr=name=='Height'?'Bottom':'Right';return num(this,name.toLowerCase())+num(this,'padding'+torl)+num(this,'padding'+borr);};$.fn['outer'+name]=function(options){if(!this[0])return;var torl=name=='Height'?'Top':'Left',borr=name=='Height'?'Bottom':'Right';options=$.extend({margin:false},options||{});return num(this,name.toLowerCase())
+num(this,'border'+torl+'Width')+num(this,'border'+borr+'Width')
+num(this,'padding'+torl)+num(this,'padding'+borr)
+(options.margin?(num(this,'margin'+torl)+num(this,'margin'+borr)):0);};});$.each(['Left','Top'],function(i,name){$.fn['scroll'+name]=function(val){if(!this[0])return;return val!=undefined?this.each(function(){this==window||this==document?window.scrollTo(name=='Left'?val:$(window)['scrollLeft'](),name=='Top'?val:$(window)['scrollTop']()):this['scroll'+name]=val;}):this[0]==window||this[0]==document?self[(name=='Left'?'pageXOffset':'pageYOffset')]||$.boxModel&&document.documentElement['scroll'+name]||document.body['scroll'+name]:this[0]['scroll'+name];};});$.fn.extend({position:function(){var left=0,top=0,elem=this[0],offset,parentOffset,offsetParent,results;if(elem){offsetParent=this.offsetParent();offset=this.offset();parentOffset=offsetParent.offset();offset.top-=num(elem,'marginTop');offset.left-=num(elem,'marginLeft');parentOffset.top+=num(offsetParent,'borderTopWidth');parentOffset.left+=num(offsetParent,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}
return results;},offsetParent:function(){var offsetParent=this[0].offsetParent;while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&$.css(offsetParent,'position')=='static'))
offsetParent=offsetParent.offsetParent;return $(offsetParent);}});function num(el,prop){return parseInt($.css(el.jquery?el[0]:el,prop))||0;};})(jQuery);;(function($){$.ui=$.ui||{};$.fn.extend({accordion:function(options,data){var args=Array.prototype.slice.call(arguments,1);return this.each(function(){if(typeof options=="string"){var accordion=$.data(this,"ui-accordion");accordion[options].apply(accordion,args);}else if(!$(this).is(".ui-accordion"))
$.data(this,"ui-accordion",new $.ui.accordion(this,options));});},activate:function(index){return this.accordion("activate",index);}});$.ui.accordion=function(container,options){this.options=options=$.extend({},$.ui.accordion.defaults,options);this.element=container;$(container).addClass("ui-accordion");if(options.navigation){var current=$(container).find("a").filter(options.navigationFilter);if(current.length){if(current.filter(options.header).length){options.active=current;}else{options.active=current.parent().parent().prev();current.addClass("current");}}}
options.headers=$(container).find(options.header);options.active=findActive(options.headers,options.active);if(options.fillSpace){var maxHeight=$(container).parent().height();options.headers.each(function(){maxHeight-=$(this).outerHeight();});var maxPadding=0;options.headers.next().each(function(){maxPadding=Math.max(maxPadding,$(this).innerHeight()-$(this).height());}).height(maxHeight-maxPadding);}else if(options.autoheight){var maxHeight=0;options.headers.next().each(function(){maxHeight=Math.max(maxHeight,$(this).outerHeight());}).height(maxHeight);}
options.headers.not(options.active||"").next().hide();options.active.parent().andSelf().addClass(options.selectedClass);if(options.event)
$(container).bind((options.event)+".ui-accordion",clickHandler);};$.ui.accordion.prototype={activate:function(index){clickHandler.call(this.element,{target:findActive(this.options.headers,index)[0]});},enable:function(){this.options.disabled=false;},disable:function(){this.options.disabled=true;},destroy:function(){this.options.headers.next().css("display","");if(this.options.fillSpace||this.options.autoheight){this.options.headers.next().css("height","");}
$.removeData(this.element,"ui-accordion");$(this.element).removeClass("ui-accordion").unbind(".ui-accordion");}}
function scopeCallback(callback,scope){return function(){return callback.apply(scope,arguments);};}
function completed(cancel){if(!$.data(this,"ui-accordion"))
return;var instance=$.data(this,"ui-accordion");var options=instance.options;options.running=cancel?0:--options.running;if(options.running)
return;if(options.clearStyle){options.toShow.add(options.toHide).css({height:"",overflow:""});}
$(this).triggerHandler("change.ui-accordion",[options.data],options.change);}
function toggle(toShow,toHide,data,clickedActive,down){var options=$.data(this,"ui-accordion").options;options.toShow=toShow;options.toHide=toHide;options.data=data;var complete=scopeCallback(completed,this);options.running=toHide.size()==0?toShow.size():toHide.size();if(options.animated){if(!options.alwaysOpen&&clickedActive){$.ui.accordion.animations[options.animated]({toShow:jQuery([]),toHide:toHide,complete:complete,down:down,autoheight:options.autoheight});}else{$.ui.accordion.animations[options.animated]({toShow:toShow,toHide:toHide,complete:complete,down:down,autoheight:options.autoheight});}}else{if(!options.alwaysOpen&&clickedActive){toShow.toggle();}else{toHide.hide();toShow.show();}
complete(true);}}
function clickHandler(event){var options=$.data(this,"ui-accordion").options;if(options.disabled)
return false;if(!event.target&&!options.alwaysOpen){options.active.parent().andSelf().toggleClass(options.selectedClass);var toHide=options.active.next(),data={instance:this,options:options,newHeader:jQuery([]),oldHeader:options.active,newContent:jQuery([]),oldContent:toHide},toShow=options.active=$([]);toggle.call(this,toShow,toHide,data);return false;}
var clicked=$(event.target);if(clicked.parents(options.header).length)
while(!clicked.is(options.header))
clicked=clicked.parent();var clickedActive=clicked[0]==options.active[0];if(options.running||(options.alwaysOpen&&clickedActive))
return false;if(!clicked.is(options.header))
return;options.active.parent().andSelf().toggleClass(options.selectedClass);if(!clickedActive){clicked.parent().andSelf().addClass(options.selectedClass);}
var toShow=clicked.next(),toHide=options.active.next(),data={instance:this,options:options,newHeader:clicked,oldHeader:options.active,newContent:toShow,oldContent:toHide},down=options.headers.index(options.active[0])>options.headers.index(clicked[0]);options.active=clickedActive?$([]):clicked;toggle.call(this,toShow,toHide,data,clickedActive,down);return false;};function findActive(headers,selector){return selector!=undefined?typeof selector=="number"?headers.filter(":eq("+selector+")"):headers.not(headers.not(selector)):selector===false?$([]):headers.filter(":eq(0)");}
$.extend($.ui.accordion,{defaults:{selectedClass:"selected",alwaysOpen:true,animated:'slide',event:"click",header:"a",autoheight:true,running:0,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase();}},animations:{slide:function(options,additions){options=$.extend({easing:"swing",duration:300},options,additions);if(!options.toHide.size()){options.toShow.animate({height:"show"},options);return;}
var hideHeight=options.toHide.height(),showHeight=options.toShow.height(),difference=showHeight/hideHeight;options.toShow.css({height:0,overflow:'hidden'}).show();options.toHide.filter(":hidden").each(options.complete).end().filter(":visible").animate({height:"hide"},{step:function(now){var current=(hideHeight-now)*difference;if($.browser.msie||$.browser.opera){current=Math.ceil(current);}
options.toShow.height(current);},duration:options.duration,easing:options.easing,complete:function(){if(!options.autoheight){options.toShow.css("height","auto");}
options.complete();}});},bounceslide:function(options){this.slide(options,{easing:options.down?"bounceout":"swing",duration:options.down?1000:200});},easeslide:function(options){this.slide(options,{easing:"easeinout",duration:700})}}});})(jQuery);$(document).ready(function(){var skyscraperWidth=$(".container_skyscraper_fixed").width();var wallpaperWidth=$(".container_skyscraper_wallpaper_fixed").width();var widthContainer=$("#container_outer").width();var heightContainer=$("#ad_container").height();var position=$("#container_outer").offset();if(typeof(skyscraperWidth)!='undefined'&&skyscraperWidth!=null)
{if(skyscraperWidth>1)
{$(".container_skyscraper_fixed").css('left',parseInt(position.left+widthContainer));$(".container_skyscraper_fixed").css('top',parseInt(heightContainer+6));$(".container_skyscraper_fixed").css('visibility','visible');}}
if(typeof(wallpaperWidth)!='undefined'&&wallpaperWidth!=null)
{if(wallpaperWidth>1)
{$(".container_skyscraper_wallpaper_fixed").css('left',parseInt(position.left+widthContainer));if($.browser.msie&&parseInt($.browser.version,10)===7)
{$(".container_skyscraper_wallpaper_fixed").css('top',0);}
else
{$(".container_skyscraper_wallpaper_fixed").css('top',3);}
$(".container_skyscraper_wallpaper_fixed").css('visibility','visible');}}
$('#top_search_input').focus(function(){if(this.value=='Suchbegriff eingeben')
{this.value=' ';}});$('.top_article_toparticle_cont').cycle({fx:'scrollHorz',speed:500,next:'.top_article_arrow_next',prev:'.top_article_arrow_prev',after:function(curr,next,opts){var index=opts.currSlide;$('.top_article_left_teaser').removeClass('ta_active');$('.top_article_left_teaser').eq(index).addClass('ta_active');}});$('.top_article_toparticle_cont').cycle('pause');$('.top_article_left_teaser').each(function(i){$(this).click(function(){$('.top_article_toparticle_cont').cycle(i);return false;});});var writeArticleSendContent=function(){var str=$('#articleSendForm').serialize();$.ajax({type:'POST',url:'/pu_all/ajax/articleSend.php',data:str,success:function(content){$('#articleSendContent').html(content);}});};$('#articleSendButton').click(writeArticleSendContent);var writeGallerySendContent=function(){var str=$('#gallerySendForm').serialize();$.ajax({type:'POST',url:'/pu_all/ajax/gallerySend.php',data:str,success:function(content){$('#gallerySendContent').html(content);}});};$('#gallerySendButton').click(writeGallerySendContent);var writeVideoSendContent=function(){var str=$('#videoSendForm').serialize();$.ajax({type:'POST',url:'/pu_all/ajax/videoSend.php',data:str,success:function(content){$('#videoSendContent').html(content);}});};$('#videoSendButton').click(writeVideoSendContent);var writeBdirSendContent=function(){var str=$('#bdirSendForm').serialize();$.ajax({type:'POST',url:'/pu_all/ajax/bdirentrySend.php',data:str,success:function(content){$('#bdirSendContent').html(content);}});};$('#bdirSendButton').click(writeBdirSendContent);var writeUfuSendContent=function(){var str=$('#ufuSendForm').serialize();$.ajax({type:'POST',url:'/pu_all/ajax/ufuSend.php',data:str,success:function(content){$('#ufuSendContent').html(content);}});};$('#ufuSendButton').click(writeUfuSendContent);$('#date_topbar').html(writeDate());var logostring=getLogoStringBySubdomain();if(typeof logostring!='undefined'&&logostring!='')
{$('#b4blogolink').html('<img src="/pu_all/images/logos/'+logostring+'.gif" alt="B4B" />');}
function slideTheMenuUp(){$(this).find('.subnav').slideUp('fast');$(this).removeClass('active');}
function slideTheMenuDown(){$(this).click(function(){$(this).addClass('active');$(this).find('.subnav').slideDown('fast');});}
$('ul.topnav li').hoverIntent({sensitivity:7,interval:100,over:slideTheMenuDown,timeout:0,out:slideTheMenuUp})
$.expr[':'].external=function(obj){return!obj.href.match(/^mailto:/)&&(obj.hostname!=document.location.hostname);};$('a:external').click(function(){_gaq.push(['_trackEvent','Outbound','Link',$(this).attr('href')]);});});var NFYF_GoogleMapsV3=function(args){var attr,_api={gmap:null,centerLat:null,centerLng:null,sensor:false,legendOptions:{},circleOptions:null,circle:null,markerObjects:[],marker:{},legend:{},icons:{},userIcon:null,initialize:function(idSuffix,gmapOptions){var me=this,group;me.gmap=new google.maps.Map(document.getElementById('map_canvas'+idSuffix),gmapOptions);if(me.marker&&me.icons){me.setMarkerImages();}
if(me.showGroup){if(typeof me.group==='object'){for(group in me.group){me.showGroup(group);}}else{me.showGroup(me.group);}}
if(me.sensor){me.trackPosition();}
if(me.circleOptions.show){me.drawCircle();}
if(me.legendOptions.show){me.showLegendControl();}},createMarker:function(latlng,message,icon,isDraggable){var me=this,infowindow,marker=new google.maps.Marker({position:latlng,map:me.gmap,icon:icon,draggable:!!isDraggable});if(message){infowindow=new google.maps.InfoWindow({content:message});google.maps.event.addListener(marker,'click',function(){infowindow.open(me.gmap,marker);});}
return marker;},createMarkerImage:function(icon){var iconUrl=icon.iconUrl,iconSize=(icon.iconSize)?new google.maps.Size(icon.iconSize):null,scaledSize=(icon.scaledSize)?new google.maps.Size(icon.scaledSize):null,origin=(icon.origin)?new google.maps.Point(icon.origin):null,anchor=(icon.anchor)?new google.maps.Point(icon.anchor):null;return new google.maps.MarkerImage(iconUrl,iconSize,origin,anchor,scaledSize);},setMarkerImages:function(){var me=this,i,group,markerImage;for(group in me.marker){if(me.icons[group]){markerImage=me.createMarkerImage(me.icons[group]);for(i in this.marker[group]){me.marker[group][i].icon=markerImage;}}}},showGroup:function(group,distance){var me=this,i,latlng,center=new google.maps.LatLng(me.centerLat,me.centerLng);for(i in me.marker[group]){latlng=new google.maps.LatLng(me.marker[group][i].lat,me.marker[group][i].lng);if(!distance||me.distanceBetweenPoints(center,latlng)<(distance/1000)){if(!me.markerObjects[group]){me.markerObjects[group]=[];}
me.markerObjects[group].push(me.createMarker(latlng,me.marker[group][i].html,me.marker[group][i].icon));}}},hideGroup:function(group){var me=this,i;if(me.markerObjects[group]){for(i in me.markerObjects[group]){if(me.markerObjects[group][i]){me.markerObjects[group][i].setMap(null);delete me.markerObjects[group][i];}
if(me.markerObjects[group]&&me.markerObjects[group].length===0){delete me.markerObjects[group];}}}},distanceBetweenPoints:function(p1,p2){if(!p1||!p2){return 0;}
var dLat,dLon,a,c,d,R=6371;dLat=(p2.lat()-p1.lat())*Math.PI/180;dLon=(p2.lng()-p1.lng())*Math.PI/180;a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(p1.lat()*Math.PI/180)*Math.cos(p2.lat()*Math.PI/180)*Math.sin(dLon/2)*Math.sin(dLon/2);c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));d=R*c;return d;},drawCircle:function(){var me=this;if(me.circleOptions){if(!me.circleOptions.latitude&&!me.circleOptions.longitude){me.circleOptions.latitude=me.centerLat;me.circleOptions.longitude=me.centerLng;}
me.circle=new google.maps.Circle({map:this.gmap,radius:me.circleOptions.radius,center:new google.maps.LatLng(me.circleOptions.latitude,me.circleOptions.longitude),strokeColor:me.circleOptions.strokeColor,strokeWeight:me.circleOptions.strokeWeight,fillColor:me.circleOptions.fillColor});}},showLegendControl:function(){var me=this,displayButton=me.createElement('div',{id:'displaybutton',innerHTML:'Ausblenden'}),legendContainer=me.createElement('div',{id:'legendcontainer',className:'googlemaps'}),dockContainer=me.createElement('div'),group,checkbox,groupContainer,image,groupName;google.maps.event.addDomListener(displayButton,'click',me.bind(me.toggleLegend,me));if(me.legend){for(group in me.legend){groupContainer=me.createElement('div',{className:'groupcontainer'});if(me.legend[group].legendIconUrl){image=me.createElement('img',{className:'legendimage',src:me.legend[group].legendIconUrl});}else{image=me.createElement('img',{className:'legendimage',src:me.icons[group].iconUrl});}
checkbox=me.createElement('input',{className:'checkbox',type:'checkbox'});if(this.markerObjects[group]){checkbox.checked=true;}
google.maps.event.addDomListener(checkbox,'click',me.bind(me.toggleGroup,me,[checkbox,group]));groupName=me.createElement('div',{className:'name',innerHTML:this.legend[group].legendName});groupContainer.appendChild(image);groupContainer.appendChild(groupName);groupContainer.appendChild(checkbox);legendContainer.appendChild(groupContainer);}}
if(me.legendOptions.showCircumSearch){legendContainer.appendChild(me.showCircumControl());}
legendContainer.appendChild(displayButton);dockContainer.appendChild(legendContainer);me.gmap.controls[google.maps.ControlPosition[me.legendOptions.position]].push(dockContainer);},toggleGroup:function(cb,group){var me=this;if(cb.checked===true){me.showGroup(group);}else{me.hideGroup(group);}},toggleLegend:function(){var me=this,cHeight,displayButton=document.getElementById('displaybutton');if(displayButton){cHeight=me.getStylePropertyValue('legendcontainer','height');if(displayButton.innerHTML==='Ausblenden'){if($){$('#legendcontainer').animate({top:'-='+cHeight},250,function(){});}else{document.getElementById('legendcontainer').style.top=-cHeight;}
displayButton.innerHTML='Einblenden';}else{if($){$('#legendcontainer').animate({top:'0px'},250,function(){});}else{document.getElementById('legendcontainer').style.top='0px';}
displayButton.innerHTML='Ausblenden';}}},getStylePropertyValue:function(id,property){var element=document.getElementById(id),style=window.getComputedStyle(element);return style.getPropertyValue(property);},showCircumControl:function(){var me=this,distance,circumName=me.createElement('div',{className:'circumsearchName',innerHTML:'Suche in Umkreis'}),circumsearchDiv=me.createElement('div',{className:'circumsearch'}),select=me.createElement('select',{className:'selection'}),options,selectOptions=me.legendOptions.circumOptions;for(distance in selectOptions){options=me.createElement('option',{value:distance,innerHTML:selectOptions[distance]});select.appendChild(options);}
select.addEventListener('change',me.bind(me.toggleDistance,me,[select]));circumsearchDiv.appendChild(circumName);circumsearchDiv.appendChild(select);return circumsearchDiv;},toggleDistance:function(select){var me=this,group,distance=parseInt(select.value,10);if(me.circle){me.circle.setRadius(distance);}
if(me.markerObjects){for(group in me.markerObjects){if(me.markerObjects[group]){me.hideGroup(group);me.showGroup(group,distance);}}}
me.gmap.setCenter(new google.maps.LatLng(me.centerLat,me.centerLng));switch(distance){case 0:return me.gmap.setZoom(10);case 500:return me.gmap.setZoom(15);case 1000:return me.gmap.setZoom(14);case 2000:return me.gmap.setZoom(13);case 5000:return me.gmap.setZoom(11);default:return me.gmap.setZoom(10);}},createElement:function(type,args){var attr,element=document.createElement(type);for(attr in args){element[attr]=args[attr];}
return element;},bind:function(fn,scope,args){return function(){return fn.apply(scope,args);};},trackPosition:function(){if(!navigator.geolocation){console.log('HTML5 Geolocation API is not supported by this browser.');return;}
var me=this,geolocationID,count,markerUser=me.createMarker(null,null,me.createMarkerImage(me.userIcon));if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))){me.setUserPosition(me.getPosition(),markerUser);(function locationTimer(){count=0;geolocationID=window.setInterval(function(){count++;if(count>3){window.clearInterval(geolocationID);locationTimer();}else{me.setUserPosition(me.getPosition(),markerUser);}},10000);})();}else{navigator.geolocation.getCurrentPosition(function(position){me.setUserPosition(position,markerUser);},function(){alert('An error occured while retreiving the position.');});}},getPosition:function(){navigator.geolocation.getCurrentPosition(function(position){return position;},function(){console.log('An error occured while retreiving the position.');},{enableHighAccuracy:true,timeout:10000});},setUserPosition:function(position,markerUser){var me=this,initialLocation;me.centerLat=position.coords.latitude;me.centerLng=position.coords.longitude;initialLocation=new google.maps.LatLng(me.centerLat,me.centerLng);if(initialLocation&&me.gmap){google.maps.event.addListenerOnce(me.gmap,'idle',function(){me.gmap.setCenter(initialLocation);});markerUser.setPosition(initialLocation);if(me.circle){me.circle.setCenter(initialLocation);me.circle.bindTo('center',markerUser,'position');}}}};for(attr in args){_api[attr]=args[attr];}
return _api;};