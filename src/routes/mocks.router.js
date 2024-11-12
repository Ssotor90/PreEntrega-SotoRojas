import express from 'express';
import User from '../models/user.model.js';
import Pet from '../models/pet.model.js';
import { generateMockUsers } from '../mocks/userMock.js';

const router = express.Router();

router.get('/mockingusers', async (req, res) => {
    try {
        const users = await generateMockUsers(50);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error generating users" });
    }
    });

    router.post('/generateData', async (req, res) => {
    const { users, pets } = req.body;

    try {
        const userMocks = await generateMockUsers(users);
        const savedUsers = await User.insertMany(userMocks);

        const petMocks = [];
        for (let i = 0; i < pets; i++) {
        const randomUser = savedUsers[Math.floor(Math.random() * savedUsers.length)];
        petMocks.push({
            name: faker.animal.cat(),
            type: faker.animal.type(),
            ownerId: randomUser._id,
        });
        }
        await Pet.insertMany(petMocks);

        res.status(201).json({ message: "Users and pets created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error generating data" });
    }
});

export default router;
