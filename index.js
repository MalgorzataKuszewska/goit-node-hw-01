const { Command } = require("commander");
const program = new Command();
const contacts = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(contacts.listContacts());
      break;

    case "get":
      console.log(contacts.getContactById(id));
      break;

    case "add":
      contacts.addContact(name, email, phone);
      console.log("Contact added successfully!");
      break;

    case "remove":
      contacts.removeContact(id);
      console.log("Contact removed successfully!");
      break;

    default:
      console.warn("Unknown action type!");
  }
}

invokeAction(argv);
