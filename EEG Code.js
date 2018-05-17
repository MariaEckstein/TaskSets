/**
 * Created by lucywhitmore on 5/17/18.
 */



document.dispatchEvent(new CustomEvent('jspsych', {
    detail:{
        target:'parallel',
        action:'trigger',
        payload: 64         //only valid byte accepted (0-255)
    }
}));