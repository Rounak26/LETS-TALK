import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"

const LoginPage = () => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-5 gap-10">

            <section className="flex flex-col items-center gap-5">
                <Image src='/assets/logo.svg' width={100} height={100} alt="Logo" />
                <h1 className="text-lg font-extrabold lg:text-2xl text-center">
                    Connect, Communicate, Collaborate in Real-Time
                </h1>
            </section>

            <div>
                <SignIn 
                    appearance={{
                        baseTheme: neobrutalism
                    }}
                />
            </div>

        </main>
    )
}

export default LoginPage 