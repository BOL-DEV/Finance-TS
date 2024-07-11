var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var container = document.querySelector(".item-list");
console.log(toFrom, details, amount);
var invoice = /** @class */ (function () {
    function invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    invoice.prototype.format = function () {
        return " Mr ".concat(this.client, " owes me ").concat(this.amount, " for ").concat(this.details);
    };
    return invoice;
}());
var inv1 = new invoice("habeeb", "e-commerce web", 400);
console.log(inv1.format());
var payment = /** @class */ (function () {
    function payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    payment.prototype.format = function () {
        return " Mr ".concat(this.recipient, " is owed ").concat(this.amount, " for ").concat(this.details);
    };
    return payment;
}());
var pay1 = new payment("habeeb", "e-commerce web", 400);
console.log(pay1);
var listTemplate = /** @class */ (function () {
    function listTemplate(container) {
        this.container = container;
    }
    listTemplate.prototype.render = function (content, heading, pos) {
        var li = document.createElement("li");
        var h4 = document.createElement("h4");
        h4.textContent = heading;
        li.append(h4);
        var p = document.createElement("p");
        p.textContent = content.format();
        li.append(p);
        this.container.append(li);
    };
    return listTemplate;
}());
var lists = new listTemplate(container);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value);
    var doc;
    var value;
    value = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new (invoice.bind.apply(invoice, __spreadArray([void 0], value, false)))();
    }
    else {
        doc = new (payment.bind.apply(payment, __spreadArray([void 0], value, false)))();
    }
    lists.render(doc, type.value);
    console.log(doc);
});
// enum account {
//   savings,
//   current,
//   student,
//   teacher,
// }
// interface ope<B> {
//   name: string;
//   account: account;
//   class: string | number;
//   courses: B;
// }
// const person1: ope<object> = {
//   name: "quyum",
//   account: account.student,
//   class: "ss4",
//   courses: ["che112", "sdfgh555"],
// };
// console.log(person1);
