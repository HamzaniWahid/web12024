import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request, { params }) {//ambil dari database berdasarkan id
  const { id } = params;
  const matkul = await prisma.matkul.findUnique({
    where: { id: Number(id) },
  });
  return new Response(JSON.stringify(matkul), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(request, { params }) {//update ke database berdasarkan id
  const { id } = params;
  const data = await request.json();
  const matkul = await prisma.matkul.update({
    where: { id: Number(id) },
    data,
  });
  return new Response(JSON.stringify(matkul), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request, { params }) {//hapus ke database berdasarkan id
  const { id } = params;
  await prisma.matkul.delete({
    where: { id: Number(id) },
  });
  return new Response(null, {
    status: 204,
  });
}
