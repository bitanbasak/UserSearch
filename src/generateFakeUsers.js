import faker from 'faker';

const generateRandomUsers = () => {
    let usersArray = [];

    for(let i = 0; i < 100; i++) {
        let user = {
            id: faker.random.uuid(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            displayName: faker.name.firstName(),
            phone: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            dob: faker.date.past(),
            imageUrl: faker.image.avatar(),
            countryCode: faker.address.countryCode()
        };

        usersArray.push(user);
    }
    let userData = JSON.stringify(usersArray);
    return userData;
};

export default generateRandomUsers();