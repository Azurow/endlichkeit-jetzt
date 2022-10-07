import { React, useEffect } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth';

export default function RouteGuard({ children }) {
    const router = useRouter();

    onAuthStateChanged(auth, (user) => {
        if (!user) {
            router.push("/login");
        }
    })

    return (
        <>
            {children}
        </>
    )
}
