module.exports = {
    name: "Check Condition",

    share: ["VariableName", "ConditionType", "Value", "NextBlockIfTrue", "NextBlockIfFalse"],

    html: function() {
        return `
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Condition</p>
                <br>
                <div style="width: calc(50% - 100px); float: left;">
    	            <div class="DBB_Text">
                        Variable Name
                    </div>
                    <div class="DBB_Borders Text">
			            <input id="VariableName" class="DBB_Design" list="VariableList">
                    </div>
                </div>
                <div style="width: 160px; margin-left: 20px; float: left;">
    	            <div class="DBB_Text">
                        Condition Type
                    </div>
                    <div class="DBB_Borders Select">
                        <select id="ConditionType" class="DBB_Design">
                            <option value="equal" selected>=</option>
                            <option value="equal_value" selected>==</option>
                            <option value="not_equal">≠</option>
                            <option value="not_equal_value">≠≠</option>
                            <option value="greater">&gt;</option>
                            <option value="less">&lt;</option>
                            <option value="greater_equal">≥</option>
                            <option value="less_equal">≤</option>
                        </select>
                    </div>
                </div>
                <div style="width: calc(50% - 100px); margin-left: 20px; float: left;">
    	            <div class="DBB_Text">
        	            Value
                    </div>
                    <div class="DBB_Borders Code">
			            <input id="Value" class="DBB_Design">
                    </div>
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">If True</p>
                <br>
                <div style="width: 100%; float: left;">
    	            <div class="DBB_Text">
                        Go to the next Block?
                    </div>
                    <div class="DBB_Borders Select">
			            <select id="NextBlockIfTrue" class="DBB_Design">
                         	<option value="yes" selected>Yes</option>
  			            	<option value="no">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">If False</p>
                <br>
                <div style="width: 100%; float: left;">
    	            <div class="DBB_Text">
                        Go to the next Block?
                    </div>
                    <div class="DBB_Borders Select">
			            <select id="NextBlockIfFalse" class="DBB_Design">
                         	<option value="yes" selected>Yes</option>
  			            	<option value="no">No</option>
                        </select>
                    </div>
                </div>
            </div>
        `
    },

    code: function(cache) {
        const data = cache.blocks[cache.index];
        const VariableName = this.analyzeString(data.VariableName, cache);
        const ConditionType = data.ConditionType;
        const Value = this.executeCode(data.VariableName2, cache);
        const NextBlockIfTrue = data.NextBlockIfTrue;
        const NextBlockIfFalse = data.NextBlockIfFalse;

        const VariableValue = this.getVariableValue(VariableName, cache);

        let result = false;
        if(ConditionType == "equal") {
            result = VariableValue == Value;
        } else if(ConditionType == "equal_value") {
            result = VariableValue === Value;
        } else if(ConditionType == "not_equal") {
            result = VariableValue != Value;
        } else if(ConditionType == "not_equal_value") {
            result = VariableValue !== Value;
        } else if(ConditionType == "greater") {
            result = VariableValue > Value;
        } else if(ConditionType == "less") {
            result = VariableValue < Value;
        } else if(ConditionType == "greater_equal") {
            result = VariableValue >= Value;
        } else if(ConditionType == "less_equal") {
            result = VariableValue <= Value;
        }
        
        if(Boolean(result) && NextBlockIfTrue == "yes") {
            this.nextBlock(cache);
        } else if(NextBlockIfFalse == "yes") {
            this.nextBlock(cache);
        }
    }
};