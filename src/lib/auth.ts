import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');

export interface AuthPayload {
  email: string;
  role: string;
}

export async function verifyAuth(): Promise<AuthPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('adminToken')?.value;

    if (!token) {
      return null;
    }

    const verified = await jwtVerify(token, secret);
    return verified.payload as unknown as AuthPayload;
  } catch (error) {
    return null;
  }
}

export async function createToken(payload: AuthPayload): Promise<string> {
  const token = await new (require('jose').SignJWT)(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret);
  return token;
}
