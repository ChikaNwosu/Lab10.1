let contacts = [
    { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
    { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" }
];

// Function to display contacts in the DOM
const displayContacts = () => {
    const contactsList = document.getElementById('contacts-list');
    contactsList.innerHTML = ''; // Clear the existing list
    contacts.forEach(contact => {
        contactsList.innerHTML += `<p>${contact.name} - ${contact.phone} - ${contact.email}</p>`;
    });
};

// Function to process a contact with a callback (simulates delay)
const processContact = (contact, callback) => {
    setTimeout(() => {
        callback(contact);
    }, 2000); // 2-second delay
};

// Function to add a new contact
const addContact = () => {
    let name = prompt("Enter contact name:");
    let phone = prompt("Enter contact phone:");
    let email = prompt("Enter contact email:");
    if (name && phone && email) {
        contacts.push({ name, phone, email });
        displayContacts(); // Update the display
    } else {
        alert("Please provide valid details.");
    }
};

// Recursive function to find a contact by name
const findContactByName = (name, index = 0) => {
    if (index >= contacts.length) return null;
    if (contacts[index].name.toLowerCase() === name.toLowerCase()) return contacts[index];
    return findContactByName(name, index + 1);
};

// Function to find a contact
const findContact = () => {
    let name = prompt("Enter the name of the contact to find:");
    if (name) {
        let contact = findContactByName(name);
        if (contact) {
            processContact(contact, (c) => {
                alert(`Found: ${c.name} - ${c.phone} - ${c.email}`);
            });
        } else {
            alert("Contact not found.");
        }
    }
};

// Function to update an existing contact's info
const updateContactInfo = () => {
    let name = prompt("Enter the name of the contact to update:");
    if (name) {
        let contact = findContactByName(name);
        if (contact) {
            let newPhone = prompt(`Enter new phone for ${contact.name} (current: ${contact.phone}):`);
            let newEmail = prompt(`Enter new email for ${contact.name} (current: ${contact.email}):`);
            if (newPhone) contact.phone = newPhone;
            if (newEmail) contact.email = newEmail;
            displayContacts(); // Update the display
            alert(`${contact.name}'s info has been updated.`);
        } else {
            alert("Contact not found.");
        }
    }
};

// Event listeners for buttons
document.getElementById('add-contact').addEventListener('click', addContact);
document.getElementById('find-contact').addEventListener('click', findContact);
document.getElementById('update-contact').addEventListener('click', updateContactInfo);

// Periodically log the number of contacts to the console
setInterval(() => {
    console.log(`Total Contacts: ${contacts.length}`);
}, 5000); // 5-second interval

// Change background color every 5 seconds
setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}, 5000); // 5-second interval

// Initial display of contacts
displayContacts();
