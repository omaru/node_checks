"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
const emailTemplate = `
 <div>
 <h1>Hi, {{name}} </h1>
 <p>Thank you for your order. {{orderId}}</p>
 </div>
`;
exports.emailTemplate = emailTemplate;
