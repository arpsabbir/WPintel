function DOMtoString(e){for(var o="",n=e.firstChild;n;){switch(n.nodeType){case Node.ELEMENT_NODE:o+=n.outerHTML;break;case Node.TEXT_NODE:o+=n.nodeValue;break;case Node.CDATA_SECTION_NODE:o+="<![CDATA["+n.nodeValue+"]]>";break;case Node.COMMENT_NODE:o+="\x3c!--"+n.nodeValue+"--\x3e";break;case Node.DOCUMENT_TYPE_NODE:o+="<!DOCTYPE "+n.name+(n.publicId?' PUBLIC "'+n.publicId+'"':"")+(!n.publicId&&n.systemId?" SYSTEM":"")+(n.systemId?' "'+n.systemId+'"':"")+">\n"}n=n.nextSibling}return o}window.onload=function(){var e=window.location.hostname;wpintel_debug("page load! domain: "+e);var o=new RegExp("<(img|link|script)(.*?)(/|"+e+")[^>]+wp-content");document.documentElement.outerHTML.match(o)?(wpintel_debug("WordPress Detected"),window.iswp="yes",window.sourcecode=(new XMLSerializer).serializeToString(document),window.targeturl=window.location.href,chrome.runtime.sendMessage({action:"yes",site_url:window.location.href,site_html:(new XMLSerializer).serializeToString(document)})):(wpintel_debug("WordPress NOT Detected"),window.iswp="no",window.sourcecode=(new XMLSerializer).serializeToString(document),window.targeturl=window.location.href,chrome.runtime.sendMessage({action:"no",site_url:window.location.href,site_html:(new XMLSerializer).serializeToString(document)}))},chrome.runtime.onMessage.addListener(function(e,o,n){"popup"===e.from&&"sendDetails"===e.subject&&(wpintel_debug("Connection from popup.js"),n([window.iswp,window.targeturl,window.sourcecode]))});