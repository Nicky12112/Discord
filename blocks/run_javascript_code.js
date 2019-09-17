module.exports = {
    name: "Run JavaScript Code",

    share: ["Code", "NextBlock", "AnalyzeCode", "VariableName"],

    variable: function(data) {
        return [data.VariableName, "Undefined"];
    },

    html: function(data) {
        return `
            <div style="width: 100%; float: left; margin-bottom: 30px;">
    	        <div class="DBB_Text">
                    JavaScript Code
                </div>
                <div id="CodeDiv" class="DBB_Borders Code" style="height: calc(100% - 380px);">
		        	<textarea id="Code" class="DBB_Design"></textarea>
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Code Settings</p>
                <br>
                <div style="width: 300px; float: left;">
    	            <div class="DBB_Text">
                        Go to the next Block automatically?
                    </div>
                    <div class="DBB_Borders Select">
			            <select id="NextBlock" class="DBB_Design">
                         	<option value="yes" selected>Yes</option>
  			            	<option value="no">No</option>
                        </select>
                    </div>
                </div>
                <div style="width: calc(100% - 345px); margin-left: 45px; float: left;">
    	            <div class="DBB_Text">
                        Analyze Code
                    </div>
                    <div class="DBB_Borders Select">
			            <select id="AnalyzeCode" class="DBB_Design" onchange="onChange(this.value)">
                         	<option value="normal" selected>Normal</option>
  			            	<option value="template_strings">Template Strings</option>
                        </select>
                    </div>
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
			            <input id="VariableName" class="DBB_Design">
                    </div>
                </div>
            </div>

            <script>
                if(${data !== null}) {
                    onChange("${data ? data.AnalyzeCode : ""}");
                }

                function onChange(value) {
                    if(value == "normal") {
                        $("#CodeDiv").attr("class", "DBB_Borders Code");
                    } else if(value == "template_strings") {
                        $("#CodeDiv").attr("class", "DBB_Borders Text");
                    }
                }
            </script>
        `
    },

    code: function(cache) {
        const data = cache.blocks[cache.index];
        const Code = data.Code;
        const NextBlock = data.NextBlock;
        const AnalyzeCode = data.AnalyzeCode;
        const VariableName = this.analyzeString(data.VariableName, cache);

        let result;
        switch(AnalyzeCode) {
            case "normal":
                result = this.executeCode(Code, cache);
                break;
            case "template_strings":
                result = this.executeCode(this.analyzeString(Code, cache), cache);
                break;
            default:
                result = "";
                break;
        }

        this.createVariable(result, VariableName, cache);

        if(NextBlock == "yes") this.nextBlock(cache);
    }
}