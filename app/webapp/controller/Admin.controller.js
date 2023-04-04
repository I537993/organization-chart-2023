sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "com/sap/robby/orgchart/model/formatter",
    "sap/ui/core/routing/History",
  ],
  function (Controller, formatter, History) {
    "use strict";

    return Controller.extend("com.sap.robby.orgchart.controller.Admin", {
      formatter: formatter,

      onInit: function () {},

      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("home", {}, true);
        }
      },
    });
  }
);
