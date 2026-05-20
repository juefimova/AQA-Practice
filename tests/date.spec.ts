import {expect, test} from "@playwright/test";
import {getFormattedDate} from "../utils/dateHelper";


test("Date check", async () => {
    const date = getFormattedDate();
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    expect(date).toMatch(dateRegex);

})