sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "com/sap/robby/orgchart/model/formatter",
    "sap/m/Button",
  ],
  function (Controller, formatter, Button) {
    "use strict";

    return Controller.extend("com.sap.robby.orgchart.controller.Card", {
      formatter: formatter,

      onInit: function () {},
      onHover: function () {},
      onClick: function (oEvent) {
        //oEvent.getSource().navigateBack();
      },
      afterNavigate: function (oEvent) {
        const quickViewCard = oEvent.getSource();
        if (oEvent.getParameters().isTo) {
          quickViewCard.attachBrowserEvent("click", () => {
            quickViewCard.navigateBack();
          });
        } else {
        }
      },
    });
  }
);
