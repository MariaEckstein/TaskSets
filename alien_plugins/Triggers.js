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
        payload: 50
    }
});

var startITI = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 60
    }
});

var startInstructions = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 70
    }
});

var endInstructions = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 80
    }
});

var correctFeedback = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 100
    }
});

var incorrectFeedback = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 200
    }
});

var jKey = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 74
    }
});

var kKey = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 75
    }
});

var lKey = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 76
    }
});

var train5 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 5
    }
});
var train6 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 6
    }
});

var train7 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 7
    }
});

var train8 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 8
    }
});

var initialRainy1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 1
    }
});

var initialRainy2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 2
    }
});

var initialRainy3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 3
    }
});

var initialRainy4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 4
    }
});

var initialCold1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 101
    }
});

var initialCold2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 102
    }
});

var initialCold3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 103
    }
});

var initialCold4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 104
    }
});

var initialHot1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 201
    }
});

var initialHot2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 202
    }
});

var intialHot3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 203
    }
});

var intialHot4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 204
    }
});

var cloudyRainy1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 11
    }
});

var cloudyRainy2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 12
    }
});

var cloudyRainy3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 13
    }
});

var cloudyRainy4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 14
    }
});

var cloudyCold1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 111
    }
});

var cloudyCold2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 112
    }
});

var cloudyCold3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 113
    }
});

var cloudyCold4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 114
    }
});

var cloudyHot1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 211
    }
});

var cloudyHot2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 212
    }
});

var cloudyHot3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 213
    }
});

var cloudyHot4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 214
    }
});

var refresherRainy1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 21
    }
});

var refresherRainy2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 22
    }
});

var refresherRainy3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 23
    }
});

var refresherRainy4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 24
    }
});

var refresherCold1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 121
    }
});

var refresherCold2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 122
    }
});

var refresherCold3= new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 123
    }
});

var refresherCold4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 124
    }
});

var refresherHot1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 221
    }
});

var refresherHot2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 222
    }
});

var refresherHot3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 223
    }
});

var refresherHot4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 224
    }
});

var chaoticRainy1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 31
    }
});

var chaoticRainy2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 32
    }
});

var chaoticRainy3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 33
    }
});

var chaoticRainy4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 34
    }
});

var chaoticCold1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 131
    }
});

var chaoticCold2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 132
    }
});

var chaoticCold3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 133
    }
});

var chaoticCold4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 134
    }
});

var chaoticHot1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 231
    }
});

var chaoticHot2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 232
    }
});

var chaoticHot3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 233
    }
});

var chaoticHot4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 234
    }
});

var rainbow1 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 41
    }
});

var rainbow2 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 42
    }
});

var rainbow3 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 43
    }
});

var rainbow4 = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 44
    }
});
