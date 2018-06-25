/* Variables for sending EEG triggers */




var startEvent = new CustomEvent('jspsych', {
    detail:{
        target : 'parallel',
        action : 'trigger',
        payload: 255
    }
});