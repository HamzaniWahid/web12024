import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request) {
  const user = await prisma.user.findMany();
  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const { nama, username, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data : {
	    nama, username, email,
	    password: hashedPassword
    }
  });
  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' },
  });
}
