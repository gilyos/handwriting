
var config =
{
    apiKey: "AIzaSyD6rORknvqkyGddzhuddjPbbpw7yZAYAQQ",
    authDomain: "handwritingdetecting.firebaseapp.com",
    databaseURL: "https://handwritingdetecting.firebaseio.com/",
    storageBucket: "handwritingdetecting.appspot.com",

    csvUrlTemp: function (id) {
        return 'https://spreadsheets.google.com/feeds/list/{{id}}/od6/public/values?alt=json'.replace(/\{\{id\}\}/,id)
    },
    imageUrlTemp: 'https://drive.google.com/uc?export=view&id={{id}}',
    en_imagesListKey: "1JH-1eOr9k-AR2kaXamtge1lhzZGDQ4j7yOA1M_PARPY",
    heb_imagesListKey: "1hFDAw3--OmIoN7QRiqmfb8px3lj9_E83B_i6Bkdy1iY"
};

window.questionIndex = 0;


/*
firebase.initializeApp(config);
storage = firebase.storage();
storageRef = storage.ref();



window.getFireBaseUrl = function (imageName, numberQuestions) {
    var lang = (imageName.match(/e\.jpg/) != null) ? 'en' : 'heb';
    
    var tangRef = storageRef.child('imgs/' + lang + '/' + imageName);
    firebase.auth().signInAnonymously().then(function() {
        // Once the sign in completed, we get the download URL of the image
        tangRef.getDownloadURL().then(function(url)                             {
          // Once we have the download URL, we set it to our img element
          console.error(imageName + '--' + url);
          app.$store.dispatch('setQuestionData', {
              imgName : imageName,
              imgUrl : url,
              userAnswer : null,
              imageLoad: new Image()
          });
          app.$store.getters.userAnswersData[questionIndex].imageLoad.src = url;
          app.$store.getters.userAnswersData[questionIndex].imageLoad.onload = function(){
            questionIndex++
            debugger;
            if (questionIndex == numberQuestions) {
                app.$store.dispatch('setImagesLoadedStatus', true);
            }

        };
        }).catch(function(error) {
          // If anything goes wrong while getting the download URL, log the error
          console.error(error);
        });
      });
}
*/

window.getRandomImages = function (numberQuestions) {
    var numberThatAlreadyAppears = []
    var randomImages = [];
    numberQuestions = (numberQuestions > window.imagesData.length) ? window.imagesData.length : numberQuestions;
    while (numberQuestions > 0) {
        var randNumber = Math.floor(Math.random() * window.imagesData.length);
        if (numberThatAlreadyAppears.indexOf(randNumber) == -1) {
            numberThatAlreadyAppears.push(randNumber);
            //var imageLang = (window.imagesNames[randNumber].match(/e\.jpg/) != null) ? 'en' : 'heb';
            //if  (imageLang == lang) {
                //randomImages.push(window.imagesData[randNumber])
                //debugger;
                var imageName = window.imagesData[randNumber].gsx$name.$t;
                var fileKey = window.imagesData[randNumber].gsx$link.$t.replace(/(https\:\/\/drive\.google\.com\/file\/d\/|\/view\?usp\=drivesdk)/g,'');
                var url = config.imageUrlTemp.replace(/\{\{id\}\}/,fileKey)
                var correctAnswer;
                if (app.$store.getters.getTypeSelection == 1) {
                    correctAnswer = imageName.match(/\_M/) != null ? 'M' : 'F'
                } else {
                    correctAnswer = imageName.match(/\_L/) != null ? 'L' : 'R'
                }
                debugger;
                app.$store.dispatch('setQuestionData', {
                    type: app.$store.getters.getTypeSelection,
                    imgName : imageName,
                    imgUrl : url,
                    correctAnswer: correctAnswer,
                    userAnswer : null,
                    imageLoad: new Image()
                });
                app.$store.getters.userAnswersData[questionIndex].imageLoad.src = url;
                app.$store.getters.userAnswersData[questionIndex].imageLoad.onload = function(){
                    //      app.$store.dispatch('setImagesLoadedStatus', true);
                };
              questionIndex++
              numberQuestions--;
            //}
        }
    }   
    return randomImages;
}

window.getAllListQuestions = function (lang, number, callback) {
    var key = config[lang + '_imagesListKey'];
    app.$http.get(config.csvUrlTemp(key)).then(response => {
        imagesData = response.body.feed.entry;
        var randQuestions = getRandomImages(number);
        if (typeof callback == "function") {
            callback();
        }
      }, response => {
        // error callback
      })
}

/*
window.buildUserQuestions = function (lang, numberQuestions) {
    var randQuestions = getRandomImages(lang, numberQuestions)
    for (question in randQuestions) {
        getFireBaseUrl(randQuestions[question], numberQuestions);
    }
}
*/

window.imagesData = null;



