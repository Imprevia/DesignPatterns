class ObserverList<T> {
  _observerList = [];

  add(obj: Observer<T>) {
    return this._observerList.push(obj);
  }

  size() {
    return this._observerList.length;
  }

  get(index: number) {
    if (index > -1 && index < this._observerList.length) {
      return this._observerList[index];
    }
  }

  indexOf(obj: Observer<T>, startIndex: number) {
    let i = startIndex || 0;
    while (i < this._observerList.length) {
      if (this._observerList[i] === obj) {
        return i;
      }
      i++;
    }
    return -1;
  }

  removeAt(index: number) {
    this._observerList.splice(index, 1);
  }

  remove(obj: Observer<T>) {
    this.removeAt(this.indexOf(obj, 0));
  }
}

export class Subject<T> {
  _observers = new ObserverList<T>();

  addObserver(observer: Observer<T>) {
    this._observers.add(observer);
  }

  removeObserver(observer: Observer<T>) {
    this._observers.remove(observer);
  }

  notify(context?: T) {
    const observerCount = this._observers.size();
    for (let i = 0; i < observerCount; i++) {
      this._observers.get(i).update(context);
    }
  }
}

export interface Observer<T> {
  update(context?: T);
}
