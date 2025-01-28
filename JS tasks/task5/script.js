const observable = (function() {
    let observers = []; 
    let state = ''; 

    return {
        subscribe: function(observer) {
            observers.push(observer);
        },

        unsubscribe: function(observer) {
            observers = observers.filter(obs => obs !== observer);
        },

        notify: function() {
            observers.forEach(observer => observer(state));
        },

        setState: function(newState) {
            state = newState;
            this.notify();
        }
    };
})();

const observer1 = function(state) {
    console.log('Observer 1: State changed to', state);
};

const observer2 = function(state) {
    console.log('Observer 2: State changed to', state);
};

observable.subscribe(observer1);
observable.subscribe(observer2);

observable.setState('JavaScript');

observable.unsubscribe(observer1);
observable.setState('Java');
