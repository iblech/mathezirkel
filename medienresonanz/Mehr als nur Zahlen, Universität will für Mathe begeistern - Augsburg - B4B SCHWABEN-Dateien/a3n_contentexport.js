
    var jsonData = '';  
    var jsonData2 = ''; 
    
    function a3n_openPopUp(SinglePopUpID)
    {
        $(function()
        {
                // Dialog            
                $(SinglePopUpID).dialog({
                    autoOpen: false,
                    width: 525
                });
                
                $(SinglePopUpID).dialog('open');
                
        });
    }
    
    
    function a3n_sitePaginator(currentx)
    {
         
         var myJSON = $.json.decode(jsonData2);
    
         var jsstring = new Object;
         
         if(currentx)
         {
              jsstring.PStart = currentx;
         }
         
         jsstring.ExportType = myJSON.ExportType;
         jsstring.ExportAmount = myJSON.ExportAmount;
         jsstring.ExportUser = myJSON.ExportUser;
         
         if(myJSON.ExportSearchWord)
         {
              jsstring.ExportSearchWord = myJSON.ExportSearchWord;
         }
         
         if(myJSON.ExportDateFrom)
         {
              jsstring.ExportDateFrom = myJSON.ExportDateFrom;
         }
         
         if(myJSON.ExportDateTo)
         {
              jsstring.ExportDateTo = myJSON.ExportDateTo;
         }
         
         if(myJSON.ExportCategory)
         {
              jsstring.ExportCategory = myJSON.ExportCategory;
         }
         
         if(myJSON.ExportNetwork)
         {
              jsstring.ExportNetwork = myJSON.ExportNetwork;
         }
          
         var jsonData = $.json.encode(jsstring);
         
         $.ajax({
            dataType: 'jsonp',
            data: 'dataarray='+jsonData,
            jsonp: 'callback',
            url: 'http://www.wirtschaftskalender-a3.de/wordpress/wp-content/plugins/a3network/external_contentexport.php',
            success: function (returnhtml) {
            
                document.getElementById('a3contentexport').innerHTML = returnhtml.txt;
            
            }
         });
    
    }
    
    
    function a3n_enlargeJsonData(jsonData)
    {

         var myJSON = $.json.decode(jsonData);
    
         var jsstring = new Object;
         
         jsstring.ExportType = myJSON.ExportType;
         jsstring.ExportAmount = myJSON.ExportAmount;
         jsstring.ExportUser = myJSON.ExportUser;
         
         if(myJSON.ExportSearchWord)
         {
              jsstring.ExportSearchWord = myJSON.ExportSearchWord;
         }
         
         if(myJSON.ExportDateFrom)
         {
              jsstring.ExportDateFrom = myJSON.ExportDateFrom;
         }
         
         if(myJSON.ExportDateTo)
         {
              jsstring.ExportDateTo = myJSON.ExportDateTo;
         }
         
         if(myJSON.ExportCategory)
         {
              jsstring.ExportCategory = myJSON.ExportCategory;
         }
         
         if(myJSON.ExportNetwork)
         {
              jsstring.ExportNetwork = myJSON.ExportNetwork;
         }
          
         if(document.URL)
         {
              var website = document.URL;
              website = website.replace(/#/g, "");
              website = website.replace(/%/g, "");
              website = website.replace(/&/g, "U0026");
              jsstring.ExportWebsite = website;
         } 
          
         var jsonData = $.json.encode(jsstring);
         
         return jsonData;
    }
    
    
    function setPopUpToOpen(PopDivID, PopUpDefinition)
    {
    
         OpenthisPopUp = PopDivID;
         PopUpType = PopUpDefinition;
         PopUpAction = 'MakeVisible';
     
         if(OpenthisPopUp != '' && document.getElementById(OpenthisPopUp))
         {
             document.getElementById(OpenthisPopUp).style.visibility = 'visible';
     
         };
     
         ClosethisPopUp = OpenthisPopUp;
     
    }
    
    
    function a3n_closePopUp(PopDivID)
    {
    
         if(document.getElementById(PopDivID))
         {
              document.getElementById(PopDivID).style.visibility = 'hidden';
          
              PopUpAction = '';
          
         };
     
    }
    
    
    function a3n_showWholeEntry(ElementID, View, Site)
    {
        var DoNotLoad = false;
        var Displaytype = '';
        var Browsertemp = navigator.userAgent.toLowerCase();
     
        if(Browsertemp.search(/msie/) != -1)
        {
            Displaytype = 'block';

        }
        else if((Browsertemp.search(/opera/) != -1) || (Browsertemp.search(/firefox/) != -1) || (Browsertemp.search(/khtml/) != -1))
        {
            Displaytype = 'table-row';

        }
        else
        {
            DoNotLoad = true;
            alert(unescape("Leider unterst%FCtzt Ihr Browser diese Funktion nicht.%0AGetestet wurden Internet Explorer 7.xx%2C%0AMozilla Firefox 3.0.1%2C Opera 9.51 und Safari 3.1.2."));

        };

        if(Site == 'home' && DoNotLoad == false)
        {
            var ContentID = 'content_'+ElementID;
            var Viewable_Content = document.getElementById(ContentID);

            var LinkID = 'status_view_'+ElementID;
            var Viewable_Link = document.getElementById(LinkID);
          
            if(Viewable_Content.style.display == "none")
            {
                Viewable_Content.style.display = Displaytype;

                Viewable_Link.innerHTML = unescape("%5BStandardansicht%5D");
               
            }
            else
            {
                Viewable_Content.style.display = "none";
          
                Viewable_Link.innerHTML = unescape("%5BDetailansicht%5D");
               
            };
     
        }

    }
    
    function a3n_showDetailInformation(ObjToShow)
    {
    
         var el = document.getElementById(ObjToShow);
         
         if ( el.style.display != 'none' )
         {
              el.style.display = 'none';
         }
         else
         {
              el.style.display = '';
         }
    
         return false;
     
    }
    
    
    function a3n_dragstart(Element_ID)
    {
         PopUpAction = 'DragAndDrop';
         dragobjekt = document.getElementById(Element_ID);
         drag_position_x = position_x - dragobjekt.offsetLeft;
         drag_position_y = position_y - dragobjekt.offsetTop;
     
    }

    function drag(Ereignis)
    {
         position_x = document.all ? window.event.clientX : Ereignis.pageX;
         position_y = document.all ? window.event.clientY : Ereignis.pageY;
     
         if(dragobjekt != null)
         {
              dragobjekt.style.left = (position_x - drag_position_x) + "px";
              dragobjekt.style.top = (position_y - drag_position_y) + "px";
     
          };

     }
     
    function openMapWindow(Adresse, FensterName)
    {
     
        NeuesFenster = window.open(Adresse, FensterName);
        NeuesFenster.focus();

     }
     
    function a3n_showContent()
    {
    
        jsonData = a3n_enlargeJsonData(jsonData);
    
        $.ajax({
        
            dataType: 'jsonp',
            data: 'dataarray='+jsonData,
            jsonp: 'callback',
            url: 'http://www.wirtschaftskalender-a3.de/wordpress/wp-content/plugins/a3network/external_contentexport.php',
            success: function (returnhtml) {
            
                document.getElementById('a3contentexport').innerHTML = returnhtml.txt;
                jsonData2=jsonData; 
            
            }
        });

    } 
    