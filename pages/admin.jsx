import {React} from 'react'
import Head from 'next/head';
import RouteGuard from "../components/RouteGuard";
import PageContainer from "../components/PageContainer";
import NewsAdminPanel from "../components/NewsAdminPanel";
import ServicesAdminPanel from '../components/ServicesAdminPanel';
import { useEffect } from 'react'

export default function admin() {
    useEffect(() =>
    {
        if(window.innerWidth > 576)
        {
            window.scrollTo({
                top: 1000,
                behavior: "smooth",
            });
        }
    }, [])
    return (
        <RouteGuard>
            <PageContainer>
                <Head>
                    <title>Admin Panel | Endlichkeit Jetzt</title>
                    <meta name="robots" content="noindex, nofollow"></meta>
                    <meta charSet="UTF-8"></meta>
                </Head>
                <NewsAdminPanel/>
                <ServicesAdminPanel/>
            </PageContainer>
        </RouteGuard>
    )
}
