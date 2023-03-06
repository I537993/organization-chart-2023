sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("com.sap.robby.orgchart.controller.Home", {

		formatter: formatter,

		onInit: function () {

		}
	});
});