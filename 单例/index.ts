class LoginBox {
  public static instance: LoginBox;
  public static getInstance(name) {
    if (!this.instance) {
      this.instance = new LoginBox(name);
    }
    return this.instance;
  }

  private _name: string;
  constructor(name) {
    this._name = name;
  }
}
