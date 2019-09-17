module.exports = {
    name: "Send Message",

    share: ["VariableName", "MessageContent", "VariableName2"],

    html: function() {
        return `
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Channel to Send Message to</p>
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
            <div style="width: 100%; float: left; margin-bottom: 30px;">
    	        <div class="DBB_Text">
                	Message Content
                </div>
                <div class="DBB_Borders Text" style="height: calc(100% - 380px);">
		        	<textarea id="MessageContent" class="DBB_Design"></textarea>
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Store Message Object</p>
                <br>
                <div style="width: 100%; float: left;">
    	            <div class="DBB_Text">
        	            Variable Name
                    </div>
                    <div class="DBB_Borders Text">
			            <input id="VariableName2" class="DBB_Design">
                    </div>
                </div>
            </div>
        `
    },

    code: function(cache) {
        const data = cache.blocks[cache.index];
        const VariableName = this.analyzeString(data.VariableName, cache);
        const VariableName2 = this.analyzeString(data.VariableName2, cache);
        const MessageContent = this.analyzeString(data.MessageContent, cache);

        const channel = this.getVariableValue(VariableName, cache);

        channel.send(MessageContent).then(function(message) {
            if(VariableName2) {
                this.createVariable(message, VariableName2, cache);
            }
        });

        this.nextBlock(cache);
    }
};