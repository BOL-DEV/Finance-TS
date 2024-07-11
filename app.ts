const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const container = document.querySelector(".item-list") as HTMLUListElement;
console.log(toFrom, details, amount);

interface HasFormatter {
  format(): string;
}

class invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return ` Mr ${this.client} owes me ${this.amount} for ${this.details}`;
  }
}

const inv1 = new invoice("habeeb", "e-commerce web", 400);
console.log(inv1.format());

class payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return ` Mr ${this.recipient} is owed ${this.amount} for ${this.details}`;
  }
}

const pay1 = new payment("habeeb", "e-commerce web", 400);
console.log(pay1);

class listTemplate {
  constructor(private container: HTMLUListElement) {}

  render(content: HasFormatter, heading: string, pos?: "start" | "end") {
    const li = document.createElement("li");

    const h4 = document.createElement("h4");
    h4.textContent = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.textContent = content.format();
    li.append(p);

    this.container.append(li);
  }
}

const lists = new listTemplate(container);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(type.value);
  let doc: HasFormatter;

  let value: [string, string, number];
  value = [toFrom.value, details.value, amount.valueAsNumber];

  if (type.value === "invoice") {
    doc = new invoice(...value);
  } else {
    doc = new payment(...value);
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
