import {React} from 'react'
import RouteGuard from "../components/RouteGuard";
import PageContainer from "../components/PageContainer";
import NewsAdminPanel from "../components/NewsAdminPanel";
import ServicesAdminPanel from '../components/ServicesAdminPanel';

export default function admin() {

    return (
        <RouteGuard>
            <PageContainer>
                <NewsAdminPanel/>
                <ServicesAdminPanel/>
            </PageContainer>
        </RouteGuard>
    )
}
