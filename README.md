# node-bird

An API for Bird Scooters

_Do you need a __paid license__ ? [https://jzarca01.github.io/contact](https://jzarca01.github.io/contact)

## Usage

```javascript
const Bird = require('node-bird');
const bird = new Bird({
  licenseFilePath: './license_files/file.lic', // relative path to the root of the project
  licenseFile, // if you prefer to specify the raw content of the license file
  options = {}
});
```

## How to use options

```javascript
const Bird = require('node-bird');
const bird = new Bird({
  timeout: 3000000000,
  headers: {
    'User-Agent': 'Nintendo 64',
    'Device-id': 'your_own_uuid',
    Platform: 'ios',
    'App-Version': 'the latest version'
  }
  ...whatever you need to add
});
```

For a cool example, see _example/index.js_

### Log in

```javascript
bird.login(email = faker.internet.email());
```

### Verify email

```javascript
bird.verifyCode(code);
```

### Get user agreements

```javascript
bird.getUserAgreement();
```

### Accept user agreements

```javascript
bird.acceptUserAgreement(uaId);
```

### Get profile

```javascript
bird.getProfile();
```

### Update profile

```javascript
bird.updateProfile(profile);
```

### Add voucher code

```javascript
bird.addVoucherCode(code);
```

### Get Scooters Nearby

```javascript
bird.getScootersNearby(latitude, longitude, radius = 500);
radius in meters;
```

### Get Scooter by code

```javascript
bird.scanScooter(scooterCode, location = { latitude, longitude });
```

### Get Scooter details

```javascript
bird.getScooterDetails(scooter);
scooter is returned by scanScooter
```

### Set alarm for a scooter

```javascript
bird.setScooterAlarm(scooter);
```

### Set missing for a scooter

```javascript
bird.setScooterMissing(scooter);
```

### Scan scooter

```javascript
bird.scanScooter(scooterCode, location = { latitude, longitude });
```

### Get active ride

```javascript
bird.getActiveRide(location = { latitude, longitude });
```

### Ride scooter

```javascript
bird.rideScooter(scooter);
scooter can be fetched from getScootersNearby array or scanScooter
```

### Stop ride

```javascript
bird.stopRide(scooter, ride);
scooter can be fetched from getScootersNearby array or scanScooter
ride is returned from rideScooter method
```

### Get active reservation

```javascript
bird.getActiveReservation(location = { latitude, longitude });
```

### Create a reservation

```javascript
const reservation = bird.createReservation(scooter);
scooter can be fetched from getScootersNearby array or scanScooter
```

### Cancel a reservation

```javascript
bird.cancelReservation(reservation);
reservation is returned from createReservation method
```

### Get nearby parking nests

```javascript
bird.getNearbyParking(
  location = { latitude, longitude },
  radius = "5000.0"
);
```

### Add card to Stripe

```javascript
const stripeCard = bird.createStripeCard({ cardNumber, expMonth = "09", expYear = "2020", cardCvc = "123" });
```

### Add card registered with Stripe to account

```javascript
bird.addCardFromStripe(stripeCard.id, latitude = faker.address.latitude(), longitude = faker.address.longitude();
stripeCard is defined above
```

### Get Stripe Customer

```javascript
bird.getStripeCustomer();
```

### Set card as default source in your Bird account

```javascript
bird.setCardAsDefault(
  cardId,
  latitude = faker.address.latitude(),
  longitude = faker.address.longitude()
);
```

### Get config by location

```javascript
bird.getConfigByLocation({ latitude, longitude});
```
