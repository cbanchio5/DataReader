"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const datePars = dateString.split('/').map((val) => {
        return parseInt(val);
    });
    return new Date(datePars[2], datePars[1] - 1, datePars[0]);
};
exports.dateStringToDate = dateStringToDate;
