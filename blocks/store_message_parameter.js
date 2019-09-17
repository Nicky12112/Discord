module.exports = {
    name: "Store Message Parameter",

    share: ["VariableName", "ParamType", "ParamNumber", "Separator", "VariableName2"],

    html: function() {
        return `
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Message to Use</p>
                <br>
                <div style="width: 100%; float: left;">
    	            <div class="DBB_Text">
        	            Variable Name
                    </div>
                    <div class="DBB_Borders Text">
			            <input id="VariableName" class="DBB_Design" list="VariableList">
                    </div>
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Parameter Type</p>
                <br>
                <div style="width: 300px; float: left;">
    	            <div class="DBB_Text">
                        Parameter Amount
                    </div>
                    <div class="DBB_Borders Select">
                        <select id="ParamType" class="DBB_Design">
                         	<option value="one">One Parameter</option>
  			            	<option value="multiple">Multiple Parameters</option>
                        </select>
                    </div>
                </div>
                <div style="width: calc(100% - 345px); margin-left: 45px; float: left;">
    	            <div class="DBB_Text">
                        Starting From Parameter Number
                    </div>
                    <div class="DBB_Borders Text">
			            <input id="ParamNumber" class="DBB_Design">
                    </div>
                </div>
            </div>
            <div style="width: 100%; float: left; margin-bottom: 30px;">
    	        <div class="DBB_Text">
                	Separator (\\s+ is a space)
                </div>
                <div class="DBB_Borders Text">
		        	<input id="Separator" class="DBB_Design" value="\\s+" placeholder="Supports RegExp">
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Store Result</p>
                <br>
                <div style="width: 100%; float: left;">
    	            <div class="DBB_Text">
        	            Variable Name
                    </div>
                    <div class="DBB_Borders Text">
			            <input id="VarName2" class="DBB_Design">
                    </div>
                </div>
            </div>
        `
    },

    code: function(cache) {
        const data = cache.blocks[cache.index];
        const VariableName = this.analyzeString(data.VariableName, cache);
        const ParamType = data.ParamType;
        const ParamNumber = parseInt(this.analyzeString(data.ParamNumber, cache));
        const Separator = this.analyzeString(data.Separator, cache);
        const VariableName2 = this.analyzeString(data.VariableName2, cache);

        const message = this.getVariableValue(VariableName, cache);

        let result;
        switch(ParamType) {
            case "one":
                result = message.split(" ")[parseInt(ParamNumber)];
                break;
            case "multiple":
                let ar = [];
                while (i = message.match(new RegExp(Separator, "g"))) {
                    ar.push(i);
                }
                if(ParamN > ar.length) {
                    result = "";
                } else if(ParamN <= 0) {
                    result = message;
                } else {
                    result = message.substring(ar[ParamN - 1].index + ar[ParamN - 1][0].length);
                }
                break;
            default:
                break;
        }

        this.createVariable(result, VariableName2, cache);

        this.nextBlock(cache);
    }
};