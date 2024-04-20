console.log("Hello World !");
class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.maidenName = data.maidenName;
    this.email = data.email;
    this.phone = data.phone;
    this.age = data.age;
    this.gender = data.gender;
    this.username = data.username;
    this.password = data.password;
    this.birthDate = data.birthDate;
    this.bloodGroup = data.bloodGroup;
    this.height = data.height;
    this.weight = data.weight;
    this.eyeColor = data.eyeColor;
    this.macAddress = data.macAddress;
    this.university = data.university;
    this.ip = data.ip;
  }
  displayInfo() {
    console.log(data);
  }
}
async function getusers() {
  const data = await fetch("http://localhost:3000/users");
  const usersdata = await data.json();
  const users = [];
  for (const user of usersdata.users) {
    users.push(new User(user));
  }
  console.log(users);
  return new Promise((res, rej) => {
    res(users);
  });
}

async function getData() {
  const users = await getusers();
  const Table = document.createElement("table");
  const rowhead = document.createElement("thead");
  const row = document.createElement("tr");
  for (const column in users[0]) {
    console.log(column);
    const col = document.createElement("td");
    col.style.border = "1px crimson solid";
    col.style.fontSize = "2rem";
    col.innerHTML = column.toUpperCase();
    row.append(col);
    rowhead.append(row);
    Table.append(row);
  }
  for (const user of users) {
    const row = document.createElement("tr");
    for (const column in user) {
      if (Object.hasOwnProperty.call(user, column)) {
        const element = user[column];
        const col = document.createElement("td");
        col.style.border = "1px crimson solid";
        col.innerHTML = user[column];
        row.append(col);
      }
      Table.append(row);
    }
  }
  document.body.append(Table);
}
