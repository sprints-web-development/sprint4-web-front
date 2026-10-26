import Image from "next/image"

export default function ImageBorder({ card, index }) {
    return (
        <div className={`relative flex flex-col items-center justify-center rounded-[15px] border border-brand-medium-grey bg-brand-medium-black ${index === 2 ? 'row-span-2' : ''}`}>
            <Image src={card.src} alt="card" width={350} height={150} className="h-auto max-w-[90%] max-[1199px]:mt-3.75 max-[1199px]:mb-12.5" />
            <div className="absolute bottom-0 left-0 flex w-full gap-7.5 rounded-b-[15px] bg-[linear-gradient(transparent,rgba(0,0,0,1)_35%)] p-5">
                <p className="text-[15px] text-brand-lime max-[1199px]:hidden">{index}</p>
                <div className="flex flex-col items-start justify-center">
                    <h2 className="text-sm font-bold text-brand-cream">{card.title}</h2>
                    <p className="text-[11px] font-bold text-brand-grey">{card.description}</p>
                </div>
            </div>
        </div>
    )
}
