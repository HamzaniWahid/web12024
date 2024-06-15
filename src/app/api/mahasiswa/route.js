import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request) {
  const mahasiswa = await prisma.mahasiswa.findMany();
  return new Response(JSON.stringify(mahasiswa), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const data = await request.json();
  const mahasiswa = await prisma.mahasiswa.create({
    data,
  });
  return new Response(JSON.stringify(mahasiswa), {
    headers: { 'Content-Type': 'application/json' },
  });
}
