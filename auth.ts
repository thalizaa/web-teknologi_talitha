import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import postgres from 'postgres';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import type { User } from '@/app/lib/definitions';

// Gunakan koneksi postgres langsung yang sesuai dengan proyek Anda
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function getUser(email: string): Promise<User | undefined> {
  try {
    // Library 'postgres' mengembalikan array data secara langsung
    const data = await sql<User[]>`SELECT * FROM users WHERE email = ${email}`;
    return data[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});