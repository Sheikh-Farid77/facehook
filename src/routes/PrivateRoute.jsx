import { Navigate, Outlet } from "react-router";
import useAuth from "../hook/useAuth";
import Header from "../components/common/Header";
import ProfileProvider from "../provider/ProfileProvider";
import PostProvider from "../provider/PostProvider";

export default function PrivateRoute() {
    const { auth } = useAuth();
    return (
        <>
            {
                auth.authToken ?
                    <>
                        <PostProvider>
                            <ProfileProvider>
                                <Header />
                                <main className="mx-auto max-w-[1020px] py-8">
                                    <div className="container">

                                        <Outlet />
                                    </div>
                                </main>
                            </ProfileProvider>
                        </PostProvider>
                    </> : <Navigate to='/login' />
            }
        </>
    );
}