import {test} from '../fixtures';

test("Successful Login", async({loginPage}) => {
    await loginPage.navigate();
    await loginPage.fillUsername('standard_user');
    await loginPage.fillPassword('secret_sauce');
    await loginPage.submit();
})