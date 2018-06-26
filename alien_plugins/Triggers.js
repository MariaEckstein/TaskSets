/* Variables for sending EEG triggers */


var startEvent = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 255
    }
});

var endEvent = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 254
    }
});

var missedTrial = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 60
    }
});

var startISI = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 65
    }
});

var startITI = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 70
    }
});

var startInstructions = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 80
    }
});

var endInstructions = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 90
    }
});

var feedbacktrue = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 100
    }

});
var startFeedback = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 150
    }
});

var feedbackfalse = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 200
    }
});

var responseJ = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 74
    }
});

var responseK = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 75
    }
});

var responseL = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 76
    }
});

var training0Trainingalien5 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 5
    }
});
var training0Trainingalien6 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 6
    }
});

var training0Trainingalien7 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 7
    }
});

var training0Trainingalien9 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 9
    }
});

var rainy1InitialLearningalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 1
    }
});

var rainy1InitialLearningalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 2
    }
});

var rainy1InitialLearningalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 3
    }
});

var rainy1InitialLearningalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 4
    }
});

var cold1InitialLearningalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 101
    }
});

var cold1InitialLearningalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 102
    }
});

var cold1InitialLearningalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 103
    }
});

var cold1InitialLearningalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 104
    }
});

var hot1InitialLearningalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 201
    }
});

var hot1InitialLearningalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 202
    }
});

var hot1InitialLearningalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 203
    }
});

var hot1InitialLearningalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 204
    }
});

var rainy_cloudy2CloudySeasonalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 11
    }
});

var rainy_cloudy2CloudySeasonalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 12
    }
});

var rainy_cloudy2CloudySeasonalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 13
    }
});

var rainy_cloudy2CloudySeasonalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 14
    }
});

var cold_cloudy2CloudySeasonalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 111
    }
});

var cold_cloudy2CloudySeasonalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 112
    }
});

var cold_cloudy2CloudySeasonalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 113
    }
});

var cold_cloudy2CloudySeasonalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 114
    }
});

var hot_cloudy2CloudySeasonalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 211
    }
});

var hot_cloudy2CloudySeasonalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 212
    }
});

var hot_cloudy2CloudySeasonalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 213
    }
});

var hot_cloudy2CloudySeasonalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 214
    }
});

var rainyrefresher2alien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 21
    }
});

var rainyrefresher2alien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 22
    }
});

var rainyrefresher2alien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 23
    }
});

var rainyrefresher2alien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 24
    }
});

var coldrefresher2alien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 121
    }
});

var coldrefresher2alien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 122
    }
});

var coldrefresher2alien3= new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 123
    }
});

var coldrefresher2alien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 124
    }
});

var hotrefresher2alien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 221
    }
});

var hotrefresher2alien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 222
    }
});

var hotrefresher2alien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 223
    }
});

var hotrefresher2alien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 224
    }
});



var rainyrefresher3alien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 31
    }
});

var rainyrefresher3alien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 32
    }
});

var rainyrefresher3alien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 33
    }
});

var rainyrefresher3alien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 34
    }
});

var coldrefresher3alien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 131
    }
});

var coldrefresher3alien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 132
    }
});

var coldrefresher3alien3= new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 133
    }
});

var coldrefresher3alien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 134
    }
});

var hotrefresher3alien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 231
    }
});

var hotrefresher3alien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 232
    }
});

var hotrefresher3alien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 233
    }
});

var hotrefresher3alien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 234
    }
});
















var rainyMixedalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 41
    }
});

var rainyMixedalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 42
    }
});

var rainyMixedalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 43
    }
});

var rainyMixedalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 44
    }
});

var coldMixedalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 141
    }
});

var coldMixedalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 142
    }
});

var coldMixedalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 143
    }
});

var coldMixedalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 144
    }
});

var hotMixedalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 241
    }
});

var hotMixedalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 242
    }
});

var hotMixedalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 243
    }
});

var hotMixedalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 244
    }
});

var rainbow5RainbowSeasonalien1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 51
    }
});

var rainbow5RainbowSeasonalien2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 52
    }
});

var rainbow5RainbowSeasonalien3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 53
    }
});

var rainbow5RainbowSeasonalien4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 54
    }
});




/*

    on_start: function(){
        document.dispatchEvent(startInstructions)
    }


    on_trial_finish: function(){
        document.dispatchEvent(endInstructions)
    }
 */