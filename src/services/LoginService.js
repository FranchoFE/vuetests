const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const LoginService = {
  async doLogin(name, password) {
    console.log("doLogin", name, password);
    await delay(5000);
    console.log("doLogin2", name, password);
    return true;
  },
};

module.exports = LoginService;
