let LoginBox = function (name) {
  this.instance = null;
};
LoginBox.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new LoginBox(name);
  }
  return this.instance;
};
