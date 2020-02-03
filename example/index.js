const Bird = require('../dist/'); // require('node-bird');
const bird = new Bird({
  licenseFilePath: './license_files/file.lic' // relative path to the root of the project
});
const prompt = require('prompt-async');

const MY_LOCATION = { latitude : '48.8760826', longitude : '2.3691194'};
const MY_CODE = '4YSU2';

async function init() {
  try {
    const user = await bird.login('your@email.com');
    prompt.start();
    const { verifyCode } = await prompt.get(['verifyCode']);
    await bird.verifyEmail(verifyCode);

    console.log('user', user);

    const MY_SCOOTER = await bird.scanScooter(MY_CODE, MY_LOCATION); // uses scooter CODE
    console.log('my scooter', MY_SCOOTER)

    if(!MY_SCOOTER.bird_id) {
      throw new Error("No bird_id")
    }

    const ride = await bird.rideScooter(MY_SCOOTER);
    console.log('ride', JSON.stringify(ride));

    if(!ride.id) {
      throw new Error("Cannot start ride")
    }

    await prompt.get(['finish']);

    setTimeout(async () => {
      const stop = await bird.stopRide(MY_SCOOTER, ride);
      console.log('stop', JSON.stringify(stop))
    }, 5000);
  } catch (err) {
    console.log(err);
  }
}

init();
