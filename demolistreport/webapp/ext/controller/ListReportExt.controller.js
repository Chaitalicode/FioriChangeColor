sap.ui.controller("ns.demolistreport.ext.controller.ListReportExt", {
    OnActionOrders : function(oEvent) { 
        alert('OnActionOrders');
    },

    onPressLink:function(oEvent){
        debugger;
       oEvent.getSource().addStyleClass("myCustomCSS").$().css("color","red");
    }
});
