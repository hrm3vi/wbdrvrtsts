export const waitForTextChange = (element, text, timeout) => {
    browser.waitUntil(
        () => element.getText() === text,
        {
            timeout: timeout,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );
};

export const waitAndClick = (element, timeout) => {
    element.waitForDisplayed({
        timeout: timeout,
        timeoutMsg: "Timed out waiting to click on link",
    });
    element.click();
};