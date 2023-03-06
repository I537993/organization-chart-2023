sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/sap/robby/orgchart/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("com.sap.robby.orgchart.controller.Card", {

		formatter: formatter,

		onInit: function () {

		}
	});
});