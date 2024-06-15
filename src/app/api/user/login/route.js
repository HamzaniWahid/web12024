import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(request) {
    const { username, password } = await request.json();
    const dataUser = await prisma.user.findUnique({
        where: { username },
    });

    if (!dataUser) {
        return new Response(JSON.stringify({ error: 'User dan password tidak valid' }), {
            headers: { 'Content-Type': 'application/json', status: 401 },
        });
    }

    const isPasswordValid = await bcrypt.compare(password, dataUser.password);

    if (!isPasswordValid) {
        return new Response(JSON.stringify({ error: 'User dan password tidak valid' }), {
            headers: { 'Content-Type': 'application/json', status: 401 },
        });
    }


    return new Response(JSON.stringify({ id: dataUser.id, email: dataUser.email }), {
        headers: { 'Content-Type': 'application/json' },
    });
}

