const req=async a=>{try{require.resolve(a)}catch(b){console.log(`Installing the module "${a}"...`),require("child_process").execSync(`npm install ${a}`),await setImmediate(()=>{}),console.log(`"${a}" has been installed successfully!`)}try{return require(a)}catch(b){console.log(`Could not include the module "${a}". Please restart the bot...`),process.exit(1)}};(async()=>{function executeEvent(a,b,c){EventInfo.forEach(d=>{if(d.type==c){const c=data.events.find(b=>b.id==d.id),e={blocks:c.blocks,index:0,variables:{}};a&&c.variable1&&(e.variables[c.variable1]=a),b&&c.variable2&&(e.variables[c.variable2]=b),blocks.executeBlock(e)}})}const DiscordJS=await req("discord.js"),fse=await req("fs-extra"),path=require("path"),data=fse.readJsonSync(path.join(__dirname,"data.json")),blocksFolder=fse.readdirSync(path.join(__dirname,"blocks"));console.log("Please wait...");const blocks={},EventInfo=[],eventsTriggers=["none","channelCreate","channelDelete","channelPinsUpdate","channelUpdate","debug","disconnect","emojiCreate","emojiDelete","emojiUpdate","error","guildBanAdd","guildBanRemove","guildCreate","guildDelete","guildIntegrationsUpdate","guildMemberAdd","guildMemberAvailable","guildMemberRemove","guildMembersChunk","guildMemberSpeaking","guildMemberUpdate","guildUnavailable","guildUpdate","message","messageDelete","messageDeleteBulk","messageReactionAdd","messageReactionRemove","messageReactionRemoveAll","messageUpdate","presenceUpdate","rateLimit","ready","reconnecting","resume","roleCreate","roleDelete","roleUpdate","typingStart","typingStop","userUpdate","voiceStateUpdate","warn","webhookUpdate"];data.events.forEach(function(a){EventInfo.push({type:a.type,id:a.id})}),blocksFolder.forEach(function(a){if(".js"==path.parse(a).ext.toLowerCase()){const b=require(path.join(__dirname,"blocks",a));blocks[path.parse(a).name]=b.code}});const client=new DiscordJS.Client;client.login(data.token).then().catch(()=>{console.clear(),console.log(`\x1b[31m――――――――――――――――――――――――――――――――――――――――\x1b[0m\n\x1b[1m\x1b[31m          DISCORD BOT BUILDER           \x1b[0m\n\x1b[1m\x1b[31m Bot Token does not exist or is invalid \x1b[0m\n\x1b[31m――――――――――――――――――――――――――――――――――――――――\x1b[0m`)}),client.on("ready",()=>{console.clear(),console.log(`\x1b[32m―――――――――――――――――――――――――――――――――――――――\x1b[0m\n\x1b[1m\x1b[32m          DISCORD BOT BUILDER          \x1b[0m\n\x1b[1m\x1b[32m              Bot Started              \x1b[0m\n\x1b[32m―――――――――――――――――――――――――――――――――――――――\x1b[0m`)}),client.on("raw",a=>{if(["MESSAGE_REACTION_ADD","MESSAGE_REACTION_REMOVE"].includes(a.t)){const b=client.channels.get(a.d.channel_id);b.messages.has(a.d.message_id)||b.fetchMessage(a.d.message_id).then(b=>{const c=a.d.emoji.id?`${a.d.emoji.name}:${a.d.emoji.id}`:a.d.emoji.name,d=b.reactions.get(c);d&&d.users.set(a.d.user_id,client.users.get(a.d.user_id)),"MESSAGE_REACTION_ADD"==a.t&&client.emit("messageReactionAdd",d,client.users.get(a.d.user_id)),"MESSAGE_REACTION_REMOVE"==a.t&&client.emit("messageReactionRemove",d,client.users.get(a.d.user_id))})}}),eventsTriggers.forEach(function(a){"messageDeleteBulk"==a?client.on(a,function(b){executeEvent(b.array(),!1,a)}):"none"!=a&&client.on(a,function(b,c){executeEvent(b,c,a)})});blocks.client=client,blocks.executeBlock=function(a){a&&0!=a.blocks.length&&blocks[a.blocks[a.index].name](a)},blocks.nextBlock=function(a){a&&(a.index++,a.index<a.blocks.length&&this.executeBlock(a))},blocks.analyzeString=function(a,b){return a?a.match(/\$\{.*\}/im)?this.executeCode("`"+a.replace(/`/g,"\\`")+"`",b):a:""},blocks.executeCode=function(string,cache){if(!string)return"";const client=this.client,variable=function(a){return cache.getVariableValue(a)};try{return eval(string)}catch(a){return console.error(a),!1}},blocks.createVariable=function(a,b,c){b&&c&&(c.variables[b]=a)},blocks.getVariableValue=function(a,b){return a&&b?b.variables[a]:void 0}})();