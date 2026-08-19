import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../src/prisma/prisma.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('Database connection (e2e)', () => {
  let moduleRef: TestingModule;
  let prismaService: PrismaService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
  });

  afterAll(async () => {
    await prismaService.$disconnect();
  });

  it('connects to Postgres and runs a query', async () => {
    const result = await prismaService.$queryRaw<
      { result: number }[]
    >`SELECT 1 as result`;

    expect(result).toEqual([{ result: 1 }]);
  });
});
