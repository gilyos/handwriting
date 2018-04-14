
var config =
{
    apiKey: "AIzaSyD6rORknvqkyGddzhuddjPbbpw7yZAYAQQ",
    authDomain: "handwritingdetecting.firebaseapp.com",
    databaseURL: "https://handwritingdetecting.firebaseio.com/",
    storageBucket: "handwritingdetecting.appspot.com",
};

firebase.initializeApp(config);
storage = firebase.storage();
storageRef = storage.ref();


window.questionIndex = 0;
window.getFireBaseUrl = function (imageName, numberQuestions) {
    var lang = (imageName.match(/e\.jpg/) != null) ? 'en' : 'heb';
    
    var tangRef = storageRef.child('imgs/' + lang + '/' + imageName);
    firebase.auth().signInAnonymously().then(function() {
        // Once the sign in completed, we get the download URL of the image
        tangRef.getDownloadURL().then(function(url)                             {
          // Once we have the download URL, we set it to our img element
          console.error(imageName + '--' + url);
          questionIndex++;
          if (questionIndex == numberQuestions) {
              debugger;
              app.$store.dispatch('setImagesLoadedStatus', true);
          }
          app.$store.dispatch('setQuestionData', {
              imgName : imageName,
              imgUrl : url,
              userAnswer : null
          });
        }).catch(function(error) {
          // If anything goes wrong while getting the download URL, log the error
          console.error(error);
        });
      });
}

window.getRandomImages = function (lang, numberQuestions) {
    var numberThatAlreadyAppears = []
    var randomImages = [];
    numberQuestions = (numberQuestions > window.imagesNames.length) ? window.imagesNames.length : numberQuestions;
    while (numberQuestions > 0) {
        var randNumber = Math.floor(Math.random() * window.imagesNames.length);
        if (numberThatAlreadyAppears.indexOf(randNumber) == -1) {
            numberThatAlreadyAppears.push(randNumber);
            var imageLang = (window.imagesNames[randNumber].match(/e\.jpg/) != null) ? 'en' : 'heb';
            if  (imageLang == lang) {
                randomImages.push(window.imagesNames[randNumber])
                numberQuestions--;
            }
        }
    }   
    return randomImages;
}

window.buildUserQuestions = function (lang, numberQuestions) {
    var randQuestions = getRandomImages(lang, numberQuestions)
    for (question in randQuestions) {
        getFireBaseUrl(randQuestions[question], numberQuestions);
    }
}

window.imagesNames = [
    "form_117h.jpg",
    "form_01e.jpg",
    "form_02h.jpg",
    "form_03e.jpg",
    "form_08e.jpg",
    "form_13h.jpg",
    "form_35e.jpg",
    "form_35h.jpg",
    "form_113h.jpg"
]

buildUserQuestions('heb',2)
