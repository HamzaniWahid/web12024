import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//ambil data dari prisma tabel matkul
export async function GET(request) {
  const matkul = await prisma.matkul.findMany();//mencari banyak data
  return new Response(JSON.stringify(matkul), {//ubah data tabel dari string ke json
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const data = await request.json();
  const matkul = await prisma.matkul.create({
    data,
  });
  return new Response(JSON.stringify(matkul), {
    headers: { 'Content-Type': 'application/json' },
  });
}
