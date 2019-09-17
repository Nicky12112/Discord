module.exports = {
    name: "Find",

    share: ["ObjectType", "WayType", "Value", "VariableName"],

    variable: function(data) {
        switch(data.ObjectType) {
            case "channel":
                return [data.VariableName, "Channel Object"];
            case "emoji":
                return [data.VariableName, "Emoji Object"];
            case "server":
                return [data.VariableName, "Server Object"];
            case "role":
                return [data.VariableName, "Role Object"];
            case "user_cached":
                return [data.VariableName, "User Object"];
            case "message_cached":
                return [data.VariableName, "Message Object"];
            default:
                return false;
        }
    },

    html: function(data) {
        return `
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Object to Find</p>
                <br>
                <div style="width: 300px; float: left;">
    	            <div class="DBB_Text">
        	            Object Type
                    </div>
                    <div class="DBB_Borders Select">
                        <select id="ObjectType" class="DBB_Design" onchange="onChange(this.value)">
                            <option value="channel" selected>Channel Object</option>
                            <option value="emoji">Emoji Object</option>
                            <option value="server">Server Object</option>
                            <option value="role">Role Object</option>
                            <option value="user_cached">User Object (Cached)</option>
                            <option value="message_cached">Message Object (Cached)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Way to Find</p>
                <br>
                <div style="width: 300px; float: left;">
    	            <div class="DBB_Text">
                        Way Type
                    </div>
                    <div class="DBB_Borders Select">
                        <select id="WayType" class="DBB_Design">
                            <option value="id" selected>ID</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>
                <div style="width: calc(100% - 345px); margin-left: 45px; float: left;">
    	            <div class="DBB_Text">
        	            Value
                    </div>
                    <div class="DBB_Borders Text">
			            <input id="Value" class="DBB_Design">
                    </div>
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Store Object</p>
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
                    onChange("${data ? data.ObjectType : ""}");
                }

                function onChange(value) {
                    if(value == "user_cached") {
                        $("#Information").html(\`
                            <option value="id" selected>ID</option>
                            <option value="username">Username</option>
                        \`);
                    } else if(value == "message_cached") {
                        $("#Information").html(\`
                            <option value="id" selected>ID</option>
                            <option value="content">Content</option>
                        \`);
                    } else {
                        $("#Information").html(\`
                            <option value="id" selected>ID</option>
                            <option value="name">Name</option>
                        \`);
                    }
                }
            </script>
        `
    },

    code: function(cache) {
        const data = cache.blocks[cache.index];
        const ObjectType = data.ObjectType;
        const WayType = data.WayType;
        const Value = this.analyzeString(data.Value, cache);
        const VariableName = this.analyzeString(data.VariableName, cache);

        let result;
        if(ObjectType == "channel") {
            switch(WayType) {
                case "id":
                    result = this.client.channels.get(Value);
                    break;
                case "name":
                    result = this.client.channels.find("name", Value);
                    break;
                default:
                    break;
            }
        } else if(ObjectType == "emoji") {
            switch(WayType) {
                case "id":
                    result = this.client.emojis.get(Value);
                    break;
                case "name":
                    result = this.client.emojis.find("name", Value);
                    break;
                default:
                    break;
            }
        } else if(ObjectType == "server") {
            switch(WayType) {
                case "id":
                    result = this.client.guilds.get(Value);
                    break;
                case "name":
                    result = this.client.guilds.find("name", Value);
                    break;
                default:
                    break;
            }
        } else if(ObjectType == "role") {
            switch(WayType) {
                case "id":
                    result = this.client.guilds.find(a => a.roles.get(Value)).roles.get(Value);
                    break;
                case "name":
                    result = this.client.guilds.find(a => a.roles.find("name", Value)).roles.find("name", Value);
                    break;
                default:
                    break;
            }
        } else if(ObjectType == "user_cached") {
            switch(WayType) {
                case "id":
                    result = this.client.users.get(Value);
                    break;
                case "username":
                    result = this.client.users.find("username", Value);
                    break;
                default:
                    break;
            }
        } else if(ObjectType == "message_cached") {
            switch(WayType) {
                case "id":
                    result = this.client.channels.filter(a => a.type == "text" && a.messages).find(a => a.messages.get(Value)).messages.get(Value);
                    break;
                case "content":
                    result = this.client.channels.filter(a => a.type == "text" && a.messages).find(a => a.messages.find("content", Value)).messages.find("content", Value);
                    break;
                default:
                    break;
            }
        }

        this.createVariable(result, VariableName, cache);

        this.nextBlock(cache);
    }
};