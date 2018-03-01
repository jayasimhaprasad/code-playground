describe('DetoxText', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('valid username and password', async () => {
    await element(by.id("userName")).typeText('Jayasimha@gmail.com')
    await element(by.id("password")).typeText("servlets")
    await element(by.id("loginButton")).tap();
    await expect(element(by.id("result"))).toHaveLabel("Login Successful !");
    //await expect(element(by.id('username'))).toBeVisible();
  });
  
  it('invalid username and password', async () => {
    await element(by.id("userName")).tap();
    await element(by.id("userName")).typeText('Jayasimha@gmail.com')
    await element(by.id("password")).typeText("abc")
    await element(by.id("loginButton")).tap();
    await expect(element(by.id("result"))).toHaveLabel("Login Failed");
    //await expect(element(by.id('username'))).toBeVisible();
  });
  
  /*it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });
  
  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });*/
})