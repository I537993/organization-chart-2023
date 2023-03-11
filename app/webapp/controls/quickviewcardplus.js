sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/QuickViewCard"
], function(Control, QuickViewCard) {
	"use strict";

    return sap.m.QuickViewCard.extend("QuickViewCardPlus", { // call the new Control type "HoverButton" 
    // and let it inherit from sap.m.Button
        metadata: {
            events: {
            "hover" : {},
            "click" : {},
            "press": {}  // this Button has also a "hover" event, in addition to "press" of the normal Button
            },
        }, 
              // the hover event handler:
    onmouseover : function(evt) {   // is called when the Button is hovered - no event registration required
        this.fireHover();
    },
    onclick : function(evt) {   // is called when the Button is hovered - no event registration required
        this.fireClick();
    },

            renderer: {} // add nothing, just inherit the ButtonRenderer as is; 
            // In this case (since the renderer is not changed) you could also specify this explicitly with:  renderer:"sap.m.ButtonRenderer"
            // (means you reuse the ButtonRenderer instead of creating a new view
        }
    );
});