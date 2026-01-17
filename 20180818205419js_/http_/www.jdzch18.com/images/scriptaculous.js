var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
Scriptaculous = {
  Version: '1.5_pre1',
  require: function(libraryName) {
    // inserting via DOM fails in Safari 2.0, so brute force approach
    document.write('<script type="text/javascript" src="'+libraryName+'"></script>');
  },
  load: function() {
    // fixme: check for prototype version number
    if(typeof Prototype=='undefined') 
      throw("script.aculo.us requires the Prototype JavaScript framework >= 1.4.0");
    var scriptTags = document.getElementsByTagName("script");
    for(var i=0;i<scriptTags.length;i++) {
      if(scriptTags[i].src && scriptTags[i].src.match(/scriptaculous\.js$/)) {
        var path = scriptTags[i].src.replace(/scriptaculous\.js$/,'');
        this.require(path + 'util.js');
        this.require(path + 'effects.js');
        this.require(path + 'dragdrop.js');
        this.require(path + 'controls.js');
      }
    }
  }
}

Scriptaculous.load();
}
/*
     FILE ARCHIVED ON 18:46:18 Aug 18, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:03:07 Jan 17, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.527
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 5.753
  LoadShardBlock: 69.328 (3)
  PetaboxLoader3.datanode: 136.475 (5)
  PetaboxLoader3.resolve: 172.481 (3)
  load_resource: 275.487 (2)
*/