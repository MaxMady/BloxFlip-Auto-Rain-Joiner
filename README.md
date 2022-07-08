# Toxic Rainer
## _Auto-BloxFlip Rain Joiner_


Toxic Rainer is a web-socket based background running program used to automatically join BloxFlip Rains

- Run 24/7 with no delay
- No hardware utilization, hence no heating up of PC.

## Features

- Custom Discord webhook logger
- Auto join/leave
- Trivia notifier
- Windows notification
- Super stealthy

## Why was this project made?
> The main goal behind creation of such a program was to provide free robux to people who can't afford it. [EzRain]() as well sells this, but at unfairingly overpriced, and therefore I wanted to contribute whatever I could!

## __Setup__

Setting up the program is super easy! Firstly, click the green colored button above and Click `Download ZIP`. Unzip the file and do as follow

<details>
<summary> Installing Node </summary>

- Download the latest version of NodeJS from [here](https://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi)

</details>
<details>
    <summary> Getting your BloxFlip Authentication </summary>

- Go to [Bloxflip](https://bloxflip.com) and then press `CTRL+SHIFT+I` or `F12` or just open Developer tools
- Navigate to `console` and enter the following code.

<details>

  <summary>Code</summary>
  
</details>

```js
localStorage.getItem('_DO_NOT_SHARE_BLOXFLIP_TOKEN')
```

</details>

<details>
<summary>Editing config.json</summary>

All the keys are required and is case sensitive.
| Key | Value |
| ------ | ------ |
| auth | Your BloxFlip Authentication, without ' |
| webhook | Discord webhook, starting with `https://` |
| win_notif | Enable/Disable notification [Windows only]. (Boolean) |
| product | Browser name. `chrome` or `firefox` [Case sensitive] |
| path | Path of your browser. Right click browser and click properties, copy path and add `\` before ever `\` Eg. |

</details>


<details>
<summary>Installing dependencies</summary> 

- Open `install.bat` and run it. 
- If success, no error should have been shown.
- Common error includes `npm not recognized`, which means that you haven't either installed or added to path. Refer [here](https://www.youtube.com/watch?v=qZQmCfkmbNA) to fix 

</details>

<details>
<summary>Running</summary>
    
- Open `run.bat` and wait for a rain.
- If any error occurs, you may contact me via Discord or Reddit!
    
</details>

## Contribute
**Wanna contribute for the development of BloxFlip Tools?**
> In the coming weeks, a paid version of <u>**BloxFLip Crash revealer**</u> would be released and the price would go as high as 35$ per month.
> You can simply avoid this by contributing for the development and earn a free life-time access to it!

## Support & Contact
- [Discord](https://discord.gg/zbgQYsyhAv)
- [Reddit](https://www.reddit.com/user/Dark_Melon23)
