module.exports = {
    name: "Store Information",

    share: ["ObjectType", "VariableName", "Information", "VariableName2"],

    variable: function(data) {
        if(data.ObjectType == "bot") {
            switch(parseInt(data.Information)) {
                case 1:
                    return [data.VariableName2, "Voice Broadcast Objects Array"];
                case 2:
                    return [data.VariableName2, "Boolean"];
                case 3:
                    return [data.VariableName2, "Channel Objects Array"];
                case 4:
                    return [data.VariableName2, "Emoji Objects Array"];
                case 5:
                    return [data.VariableName2, "Server Objects Array"];
                case 6:
                    return [data.VariableName2, "Number"];
                case 7:
                    return [data.VariableName2, "Number Array"];
                case 8:
                    return [data.VariableName2, "Date"];
                case 9:
                    return [data.VariableName2, "Number"];
                case 10:
                    return [data.VariableName2, "String"];
                case 11:
                    return [data.VariableName2, "String"];
                case 12:
                    return [data.VariableName2, "Number"];
                case 13:
                    return [data.VariableName2, "User Object"];
                case 14:
                    return [data.VariableName2, "User Objects Array"];
                case 15:
                    return [data.VariableName2, "Voice Connection Objects Array"];
                default:
                    return false;
            }
        } else if(data.ObjectType == "server") {
            switch(parseInt(data.Information)) {
                case 1:
                    return [data.VariableName2, "Channel Object"];
                case 2:
                    return [data.VariableName2, "String"];
                case 3:
                    return [data.VariableName2, "Number"];
                case 4:
                    return [data.VariableName2, "String"];
                case 5:
                    return [data.VariableName2, "Boolean"];
                case 6:
                    return [data.VariableName2, "Channel Objects Array"];
                case 7:
                    return [data.VariableName2, "Date"];
                case 8:
                    return [data.VariableName2, "Number"];
                case 9:
                    return [data.VariableName2, "String"];
                case 10:
                    return [data.VariableName2, "Role Object"];
                case 11:
                    return [data.VariableName2, "Boolean"];
                case 12:
                    return [data.VariableName2, "Boolean"];
                case 13:
                    return [data.VariableName2, "Emoji Objects Array"];
                case 14:
                    return [data.VariableName2, "String"];
                case 15:
                    return [data.VariableName2, "String"];
                case 16:
                    return [data.VariableName2, "String"];
                case 17:
                    return [data.VariableName2, "String"];
                case 18:
                    return [data.VariableName2, "Date"];
                case 19:
                    return [data.VariableName2, "Number"];
                case 20:
                    return [data.VariableName2, "Boolean"];
                case 21:
                    return [data.VariableName2, "Member Object"];
                case 22:
                    return [data.VariableName2, "Number"];
                case 23:
                    return [data.VariableName2, "Member Objects Array"];
                case 24:
                    return [data.VariableName2, "String"];
                case 25:
                    return [data.VariableName2, "String"];
                case 26:
                    return [data.VariableName2, "String"];
                case 27:
                    return [data.VariableName2, "Member Object"];
                case 28:
                    return [data.VariableName2, "String"];
                case 29:
                    return [data.VariableName2, "Presence Objects Array"];
                case 30:
                    return [data.VariableName2, "String"];
                case 31:
                    return [data.VariableName2, "Role Objects Array"];
                case 32:
                    return [data.VariableName2, "String"];
                case 33:
                    return [data.VariableName2, "String"];
                case 34:
                    return [data.VariableName2, "Channel Object"];
                case 35:
                    return [data.VariableName2, "String"];
                case 36:
                    return [data.VariableName2, "String"];
                case 37:
                    return [data.VariableName2, "Boolean"];
                case 38:
                    return [data.VariableName2, "Voice Connection Object"];
                case 39:
                    return [data.VariableName2, "Ban Objects Array"];
                case 40:
                    return [data.VariableName2, "Invite Objects Array"];
                case 41:
                    return [data.VariableName2, "String"];
                case 42:
                    return [data.VariableName2, "Webhook Objects Array"];
                default:
                    return false;
            }
        } else if(data.ObjectType == "role") {
            switch(parseInt(data.Information)) {
                case 1:
                    return [data.VariableName2, "Number"];
                case 2:
                    return [data.VariableName2, "Number"];
                case 3:
                    return [data.VariableName2, "Date"];
                case 4:
                    return [data.VariableName2, "Number"];
                case 5:
                    return [data.VariableName2, "Boolean"];
                case 6:
                    return [data.VariableName2, "Boolean"];
                case 7:
                    return [data.VariableName2, "Server Object"];
                case 8:
                    return [data.VariableName2, "String"];
                case 9:
                    return [data.VariableName2, "Boolean"];
                case 10:
                    return [data.VariableName2, "String"];
                case 11:
                    return [data.VariableName2, "Boolean"];
                case 12:
                    return [data.VariableName2, "Member Objects Array"];
                case 13:
                    return [data.VariableName2, "Boolean"];
                case 14:
                    return [data.VariableName2, "String"];
                case 15:
                    return [data.VariableName2, "Number"];
                case 16:
                    return [data.VariableName2, "Number"];
                case 17:
                    return [data.VariableName2, "Permissions Object"];
                default:
                    return false;
            }
        } else if(data.ObjectType == "emoji") {
            switch(parseInt(data.Information)) {
                case 1:
                    return [data.VariableName2, "Boolean"];
                case 2:
                    return [data.VariableName2, "Date"];
                case 3:
                    return [data.VariableName2, "Number"];
                case 4:
                    return [data.VariableName2, "Boolean"];
                case 5:
                    return [data.VariableName2, "Boolean"];
                case 6:
                    return [data.VariableName2, "Server Object"];
                case 7:
                    return [data.VariableName2, "String"];
                case 8:
                    return [data.VariableName2, "String"];
                case 9:
                    return [data.VariableName2, "Boolean"];
                case 10:
                    return [data.VariableName2, "String"];
                case 11:
                    return [data.VariableName2, "Boolean"];
                case 12:
                    return [data.VariableName2, "Role Objects Array"];
                case 13:
                    return [data.VariableName2, "String"];
                case 14:
                    return [data.VariableName2, "User Object"];
                default:
                    return false;
            }
        } else if(data.ObjectType == "member") {
            switch(parseInt(data.Information)) {
                case 1:
                    return [data.VariableName2, "Boolean"];
                case 2:
                    return [data.VariableName2, "Role Object"];
                case 3:
                    return [data.VariableName2, "Boolean"];
                case 4:
                    return [data.VariableName2, "Boolean"];
                case 5:
                    return [data.VariableName2, "Number"];
                case 6:
                    return [data.VariableName2, "String"];
                case 7:
                    return [data.VariableName2, "String"];
                case 8:
                    return [data.VariableName2, "Server Object"];
                case 9:
                    return [data.VariableName2, "Role Object"];
                case 10:
                    return [data.VariableName2, "Role Object"];
                case 11:
                    return [data.VariableName2, "String"];
                case 12:
                    return [data.VariableName2, "Date"];
                case 13:
                    return [data.VariableName2, "Number"];
                case 14:
                    return [data.VariableName2, "Boolean"];
                case 15:
                    return [data.VariableName2, "Message Object"];
                case 16:
                    return [data.VariableName2, "String"];
                case 17:
                    return [data.VariableName2, "Boolean"];
                case 18:
                    return [data.VariableName2, "Boolean"];
                case 19:
                    return [data.VariableName2, "String"];
                case 20:
                    return [data.VariableName2, "Permissions Object"];
                case 21:
                    return [data.VariableName2, "Presence Object"];
                case 22:
                    return [data.VariableName2, "Role Objects Array"];
                case 23:
                    return [data.VariableName2, "Boolean"];
                case 24:
                    return [data.VariableName2, "Boolean"];
                case 25:
                    return [data.VariableName2, "Boolean"];
                case 26:
                    return [data.VariableName2, "Boolean"];
                case 27:
                    return [data.VariableName2, "Boolean"];
                case 28:
                    return [data.VariableName2, "User Object"];
                case 29:
                    return [data.VariableName2, "Voice Channel Object"];
                case 30:
                    return [data.VariableName2, "String"];
                case 31:
                    return [data.VariableName2, "String"];
                default:
                    return false;
            }
        } else if(data.ObjectType == "channel") {
            switch(parseInt(data.Information)) {
                case 1:
                    return [data.VariableName2, "Number"];
                case 2:
                    return [data.VariableName2, "Date"];
                case 3:
                    return [data.VariableName2, "Number"];
                case 4:
                    return [data.VariableName2, "Boolean"];
                case 5:
                    return [data.VariableName2, "Boolean"];
                case 6:
                    return [data.VariableName2, "Server Object"];
                case 7:
                    return [data.VariableName2, "String"];
                case 8:
                    return [data.VariableName2, "Boolean"];
                case 9:
                    return [data.VariableName2, "String"];
                case 10:
                    return [data.VariableName2, "Category Object"];
                case 11:
                    return [data.VariableName2, "String"];
                case 12:
                    return [data.VariableName2, "Permissions Overwritten Object"];
                case 13:
                    return [data.VariableName2, "Number"];
                case 14:
                    return [data.VariableName2, "String"];
                case 15:
                    return [data.VariableName2, "Invite Objects Array"];
                case 16:
                    return [data.VariableName2, "Channel Objects Array"];
                case 17:
                    return [data.VariableName2, "Message Object"];
                case 18:
                    return [data.VariableName2, "String"];
                case 19:
                    return [data.VariableName2, "Date"];
                case 20:
                    return [data.VariableName2, "Number"];
                case 21:
                    return [data.VariableName2, "Member Objects Array"];
                case 22:
                    return [data.VariableName2, "Message Objects Array"];
                case 23:
                    return [data.VariableName2, "Boolean"];
                case 24:
                    return [data.VariableName2, "Number"];
                case 25:
                    return [data.VariableName2, "String"];
                case 26:
                    return [data.VariableName2, "Boolean"];
                case 27:
                    return [data.VariableName2, "Number"];
                case 28:
                    return [data.VariableName2, "Message Objects Array"];
                case 29:
                    return [data.VariableName2, "Webhook Objects Array"];
                case 30:
                    return [data.VariableName2, "Number"];
                case 31:
                    return [data.VariableName2, "Voice Connection Object"];
                case 32:
                    return [data.VariableName2, "Boolean"];
                case 33:
                    return [data.VariableName2, "Boolean"];
                case 34:
                    return [data.VariableName2, "Member Objects Array"];
                case 35:
                    return [data.VariableName2, "Boolean"];
                case 36:
                    return [data.VariableName2, "Number"];
                case 37:
                    return [data.VariableName2, "Date"];
                case 38:
                    return [data.VariableName2, "Number"];
                case 39:
                    return [data.VariableName2, "Boolean"];
                case 40:
                    return [data.VariableName2, "String"];
                case 41:
                    return [data.VariableName2, "Message Object"];
                case 42:
                    return [data.VariableName2, "String"];
                case 43:
                    return [data.VariableName2, "Date"];
                case 44:
                    return [data.VariableName2, "Number"];
                case 45:
                    return [data.VariableName2, "User Object"];
                case 46:
                    return [data.VariableName2, "Message Objects Array"];
                case 47:
                    return [data.VariableName2, "Boolean"];
                case 48:
                    return [data.VariableName2, "Number"];
                case 49:
                    return [data.VariableName2, "Message Objects Array"];
                default:
                    return false;
            }
        } else if(data.ObjectType == "message") {
            switch(parseInt(data.Information)) {
                case 1:
                    return [data.VariableName2, "Message Attachment Objects Array"];
                case 2:
                    return [data.VariableName2, "User Object"];
                case 3:
                    return [data.VariableName2, "Channel Object"];
                case 4:
                    return [data.VariableName2, "String"];
                case 5:
                    return [data.VariableName2, "String"];
                case 6:
                    return [data.VariableName2, "Date"];
                case 7:
                    return [data.VariableName2, "Number"];
                case 8:
                    return [data.VariableName2, "Boolean"];
                case 9:
                    return [data.VariableName2, "Boolean"];
                case 10:
                    return [data.VariableName2, "Boolean"];
                case 11:
                    return [data.VariableName2, "Date"];
                case 12:
                    return [data.VariableName2, "Number"];
                case 13:
                    return [data.VariableName2, "Message Objects Array"];
                case 14:
                    return [data.VariableName2, "Message Embed Objects Array"];
                case 15:
                    return [data.VariableName2, "Server Object"];
                case 16:
                    return [data.VariableName2, "Boolean"];
                case 17:
                    return [data.VariableName2, "String"];
                case 18:
                    return [data.VariableName2, "Member Object"];
                case 19:
                    return [data.VariableName2, "Message Mentions Objects"];
                case 20:
                    return [data.VariableName2, "String"];
                case 21:
                    return [data.VariableName2, "Boolean"];
                case 22:
                    return [data.VariableName2, "Boolean"];
                case 23:
                    return [data.VariableName2, "Message Reaction Objects Array"];
                case 24:
                    return [data.VariableName2, "Boolean"];
                case 25:
                    return [data.VariableName2, "Boolean"];
                case 26:
                    return [data.VariableName2, "String"];
                case 27:
                    return [data.VariableName2, "String"];
                case 28:
                    return [data.VariableName2, "Webhook Object"];
                case 29:
                    return [data.VariableName2, "String"];
                default:
                    return false;
            }
        } else if(data.ObjectType == "invite") {
            switch(parseInt(data.Information)) {
                case 1:
                    return [data.VariableName2, "Channel Object"];
                case 2:
                    return [data.VariableName2, "String"];
                case 3:
                    return [data.VariableName2, "Date"];
                case 4:
                    return [data.VariableName2, "Number"];
                case 5:
                    return [data.VariableName2, "Date"];
                case 6:
                    return [data.VariableName2, "Number"];
                case 7:
                    return [data.VariableName2, "Server Object"];
                case 8:
                    return [data.VariableName2, "User Object"];
                case 9:
                    return [data.VariableName2, "Number"];
                case 10:
                    return [data.VariableName2, "Number"];
                case 11:
                    return [data.VariableName2, "Number"];
                case 12:
                    return [data.VariableName2, "Number"];
                case 13:
                    return [data.VariableName2, "Boolean"];
                case 14:
                    return [data.VariableName2, "Number"];
                case 15:
                    return [data.VariableName2, "String"];
                case 16:
                    return [data.VariableName2, "Number"];
                case 17:
                    return [data.VariableName2, "Number"];
                default:
                    return false;
            }
        } else if(data.ObjectType == "user") {
            switch(parseInt(data.Information)) {
                case 1:
                    return [data.VariableName2, "String"];
                case 2:
                    return [data.VariableName2, "String"];
                case 3:
                    return [data.VariableName2, "Boolean"];
                case 4:
                    return [data.VariableName2, "Date"];
                case 5:
                    return [data.VariableName2, "Number"];
                case 6:
                    return [data.VariableName2, "String"];
                case 7:
                    return [data.VariableName2, "String"];
                case 8:
                    return [data.VariableName2, "String"];
                case 9:
                    return [data.VariableName2, "Channel Object"];
                case 10:
                    return [data.VariableName2, "String"];
                case 11:
                    return [data.VariableName2, "Message Object"];
                case 12:
                    return [data.VariableName2, "String"];
                case 13:
                    return [data.VariableName2, "Presence Object"];
                case 14:
                    return [data.VariableName2, "String"];
                case 15:
                    return [data.VariableName2, "String"];
                default:
                    return false;
            }
        }
    },

    html: function(data) {
        return `
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Base Object</p>
                <br>
                <div style="width: 300px; float: left;">
    	            <div class="DBB_Text">
        	            Object Type
                    </div>
                    <div class="DBB_Borders Select">
                        <select id="ObjectType" class="DBB_Design" onchange="onChange1(this.value); onChange2(this.value)">
                            <option value="bot" selected>Bot Object</option>
                            <option value="server">Server Object</option>
                            <option value="role">Role Object</option>
                            <option value="emoji">Emoji Object</option>
                            <option value="member">Member Object</option>
                            <option value="channel">Channel Object</option>
                            <option value="message">Message Object</option>
                            <option value="invite">Invite Object</option>
                            <option value="user">User Object</option>
                        </select>
                    </div>
                </div>
                <div id="VariableNameDiv" style="width: calc(100% - 345px); margin-left: 45px; float: left; display: none;">
    	            <div class="DBB_Text">
        	            Variable Name
                    </div>
                    <div class="DBB_Borders Text">
			            <input id="VariableName" class="DBB_Design" list="VariableList">
                    </div>
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Object Information</p>
                <br>
                <div style="width: 100%; float: left;">
    	            <div class="DBB_Text">
        	            Information
                    </div>
                    <div class="DBB_Borders Select">
                        <select id="Information" class="DBB_Design">
                            <option value="1" selected>Bot Voice Broadcast Objects Array</option>
                            <option value="2">Is Bot In A Browser Environment?</option>
                            <option value="3">Bot Channel Objects Array</option>
                            <option value="4">Bot Emoji Objects Array</option>
                            <option value="5">Bot Server Objects Array</option>
                            <option value="6">Current Bot Ping</option>
                            <option value="7">Recent Bot Pings Array</option>
                            <option value="8">Bot Ready At</option>
                            <option value="9">Bot Ready At (Timestamp)</option>
                            <option value="10">Bot Status</option>
                            <option value="11">Bot Token (BE CAREFUL)</option>
                            <option value="12">Bot Uptime (Milliseconds)</option>
                            <option value="13">Bot User Object</option>
                            <option value="14">Bot User Objects Array</option>
                            <option value="15">Bot Voice Connection Objects Array</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="DBB_Card">
                <p class="DBB_Card_Title">Store Information</p>
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

            <script>
                if(${data !== null}) {
                    onChange1("${data ? data.ObjectType : ""}");
                    onChange2("${data ? data.ObjectType : ""}");
                }

                function onChange1(value) {
                    if(value == "bot") {
                        $("#VariableNameDiv").hide();
                    } else {
                        $("#VariableNameDiv").show();
                    }
                }

                function onChange2(value) {
                    if(value == "bot") {
                        $("#Information").html(\`
                            <option value="1" selected>Bot Voice Broadcast Objects Array</option>
                            <option value="2">Is Bot In A Browser Environment?</option>
                            <option value="3">Bot Channel Objects Array</option>
                            <option value="4">Bot Emoji Objects Array</option>
                            <option value="5">Bot Server Objects Array</option>
                            <option value="6">Current Bot Ping</option>
                            <option value="7">Recent Bot Pings Array</option>
                            <option value="8">Bot Ready At</option>
                            <option value="9">Bot Ready At (Timestamp)</option>
                            <option value="10">Bot Status</option>
                            <option value="11">Bot Token (BE CAREFUL)</option>
                            <option value="12">Bot Uptime (Milliseconds)</option>
                            <option value="13">Bot User Object</option>
                            <option value="14">Bot User Objects Array</option>
                            <option value="15">Bot Voice Connection Objects Array</option>
                        \`);
                    } else if(value == "server") {
                        $("#Information").html(\`
                            <option value="1" selected>Server AFK Channel Object</option>
                            <option value="2">Server AFK Channel ID</option>
                            <option value="3">Server AFK Channel Timeout (Seconds)</option>
                            <option value="4">Server Application ID</option>
                            <option value="5">Is Server Available?</option>
                            <option value="6">Server Channel Objects Array</option>
                            <option value="7">Server Created At</option>
                            <option value="8">Server Created At (Timestamp)</option>
                            <option value="9">Server Default Message Notifications</option>
                            <option value="10">Server Default Role Object</option>
                            <option value="11">Has Bot Been Removed From The Server?</option>
                            <option value="12">Are Embedded Images Enabled On This Server?</option>
                            <option value="13">Server Emoji Objects Array</option>
                            <option value="14">Server Explicit Content Filter Level</option>
                            <option value="15">Server Icon (Hash)</option>
                            <option value="16">Server Icon URL</option>
                            <option value="17">Server ID</option>
                            <option value="18">Bot Joined The Server At</option>
                            <option value="19">Bot Joined The Server At (Timestamp)</option>
                            <option value="20">Is Server Large?</option>
                            <option value="21">Server Bot Member Object</option>
                            <option value="22">Server Member Count</option>
                            <option value="23">Server Member Objects Array</option>
                            <option value="24">Is Server Two-Factor Authentication Enabled?</option>
                            <option value="25">Server Name</option>
                            <option value="26">Server Name Acronym</option>
                            <option value="27">Server Owner Member Object</option>
                            <option value="28">Server Owner Member ID</option>
                            <option value="29">Server Presence Objects Array</option>
                            <option value="30">Server Region</option>
                            <option value="31">Server Role Objects Array</option>
                            <option value="32">Server Splash (Hash)</option>
                            <option value="33">Server Splash URL</option>
                            <option value="34">Server System Channel Object</option>
                            <option value="35">Server System Channel ID</option>
                            <option value="36">Server Verification Level</option>
                            <option value="37">Is Server Verified?</option>
                            <option value="38">Server Bot Voice Connection Object</option>
                            <option value="39">Server Ban Objects Array</option>
                            <option value="40">Server Invite Objects Array</option>
                            <option value="41">Server Vanity URL</option>
                            <option value="42">Server Webhook Objects Array</option>
                        \`);
                    } else if(value == "role") {
                        $("#Information").html(\`
                            <option value="1" selected>Role Position In The Role Manager</option>
                            <option value="2">Role Color (Base 10)</option>
                            <option value="3">Role Created At</option>
                            <option value="4">Role Created At (Timestamp)</option>
                            <option value="5">Has Role Been Deleted?</option>
                            <option value="6">Is Role Editable By The Bot?</option>
                            <option value="7">Role Server Object</option>
                            <option value="8">Role Color (Hex)</option>
                            <option value="9">Is Role Separate From Others?</option>
                            <option value="10">Role ID</option>
                            <option value="11">Is Role Managed By An External Service?</option>
                            <option value="12">Role Member Objects Array</option>
                            <option value="13">Is Role Mentionable?</option>
                            <option value="14">Role Name</option>
                            <option value="15">Role Permissions (Bitfield)</option>
                            <option value="16">Role Position In Discord API</option>
                            <option value="17">Role Permissions Object</option>
                        \`);
                    } else if(value == "emoji") {
                        $("#Information").html(\`
                            <option value="1" selected>Is Emoji Animated?</option>
                            <option value="2">Emoji Created At</option>
                            <option value="3">Emoji Created At (Timestamp)</option>
                            <option value="4">Is Emoji Deletable By The Bot?</option>
                            <option value="5">Is Emoji Deleted?</option>
                            <option value="6">Emoji Server Object</option>
                            <option value="7">Emoji ID</option>
                            <option value="8">Emoji Identifier</option>
                            <option value="9">Is Emoji Managed By An External Service?</option>
                            <option value="10">Emoji Name</option>
                            <option value="11">Does Emoji Require Colons Surrounding It?</option>
                            <option value="12">Emoji Role Objects Array</option>
                            <option value="13">Emoji URL</option>
                            <option value="14">Emoji Author (User Object)</option>
                        \`);
                    } else if(value == "member") {
                        $("#Information").html(\`
                            <option value="1" selected>Is Member Bannable By The Bot?</option>
                            <option value="2">Member Color Role Object</option>
                            <option value="3">Is Member Deafened? (Any Way)</option>
                            <option value="4">Has Member Been Removed From The Server?</option>
                            <option value="5">Member Display Color (Base 10)</option>
                            <option value="6">Member Display Color (Hex)</option>
                            <option value="7">Member Display Name</option>
                            <option value="8">Member Server Object</option>
                            <option value="9">Member Highest Role Object</option>
                            <option value="10">Member Hoist Role Object</option>
                            <option value="11">Member ID (User ID)</option>
                            <option value="12">Member Joined The Server At</option>
                            <option value="13">Member Joined The Server At (Timestamp)</option>
                            <option value="14">Is Member Kickable By The Bot?</option>
                            <option value="15">Member Last Message Object</option>
                            <option value="16">Member Last Message ID</option>
                            <option value="17">Is Member Manageable By The Bot?</option>
                            <option value="18">Is Member Muted? (Any Way)</option>
                            <option value="19">Member Nickname</option>
                            <option value="20">Member Permissions Object</option>
                            <option value="21">Member Presence Object</option>
                            <option value="22">Member Role Objects Array</option>
                            <option value="23">Is Member Self-Deafened?</option>
                            <option value="24">Is Member Self-Muted?</option>
                            <option value="25">Is Member Deafened Server-Wide?</option>
                            <option value="26">Is Member Muted Server-Wide?</option>
                            <option value="27">Is Member Speaking? (Bot Must Be On The Same Voice Channel)</option>
                            <option value="28">Member User Object</option>
                            <option value="29">Member Voice Channel Object</option>
                            <option value="30">Member Voice Channel ID</option>
                            <option value="31">Member Voice Session ID</option>
                        \`);
                    } else if(value == "channel") {
                        $("#Information").html(\`
                            <optgroup label="Server Channel">
                                <option value="1" selected>Channel Calculated Position</option>
                                <option value="2">Channel Created At</option>
                                <option value="3">Channel Created At (Timestamp)</option>
                                <option value="4">Is Channel Deletable By The Bot?</option>
                                <option value="5">Has Channel Been Deleted?</option>
                                <option value="6">Channel Server Object</option>
                                <option value="7">Channel ID</option>
                                <option value="8">Is Channel Manageable By The Bot?</option>
                                <option value="9">Channel Name</option>
                                <option value="10">Channel Category Object</option>
                                <option value="11">Channel Category ID</option>
                                <option value="12">Channel Permissions Overwritten Object</option>
                                <option value="13">Channel Position In The List</option>
                                <option value="14">Channel Type</option>
                                <option value="15">Channel Invite Objects Array</option>
                            </optgroup>
                            <optgroup label="Category Channel">
                                <option value="16">Category Channel Channel Objects Array</option>
                            </optgroup>
                            <optgroup label="Text Channel">
                                <option value="17">Text Channel Last Message Object</option>
                                <option value="18">Text Channel Last Message ID</option>
                                <option value="19">Text Channel Last Pinned Message Date</option>
                                <option value="20">Text Channel Last Pinned Message Date (Timestamp)</option>
                                <option value="21">Text Channel Member Objects Array</option>
                                <option value="22">Text Channel Message Objects Array (Cached)</option>
                                <option value="23">Is Text Channel NSFW?</option>
                                <option value="24">Text Channel Ratelimit Per User (Seconds)</option>
                                <option value="25">Text Channel Topic</option>
                                <option value="26">Is Typing Indicator Being Shown In The Text Channel?</option>
                                <option value="27">Text Channel Typing Count</option>
                                <option value="28">Text Channel Pinned Message Objects Array (Does Not Contain Any Reaction Data)</option>
                                <option value="29">Text Channel Webhook Objects Array</option>
                            </optgroup>
                            <optgroup label="Voice Channel">
                                <option value="30" selected>Voice Channel Bitrate</option>
                                <option value="31">Voice Channel Voice Connection Object</option>
                                <option value="32">Is Voice Channel Full?</option>
                                <option value="33">Does Bot Has Permission To Join This Voice Channel?</option>
                                <option value="34">Voice Channel Member Objects Array</option>
                                <option value="35">Does Bot Has Permission To Speak This Voice Channel?</option>
                                <option value="36">Voice Channel User Limit (0 Means Unlimited)</option>
                            </optgroup>
                            <optgroup label="DM Channel">
                                <option value="37" selected>DM Channel Created At</option>
                                <option value="38">DM Channel Created At (Timestamp)</option>
                                <option value="39">Has DM Channel Been Deleted?</option>
                                <option value="40">DM Channel ID</option>
                                <option value="41">DM Channel Last Message Object</option>
                                <option value="42">DM Channel Last Message ID</option>
                                <option value="43">DM Channel Last Pinned Message Date</option>
                                <option value="44">DM Channel Last Pinned Message Date (Timestamp)</option>
                                <option value="45">DM Recipient (User Object)</option>
                                <option value="46">DM Channel Message Objects Array (Cached)</option>
                                <option value="47">Is Typing Indicator Being Shown In The DM Channel?</option>
                                <option value="48">DM Channel Typing Count</option>
                                <option value="49">DM Channel Pinned Message Objects Array (Does Not Contain Any Reaction Data)</option>
                            </optgroup>
                        \`);
                    } else if(value == "message") {
                        $("#Information").html(\`
                            <option value="1" selected>Message Attachment Objects Array</option>
                            <option value="2">Message Author (User Object)</option>
                            <option value="3">Message Channel Object</option>
                            <option value="4">Message Clean Content</option>
                            <option value="5">Message Content</option>
                            <option value="6">Message Created At</option>
                            <option value="7">Message Created At (Timestamp)</option>
                            <option value="8">Is Message Deletable By The Bot?</option>
                            <option value="9">Has Message Been Deleted?</option>
                            <option value="10">Is Message Editable By The Bot?</option>
                            <option value="11">Message Edited At</option>
                            <option value="12">Message Edited At (Timestamp)</option>
                            <option value="13">Message Cached Edited Objects Array</option>
                            <option value="14">Message Embed Objects Array</option>
                            <option value="15">Message Server Object</option>
                            <option value="16">Is Message A Hit In A Search?</option>
                            <option value="17">Message ID</option>
                            <option value="18">Message Author (Member Object)</option>
                            <option value="19">Message Mentions Object</option>
                            <option value="20">Message Nonce</option>
                            <option value="21">Is Message Pinnable By The Bot?</option>
                            <option value="22">Is Message Pinned?</option>
                            <option value="23">Message Reaction Objects Array</option>
                            <option value="24">Was Message sent by Discord?</option>
                            <option value="25">Was Message Text-To-Speech?</option>
                            <option value="26">Message Type</option>
                            <option value="27">Message URL</option>
                            <option value="28">Message Webhook Object</option>
                            <option value="29">Message Webhook ID</option>
                        \`);
                    } else if(value == "invite") {
                        $("#Information").html(\`
                            <option value="1" selected>Invite Channel Object</option>
                            <option value="2">Invite Code</option>
                            <option value="3">Invite Created At</option>
                            <option value="4">Invite Created At (Timestamp)</option>
                            <option value="5">Invite Expires At</option>
                            <option value="6">Invite Expires At (Timestamp)</option>
                            <option value="7">Invite Server Object</option>
                            <option value="8">Invite Inviter (User Object)</option>
                            <option value="9">Invite Maximum Age (Seconds)</option>
                            <option value="10">Invite Maximum Uses (Seconds)</option>
                            <option value="11">Invite Server Member Count</option>
                            <option value="12">Invite Server Online Member Count</option>
                            <option value="13">Is Invite Temporary?</option>
                            <option value="14">Invite Server Text Channel Count</option>
                            <option value="15">Invite URL</option>
                            <option value="16">Invite Uses</option>
                            <option value="17">Invite Server Voice Channel Count</option>
                        \`);
                    } else if(value == "user") {
                        $("#Information").html(\`
                            <option value="1" selected>User Avatar ID</option>
                            <option value="2">User Avatar URL</option>
                            <option value="3">Is User A Bot?</option>
                            <option value="4">User Created At</option>
                            <option value="5">User Created At (Timestamp)</option>
                            <option value="6">User Default Avatar URL</option>
                            <option value="7">User Discriminator</option>
                            <option value="8">User Display Avatar URL</option>
                            <option value="9">User DM Channel Object</option>
                            <option value="10">User ID</option>
                            <option value="11">User Last Message Object</option>
                            <option value="12">User Last Message ID</option>
                            <option value="13">User Presence Object</option>
                            <option value="14">User Tag</option>
                            <option value="15">User Username</option>
                        \`);
                    }
                }
            </script>
        `
    },

    code: function(cache) {
        const data = cache.blocks[cache.index];
        const ObjectType = data.ObjectType;
        const VariableName = this.analyzeString(data.VariableName, cache);
        const Information = parseInt(data.Information);
        const VariableName2 = this.analyzeString(data.VariableName2, cache);

        const VariableValue = this.getVariableValue(VariableName, cache);

        let result = "";
        if(ObjectType == "bot") {
            switch(Information) {
                case 1:
                    result = this.client.broadcasts.array();
                    break;
                case 2:
                    result = this.client.browser;
                    break;
                case 3:
                    result = this.client.channels.array();
                    break;
                case 4:
                    result = this.client.emojis.array();
                    break;
                case 5:
                    result = this.client.guilds.array();
                    break;
                case 6:
                    result = this.client.ping;
                    break;
                case 7:
                    result = this.client.pings.array();
                    break;
                case 8:
                    result = this.client.readyAt;
                    break;
                case 9:
                    result = this.client.readyTimestamp;
                    break;
                case 10:
                    switch(this.client.status) {
                        case 0:
                            result = "Ready";
                            break;
                        case 1:
                            result = "Connecting";
                            break;
                        case 2:
                            result = "Reconnecting";
                            break;
                        case 3:
                            result = "Idle";
                            break;
                        case 4:
                            result = "Nearly";
                            break;
                        case 5:
                            result = "Disconnected";
                            break;
                    }
                    break;
                case 11:
                    result = this.client.token;
                    break;
                case 12:
                    result = this.client.uptime;
                    break;
                case 13:
                    result = this.client.user;
                    break;
                case 14:
                    result = this.client.users.array();
                    break;
                case 15:
                    result = this.client.voiceConnections.array();
                    break;
            }
        } else if(ObjectType == "server") {
            switch(Information) {
                case 1:
                    result = VariableValue.afkChannel;
                    break;
                case 2:
                    result = VariableValue.afkChannelID;
                    break;
                case 3:
                    result = VariableValue.afkTimeout;
                    break;
                case 4:
                    result = VariableValue.applicationID;
                    break;
                case 5:
                    result = VariableValue.available;
                    break;
                case 6:
                    result = VariableValue.channels.array();
                    break;
                case 7:
                    result = VariableValue.createdAt;
                    break;
                case 8:
                    result = VariableValue.createdTimestamp;
                    break;
                case 9:
                    switch(VariableValue.defaultMessageNotifications) {
                        case "ALL":
                            result = "All Messages";
                            break;
                        case "MENTIONS":
                            result = "Only Mentions";
                            break;
                    }
                    break;
                case 10:
                    result = VariableValue.defaultRole;
                    break;
                case 11:
                    result = VariableValue.deleted;
                    break;
                case 12:
                    result = VariableValue.embedEnabled;
                    break;
                case 13:
                    result = VariableValue.emojis.array();
                    break;
                case 14:
                    switch(VariableValue.explicitContentFilter) {
                        case 0:
                            result = "Disabled";
                            break;
                        case 1:
                            result = "No Role";
                            break;
                        case 2:
                            result = "All Members";
                            break;
                    }
                    break;
                case 15:
                    result = VariableValue.icon;
                    break;
                case 16:
                    result = VariableValue.iconURL;
                    break;
                case 17:
                    result = VariableValue.id;
                    break;
                case 18:
                    result = VariableValue.joinedAt;
                    break;
                case 19:
                    result = VariableValue.joinedTimestamp;
                    break;
                case 20:
                    result = VariableValue.large;
                    break;
                case 21:
                    result = VariableValue.me;
                    break;
                case 22:
                    result = VariableValue.memberCount;
                    break;
                case 23:
                    result = VariableValue.members.array();
                    break;
                case 24:
                    switch(VariableValue.mfaLevel) {
                        case 0:
                            result = false;
                            break;
                        case 1:
                            result = true;
                            break;
                    }
                    break;
                case 25:
                    result = VariableValue.name;
                    break;
                case 26:
                    result = VariableValue.nameAcronym;
                    break;
                case 27:
                    result = VariableValue.owner;
                    break;
                case 28:
                    result = VariableValue.ownerID;
                    break;
                case 29:
                    result = VariableValue.presences.array();
                    break;
                case 30:
                    switch(VariableValue.region) {
                        case "amsterdam":
                            result = "Amsterdam";
                            break;
                        case "brazil":
                            result = "Brazil";
                            break;
                        case "eu_central":
                            result = "EU Central";
                            break;
                        case "eu_west":
                            result = "EU West";
                            break;
                        case "frankfurt":
                            result = "Frankfurt";
                            break;
                        case "hongkong":
                            result = "Hong Kong";
                            break;
                        case "india":
                            result = "India";
                            break;
                        case "japan":
                            result = "Japan";
                            break;
                        case "london":
                            result = "London";
                            break;
                        case "russia":
                            result = "Russia";
                            break;
                        case "singapore":
                            result = "Singapore";
                            break;
                        case "southafrica":
                            result = "South Africa";
                            break;
                        case "sydney":
                            result = "Sydney";
                            break;
                        case "us_central":
                            result = "US Central";
                            break;
                        case "us_east":
                            result = "US East";
                            break;
                        case "us_south":
                            result = "US South";
                            break;
                        case "us_west":
                            result = "US West";
                            break;
                        case "vip_amsterdam":
                            result = "Amsterdam VIP";
                            break;
                        case "vip_us_east":
                            result = "US East VIP";
                            break;
                        case "vip_us_west":
                            result = "US West VIP";
                            break;
                    }
                    break;
                case 31:
                    result = VariableValue.roles.array();
                    break;
                case 32:
                    result = VariableValue.splash;
                    break;
                case 33:
                    result = VariableValue.splashURL;
                    break;
                case 34:
                    result = VariableValue.systemChannel;
                    break;
                case 35:
                    result = VariableValue.systemChannelID;
                    break;
                case 36:
                    switch(VariableValue.verificationLevel) {
                        case 0:
                            result = "None";
                            break;
                        case 1:
                            result = "Low";
                            break;
                        case 2:
                            result = "Medium";
                            break;
                        case 3:
                            result = "High";
                            break;
                        case 4:
                            result = "Extreme";
                            break;
                    }
                    break;
                case 37:
                    result = VariableValue.verified;
                    break;
                case 38:
                    result = VariableValue.voiceConnection;
                    break;
                case 39:
                    VariableValue.fetchBans(true).then(bans => {
                        this.createVariable(bans.array(), VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
                case 40:
                    VariableValue.fetchInvites().then(invites => {
                        this.createVariable(invites.array(), VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
                case 41:
                    VariableValue.fetchVanityCode().then(code => {
                        this.createVariable(`https://discord.gg/${code}`, VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
                case 42:
                    VariableValue.fetchWebhooks().then(webhooks => {
                        this.createVariable(webhooks.array(), VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
            }
        } else if(ObjectType == "role") {
            switch(Information) {
                case 1:
                    result = VariableValue.calculatedPosition;
                    break;
                case 2:
                    result = VariableValue.color;
                    break;
                case 3:
                    result = VariableValue.createdAt;
                    break;
                case 4:
                    result = VariableValue.createdTimestamp;
                    break;
                case 5:
                    result = VariableValue.deleted;
                    break;
                case 6:
                    result = VariableValue.editable;
                    break;
                case 7:
                    result = VariableValue.guild;
                    break;
                case 8:
                    result = VariableValue.hexColor;
                    break;
                case 9:
                    result = VariableValue.hoist;
                    break;
                case 10:
                    result = VariableValue.id;
                    break;
                case 11:
                    result = VariableValue.managed;
                    break;
                case 12:
                    result = VariableValue.members.array();
                    break;
                case 13:
                    result = VariableValue.mentionable;
                    break;
                case 14:
                    result = VariableValue.name;
                    break;
                case 15:
                    result = VariableValue.permissions;
                    break;
                case 16:
                    result = VariableValue.position;
                    break;
                case 17:
                    result = VariableValue.serialize();
                    break;
            }
        } else if(ObjectType == "emoji") {
            switch(Information) {
                case 1:
                    result = VariableValue.animated;
                    break;
                case 2:
                    result = VariableValue.createdAt;
                    break;
                case 3:
                    result = VariableValue.createdTimestamp;
                    break;
                case 4:
                    result = VariableValue.deletable;
                    break;
                case 5:
                    result = VariableValue.deleted;
                    break;
                case 6:
                    result = VariableValue.guild;
                    break;
                case 7:
                    result = VariableValue.id;
                    break;
                case 8:
                    result = VariableValue.identifier;
                    break;
                case 9:
                    result = VariableValue.managed;
                    break;
                case 10:
                    result = VariableValue.name;
                    break;
                case 11:
                    result = VariableValue.requiresColons;
                    break;
                case 12:
                    result = VariableValue.roles.array();
                    break;
                case 13:
                    result = VariableValue.url;
                    break;
                case 14:
                    VariableValue.fetchAuthor().then(user => {
                        this.createVariable(user, VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
            }
        } else if(ObjectType == "member") {
            switch(Information) {
                case 1:
                    result = VariableValue.bannable;
                    break;
                case 2:
                    result = VariableValue.colorRole;
                    break;
                case 3:
                    result = VariableValue.deaf;
                    break;
                case 4:
                    result = VariableValue.deleted;
                    break;
                case 5:
                    result = VariableValue.displayColor;
                    break;
                case 6:
                    result = VariableValue.displayHexColor;
                    break;
                case 7:
                    result = VariableValue.displayName;
                    break;
                case 8:
                    result = VariableValue.guild;
                    break;
                case 9:
                    result = VariableValue.highestRole;
                    break;
                case 10:
                    result = VariableValue.hoistRole;
                    break;
                case 11:
                    result = VariableValue.id;
                    break;
                case 12:
                    result = VariableValue.joinedAt;
                    break;
                case 13:
                    result = VariableValue.joinedTimestamp;
                    break;
                case 14:
                    result = VariableValue.kickable;
                    break;
                case 15:
                    result = VariableValue.lastMessage;
                    break;
                case 16:
                    result = VariableValue.lastMessageID;
                    break;
                case 17:
                    result = VariableValue.manageable;
                    break;
                case 18:
                    result = VariableValue.mute;
                    break;
                case 19:
                    result = VariableValue.nickname;
                    break;
                case 20:
                    result = VariableValue.permissions;
                    break;
                case 21:
                    result = VariableValue.presence;
                    break;
                case 22:
                    result = VariableValue.roles.array();
                    break;
                case 23:
                    result = VariableValue.selfDeaf;
                    break;
                case 24:
                    result = VariableValue.selfMute;
                    break;
                case 25:
                    result = VariableValue.serverDeaf;
                    break;
                case 26:
                    result = VariableValue.serverMute;
                    break;
                case 27:
                    result = VariableValue.speaking;
                    break;
                case 28:
                    result = VariableValue.user;
                    break;
                case 29:
                    result = VariableValue.voiceChannel;
                    break;
                case 30:
                    result = VariableValue.voiceChannelID;
                    break;
                case 31:
                    result = VariableValue.voiceSessionID;
                    break;
            }
        } else if(ObjectType == "channel") {
            switch(Information) {
                case 1:
                    result = VariableValue.calculatedPosition;
                    break;
                case 2:
                    result = VariableValue.createdAt;
                    break;
                case 3:
                    result = VariableValue.createdTimestamp;
                    break;
                case 4:
                    result = VariableValue.deletable;
                    break;
                case 5:
                    result = VariableValue.deleted;
                    break;
                case 6:
                    result = VariableValue.guild;
                    break;
                case 7:
                    result = VariableValue.id;
                    break;
                case 8:
                    result = VariableValue.manageable;
                    break;
                case 9:
                    result = VariableValue.name;
                    break;
                case 10:
                    result = VariableValue.parent;
                    break;
                case 11:
                    result = VariableValue.parentID;
                    break;
                case 12:
                    result = VariableValue.permissionOverwrites;
                    break;
                case 13:
                    result = VariableValue.position;
                    break;
                case 14:
                    switch(VariableValue.type) {
                        case "dm":
                            result = "DM Channel";
                            break;
                        case "group":
                            result = "Group DM Channel";
                            break;
                        case "text":
                            result = "Text Channel";
                            break;
                        case "voice":
                            result = "Voice Channel";
                            break;
                        case "category":
                            result = "Category Channel";
                            break;
                        case "news":
                            result = "News Channel";
                            break;
                        case "store":
                            result = "Store Channel";
                            break;
                    }
                    break;
                case 15:
                    VariableValue.fetchInvites().then(invites => {
                        this.createVariable(invites.array(), VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
                case 16:
                    result = VariableValue.children.array();
                    break;
                case 17:
                    result = VariableValue.lastMessage;
                    break;
                case 18:
                    result = VariableValue.lastMessageID;
                    break;
                case 19:
                    result = VariableValue.lastPinAt;
                    break;
                case 20:
                    result = VariableValue.lastPinTimestamp;
                    break;
                case 21:
                    result = VariableValue.members.array();
                    break;
                case 22:
                    result = VariableValue.messages.array();
                    break;
                case 23:
                    result = VariableValue.nsfw;
                    break;
                case 24:
                    result = VariableValue.rateLimitPerUser;
                    break;
                case 25:
                    result = VariableValue.topic;
                    break;
                case 26:
                    result = VariableValue.typing;
                    break;
                case 27:
                    result = VariableValue.typingCount;
                    break;
                case 28:
                    VariableValue.fetchPinnedMessages().then(messages => {
                        this.createVariable(messages.array(), VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
                case 29:
                    VariableValue.fetchWebhooks().then(webhooks => {
                        this.createVariable(webhooks.array(), VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
                case 30:
                    result = VariableValue.bitrate;
                    break;
                case 31:
                    result = VariableValue.connection;
                    break;
                case 32:
                    result = VariableValue.full;
                    break;
                case 33:
                    result = VariableValue.joinable;
                    break;
                case 34:
                    result = VariableValue.members.array();
                    break;
                case 35:
                    result = VariableValue.speakable;
                    break;
                case 36:
                    result = VariableValue.userLimit;
                    break;
                case 37:
                    result = VariableValue.createdAt;
                    break;
                case 38:
                    result = VariableValue.createdTimestamp;
                    break;
                case 39:
                    result = VariableValue.deleted;
                    break;
                case 40:
                    result = VariableValue.id;
                    break;
                case 41:
                    result = VariableValue.lastMessage;
                    break;
                case 42:
                    result = VariableValue.lastMessageID;
                    break;
                case 43:
                    result = VariableValue.lastPinAt;
                    break;
                case 44:
                    result = VariableValue.lastPinTimestamp;
                    break;
                case 45:
                    result = VariableValue.recipient;
                    break;
                case 46:
                    result = VariableValue.messages.array();
                    break;
                case 47:
                    result = VariableValue.typing;
                    break;
                case 48:
                    result = VariableValue.typingCount;
                    break;
                case 49:
                    VariableValue.fetchPinnedMessages().then(messages => {
                        this.createVariable(messages.array(), VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
            }
        } else if(ObjectType == "message") {
            switch(Information) {
                case 1:
                    result = VariableValue.attachments.array();
                    break;
                case 2:
                    result = VariableValue.author;
                    break;
                case 3:
                    result = VariableValue.channel;
                    break;
                case 4:
                    result = VariableValue.cleanContent;
                    break;
                case 5:
                    result = VariableValue.content;
                    break;
                case 6:
                    result = VariableValue.createdAt;
                    break;
                case 7:
                    result = VariableValue.createdTimestamp;
                    break;
                case 8:
                    result = VariableValue.deletable;
                    break;
                case 9:
                    result = VariableValue.deleted;
                    break;
                case 10:
                    result = VariableValue.editable;
                    break;
                case 11:
                    result = VariableValue.editedAt;
                    break;
                case 12:
                    result = VariableValue.editedTimestamp;
                    break;
                case 13:
                    result = VariableValue.edits.array();
                    break;
                case 14:
                    result = VariableValue.embeds.array();
                    break;
                case 15:
                    result = VariableValue.guild;
                    break;
                case 16:
                    result = VariableValue.hit;
                    break;
                case 17:
                    result = VariableValue.id;
                    break;
                case 18:
                    result = VariableValue.member;
                    break;
                case 19:
                    result = VariableValue.mentions;
                    break;
                case 20:
                    result = VariableValue.nonce;
                    break;
                case 21:
                    result = VariableValue.pinnable;
                    break;
                case 22:
                    result = VariableValue.pinned;
                    break;
                case 23:
                    result = VariableValue.reactions.array();
                    break;
                case 24:
                    result = VariableValue.system;
                    break;
                case 25:
                    result = VariableValue.tts;
                    break;
                case 26:
                    result = VariableValue.type;
                    break;
                case 27:
                    result = VariableValue.url;
                    break;
                case 28:
                    VariableValue.fetchWebhook().then(webhook => {
                        this.createVariable(webhook.array(), VariableName2, cache);
                        this.nextBlock(cache);
                        return;
                    });
                case 29:
                    result = VariableValue.webhookID;
                    break;
            }
        } else if(ObjectType == "invite") {
            switch(Information) {
                case 1:
                    result = VariableValue.channel;
                    break;
                case 2:
                    result = VariableValue.code;
                    break;
                case 3:
                    result = VariableValue.createdAt;
                    break;
                case 4:
                    result = VariableValue.createdTimestamp;
                    break;
                case 5:
                    result = VariableValue.expiresAt;
                    break;
                case 6:
                    result = VariableValue.expiresTimestamp;
                    break;
                case 7:
                    result = VariableValue.guild;
                    break;
                case 8:
                    result = VariableValue.inviter;
                    break;
                case 9:
                    result = VariableValue.maxAge;
                    break;
                case 10:
                    result = VariableValue.maxUses;
                    break;
                case 11:
                    result = VariableValue.memberCount;
                    break;
                case 12:
                    result = VariableValue.presenceCount;
                    break;
                case 13:
                    result = VariableValue.temporary;
                    break;
                case 14:
                    result = VariableValue.textChannelCount;
                    break;
                case 15:
                    result = VariableValue.url;
                    break;
                case 16:
                    result = VariableValue.uses;
                    break;
                case 17:
                    result = VariableValue.voiceChannelCount;
                    break;
            }
        } else if(ObjectType == "user") {
            switch(Information) {
                case 1:
                    result = VariableValue.avatar;
                    break;
                case 2:
                    result = VariableValue.avatarURL;
                    break;
                case 3:
                    result = VariableValue.bot;
                    break;
                case 4:
                    result = VariableValue.createdAt;
                    break;
                case 5:
                    result = VariableValue.createdTimestamp;
                    break;
                case 6:
                    result = VariableValue.defaultAvatarURL;
                    break;
                case 7:
                    result = VariableValue.discriminator;
                    break;
                case 8:
                    result = VariableValue.displayAvatarURL;
                    break;
                case 9:
                    result = VariableValue.dmChannel;
                    break;
                case 10:
                    result = VariableValue.id;
                    break;
                case 11:
                    result = VariableValue.lastMessage;
                    break;
                case 12:
                    result = VariableValue.lastMessageID;
                    break;
                case 13:
                    result = VariableValue.presence;
                    break;
                case 14:
                    result = VariableValue.tag;
                    break;
                case 15:
                    result = VariableValue.username;
                    break;
            }
        }

        this.createVariable(result, VariableName2, cache);

        this.nextBlock(cache);
    }
};