class EventHandler {
  constructor(eventsNames = []) {
    this.events = {};
    if (Array.isArray(eventsNames)) {
      eventsNames.forEach((eventName) => (this.events[eventName] = []));
    } else {
      eventsNames[eventsNames] = [];
    }
  }

  addEvent(name) {
    this.events[name] = [];
  }

  removeEvent(name) {
    delete this.events[name];
  }

  on(name, callback) {
    if (this.events[name] == undefined) {
      this.events[name] = [];
    }
    this.events[name].push(callback);
  }

  trigger(name, props = []) {
    if (this.events[name] == undefined) {
      this.events[name] = [];
    }
    this.events[name].forEach((func) => func(...props));
  }
}
