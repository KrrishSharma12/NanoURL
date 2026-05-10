export const cookieOptions={
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 30 * 60 * 1000, 
            sameSite: 'lax'
        }