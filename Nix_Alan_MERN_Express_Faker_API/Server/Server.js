const express = require("express");
const app = express();
const faker = require("faker");
const port = 8000;

const createUser = () => {
  const id = faker.datatype.uuid();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const pnoneNumber = faker.phone.phoneNumber();
  const email = faker.internet.email();
  const password = faker.internet.password();
  return {
    firstName: firstName,
    id: id,
    firstName: firstName,
    lastName: lastName,
    poneNumber: pnoneNumber,
    email: email,
    password: password,
  };
};

const createCompany = () => {
  const id = faker.datatype.uuid();
  const companyName = faker.company.companyName();
  const companyStreet = faker.address.streetName();
  const companyCity = faker.address.city();
  const companyState = faker.address.stateAbbr();
  const companyZipCode = faker.address.zipCode();
  const companyCounty = faker.address.countryCode();
  const companyAddress = {
    companyStreet: companyStreet,
    companyCity: companyCity,
    companyState: companyState,
    companyZipCode: companyZipCode,
    companyCounty: companyCounty,
  };
  return {
    companyId: id,
    companyName: companyName,
    companyAddress: companyAddress,
  };
};

app.get("/api/users/new", (request, response) => {
  const newUser = createUser();

  response.json({
    newUser: newUser,
  });
});

app.get("/api/companies/new", (request, response) => {
  const newCompany = createCompany();
  console.log(newCompany);
  response.json({
    newCompany: newCompany,
  });
});

app.get("/api/user/company", (request, response) => {
  const newUser = createUser();
  const newCompany = createCompany();
  response.json({
    newUser: newUser,
    newCompany: newCompany,
  });
});

app.listen(8000, () => console.log("You Are Connected to port 8000"));
