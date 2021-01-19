sap.ui.define([],function(){
	return{
		priceState: function(idata){
			if(idata instanceof String){
				return "Success";
			}
			else{
				return "Error";
			}
		}
	};
});