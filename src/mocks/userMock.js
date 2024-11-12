import faker from '@faker-js/faker';
import bcrypt from 'bcryptjs';

export const generateMockUsers = async (num) => {
    const users = [];
    const password = await bcrypt.hash("coder123", 10);

    for (let i = 0; i < num; i++) {
        users.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password,
        role: Math.random() > 0.5 ? "admin" : "user",
        pets: [],
        });
    }

    return users;
};
