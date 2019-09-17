module.exports = {
    name: "Edit Variable",

    share: ["VariableName", "ConfigType", "NewValue"],

    variable: function(data) {
        switch(data.ConfigType) {
            case "set":
                return [data.VariableName, "String"];
            case "add":
                return [data.VariableName, "Number"];
            case "remove":
                return [data.VariableName, "Number"];
            default:
                return false;
        }
    },

    html: function() {
        return `
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Variable to Edit</p>
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
                <p class="DBB_Card_Title">Variable Value</p>
                <br>
                <div style="width: 300px; float: left;">
    	            <div class="DBB_Text">
                        Configuration Type
                    </div>
                    <div class="DBB_Borders Select">
			            <select id="ConfigType" class="DBB_Design">
                         	<option value="set" selected>Set</option>
                            <option value="add">Add</option>
                            <option value="remove">Remove</option>
                        </select>
                    </div>
                </div>
                <div style="width: calc(100% - 345px); margin-left: 45px; float: left;">
    	            <div class="DBB_Text">
                        New Value
                    </div>
                    <div class="DBB_Borders Code">
			            <input id="NewValue" class="DBB_Design">
                    </div>
                </div>
            </div>
        `
    },

    code: function(cache) {
        const data = cache.blocks[cache.index];
        const VariableName = this.analyzeString(data.VariableName, cache);
        const ConfigType = data.ConfigType;
        const NewValue = this.executeCode(data.NewValue, cache);

        if(ConfigType == "set") {
            this.createVariable(NewValue, VariableName, cache);
        } else if(ConfigType == "add") {
            this.createVariable(parseFloat(NewValue) + 1, VariableName, cache);
        } else if(ConfigType == "remove") {
            this.createVariable(parseFloat(NewValue) - 1, VariableName, cache);
        }

        this.nextBlock(cache);
    }
};