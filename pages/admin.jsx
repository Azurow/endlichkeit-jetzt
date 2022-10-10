import {React} from 'react'
import Head from 'next/head';
import RouteGuard from "../components/RouteGuard";
import PageContainer from "../components/PageContainer";
import NewsAdminPanel from "../components/NewsAdminPanel";
import ServicesAdminPanel from '../components/ServicesAdminPanel';

export default function admin() {

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
