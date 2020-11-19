function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.size = function () {
  return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
  var i = startIndex,
    pointer = -1;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      pointer = i;
    }
    i++;
  }

  return pointer;
};

ObserverList.prototype.removeAt = function (index) {
  if (index === 0) {
    this.observerList.shift();
  } else if (index === this.observerList.length - 1) {
    this.observerList.pop();
  }
};
ObserverList.prototype.remove = function (obj) {
  this.removeAt(this.indexOf(obj, 0));
};

function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function (observer) {
  this.observers.remove(observer);
};

Subject.prototype.notify = function (context) {
  const observerCount = this.observers.size();
  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
};

function Observer() {}

Observer.prototype.update = function (context) {};
