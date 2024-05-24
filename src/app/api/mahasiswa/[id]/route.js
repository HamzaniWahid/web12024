import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { id } = params;
  const mahasiswa = await prisma.mahasiswa.findUnique({
    where: { id: Number(id) },
  });
  return new Response(JSON.stringify(mahasiswa), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();
  const mahasiswa = await prisma.mahasiswa.update({
    where: { id: Number(id) },
    data,
  });
  return new Response(JSON.stringify(mahasiswa), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await prisma.mahasiswa.delete({
    where: { id: Number(id) },
  });
  return new Response(null, {
    status: 204,
  });
}
