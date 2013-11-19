// for admin panel
function changeDatasetPublishmentBehaviour(cookieName, value) {
	document.cookie = cookieName + "=" + value;
	document.location.reload();
}

function changeShowProfiler(cookieName, value)
{
	document.cookie = cookieName + "=" + value;
	document.location.reload();
}

/* PopUp fuer Modul Link */
function openLinkWindow(link, breite, hoehe, left, top, scrollbars, resizable, status) {
	var linkPopUp = window.open(link, 'LinkPopUp', 'toolbar=no,scrollbars='+scrollbars+',status='+status+',menubar=no,location=no,resizable='+resizable+',width='+breite+',height='+hoehe+',left='+left+',top='+top);

	if (linkPopUp.opener == null)
		linkPopUp.opener = self;
	linkPopUp.focus();
}

// Notwendige Funktion zur Umsetzung der Paging-Klasse im Frontend mit POST-Werten
function NFYPagingSubmit(FormName,costart_val) {
	window.document.forms[FormName].elements['costart'].value=costart_val;
	window.document.forms[FormName].submit();
}

// Werbebanner ein / ausblenden
function showHideAdLayer() {
  var i,p,v,obj,args=showHideAdLayer.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='block')?'block':(v=='none')?'none':v; }
    obj.display=v; }
}

function openAdminPanel() {
	document.getElementById('adminpanel').style.left = 0;
	document.getElementById('adminpanelopener').style.display = 'none';
	
}

function closeAdminPanel() {
	document.getElementById('adminpanel').style.left = -200+'px';
	document.getElementById('adminpanelopener').style.display = 'inline';
}

// inElement muss ein Formularfeld sein
function copyToClipboard (inElement) {
	if (inElement.createTextRange) { 
    	var range = inElement.createTextRange();
    	if (range) // IE
      		range.execCommand('Copy');
  		} else {
    		var flashcopier = 'flashcopier';
		    if(!document.getElementById(flashcopier)) {
		     var divholder = document.createElement('div');
		     divholder.id = flashcopier;
		     document.body.appendChild(divholder);
    	}
	    document.getElementById(flashcopier).innerHTML = '';
	    var divinfo = '<embed src="/redFACT/kernel/flash/clipboard.swf" FlashVars="clipboard='+encodeURIComponent(inElement.value)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
	    document.getElementById(flashcopier).innerHTML = divinfo;
  	}
}

//save item statistic
function item_statistic(shortcode, dataset_id, pu_id, reg_id, type)
{
	if(!pu_id) var pu_id = '';
	if(!reg_id) var reg_id = '';
	if(!type) var type = '';

	// write image
	document.write("<img src=\"/redFACT/kernel/scripts/frontend/item_statistic.php?shortcode="+shortcode+"&dataset_id="+dataset_id+"&pu_id="+pu_id+"&reg_id="+reg_id+"&type="+type+"&rand="+(Math.random()*100000)+"\" width=\"1\" height=\"1\" />");
}

// See unobscure() below
function getUnobscuredLink(string) 
{
	var charNumber = 0;
	var link = "";
	for(var i=0; i < string.length; i++) 
	{
		charNumber = string.charCodeAt(i);
		if (charNumber >= 8364)
		{
			charNumber = 128;
		}
		link += String.fromCharCode(charNumber-(1));
	}
	return link;
}

// See NFY_Tools_Filter::obscure()
function unobscure(link)	
{	
	location.href=getUnobscuredLink(link);
}