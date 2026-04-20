import { SignIn } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"
import React from "react"
import { Toaster } from "@/components/ui/sonner"
import StreamProvider from "@/providers/StreamProviders"

const MainLayout = async ({
    children
}: {
    children: React.ReactNode
}) =>{
    const user = await currentUser()
    if(!user)
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
                routing="hash"
                    appearance={{
                        baseTheme: neobrutalism
                    }}
                />
            </div>

        </main>
    )
    return (
        <main className="animate-fade-in">
            <StreamProvider>
                {children}
                
            </StreamProvider>
            
        </main>
    )
}

export default MainLayout