import userData from "./data.js";

function transformData(data) {

    return data.map(person => {
        const firstName = person.name.first;
        const lastName = person.name.last;
        const dateOfBirth = person.dob.date;
        const formattedDateOfBirth = new Date(dateOfBirth).toDateString();
        const full = `${firstName} ${lastName}`;


        return {
            fullName: full,
            birthday: formattedDateOfBirth
        }
    })
}

console.log(transformData(userData));
