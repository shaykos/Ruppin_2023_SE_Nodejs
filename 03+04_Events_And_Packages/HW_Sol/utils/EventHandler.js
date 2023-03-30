const { EventEmitter } = require('node:events');

class EventHandler extends EventEmitter {

  instance = null;

  static CreateInstance() {
    if (!this.instance)
      this.instance = new EventHandler();

    return this.instance;
  }

  static CreateEvent(name, callback) {
    this.instance = EventHandler.CreateInstance();
    this.instance.on(name, callback);
  }

  static RunEvent(name, params = []) {
    this.instance = EventHandler.CreateInstance();

    this.instance.emit(name, params.join('\t'));
  }

}

module.exports = { EventHandler }