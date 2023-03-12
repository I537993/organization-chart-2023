sap.ui.define(
  ["sap/ui/core/mvc/Controller", "com/sap/robby/orgchart/model/formatter"],
  function (Controller, formatter) {
    "use strict";

    return Controller.extend("com.sap.robby.orgchart.controller.Card", {
      formatter: formatter,

      onInit: function () {},
      onHover: function () {},
      onClick: function (oEvent) {
        //oEvent.getSource().navigateBack();
      },
      navigate: function (oEvent) {},
      afterNavigate: function (oEvent) {
        const quickViewCard = oEvent.getSource();
        if (oEvent.getParameters().isTo) {
          quickViewCard.attachBrowserEvent("click", () => {
            quickViewCard.getAggregation("pages")[1].removeGroup(1);
            quickViewCard.navigateBack();
          });
        } else {
        }
      },
    });
  }
);
