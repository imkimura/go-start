import { useParams } from "react-router-dom"
import { Share2 } from 'lucide-react'

import amaLogo from '../assets/ama-logo.svg'
import { toast } from "sonner"
import { Messages } from "../components/messages"
import { Suspense } from "react"
import { CreateMessageForm } from "../components/create-message-form"

export function Room() {
    const {roomId} = useParams()

    function handleShareRoom() {
        const url = window.location.href.toString()

        if (navigator.share !== undefined && navigator.canShare()) {
            navigator.share({url})
            return;
        }

        navigator.clipboard.writeText(url)

        toast.info('The room URL was copied to your clipboard!')
    }


    return (
        <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
            <div className="flex items-center gap-3 px-3">
                <img src={amaLogo} alt="AMA" className="h-5" />

                <span className="text-sm text-zinc-500 truncate">
                    Código da sala: <span className="text-zinc-300">{roomId}</span>
                </span>

                <button 
                    type="submit"
                    onClick={handleShareRoom}
                    className="ml-auto bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500"
                >
                    Compartilhar
                    <Share2 className="size-4" />
                </button>
            </div>

            <div className="h-px w-full bg-zinc-900" />

            <CreateMessageForm />

            <Suspense fallback={<p>Carregando...</p>}>
                <Messages />
            </Suspense>
        </div>
    )
}