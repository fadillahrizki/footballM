var webPush = require('web-push');

const vapidKeys ={"publicKey":"BIA-8dRWRGu3eQ993XopsVpKR5ZogMu8RE0V9GzrIcOibbzMeJkJ_u-qDJKvG3X8drpGHl06jO4IxffmecsFDgQ","privateKey":"LdfgS70z7fi3WQMd6AKlbVxzR0PSBcHXd7C136Nw6Iw"}

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": " https://fcm.googleapis.com/fcm/send/fUD7Qqxyihc:APA91bHFa5m55QEgmpQIz5kzx8h_jrbivGpzIOEpyYvwzCbRU3P2MTe4U6Obpm4l-OzDTr8UW9KKEVbsb464uBjubbfpZ7vQrniwMdQ4wdoxDxIiTYg4l8i54XTVww5xotWbSNXPOu28",
    "keys": {
        "p256dh": "BFmP4sYP6mPb8by3zjEvfeGkddcZf3ao0elhJVK/ZRIeI5nfTsDQagdDSJ8mUaqHbMME8FpXeGAK3UzbxvriMrk=",
        "auth": "UF6+mznLkgcL2K0GFMzI2A=="
    }
};
var payload = 'Halo!! Kembali lagi dengan saya :)';
var options = {
    gcmAPIKey: '615953300937',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);