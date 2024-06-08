import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { id } = params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data,
  });
  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await prisma.user.delete({
    where: { id: Number(id) },
  });
  return new Response(null, {
    status: 204,
  });
}
