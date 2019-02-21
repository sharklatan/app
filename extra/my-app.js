// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});

 
$$('.alert-text-title').on('click', function () {
    myApp.alert('This app does not supports to your region.', 'SSH Beta');
});

var myPhotoBrowser = app.photoBrowser({
    zoom: 400,
    photos: ['path/to/image1.jpg', 'path/to/image2.jpg']
});   
myPhotoBrowser.open(); 

var photos = [
    {
        url: 'image1.jpg',
        caption: 'Caption 1'
    },
    // Video element with caption
    {
        html: '<video src="video1.mp4"></video>',
        caption: 'Video Caption'
    },
    // This one is embedded video without caption
    {
        html: '<iframe src="https://www.youtube.com/watch?v=v2rB0UrKhaA"></iframe>',
    },
    // This one will be also video without caption
    '<video src="video2.mp4"></video>'
];   

var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        {
            html: '<iframe src="https://www.youtube.com/watch?v=v2rB0UrKhaA" frameborder="0" allowfullscreen></iframe>',
            caption: 'Woodkid - Run Boy Run (Official HD Video)'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/2/',
            caption: 'Second Caption Text'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/3/',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-video').on('click', function () {
    myPhotoBrowserPopupDark.open();
});

var myPhotoBrowser = app.photoBrowser({
    zoom: 400,
    photos: ['path/to/image1.jpg', 'path/to/image2.jpg']
});   
myPhotoBrowser.open(); 