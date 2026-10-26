import Image from "next/image"
export default function TeamCard({ partner, index }) {
    return (
        <div className={`group overflow-hidden rounded-[15px] border border-brand-light-grey bg-brand-snow transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_#0002] max-[991px]:col-span-1 ${index === 4 ? 'col-span-2 col-start-2 max-[991px]:col-start-auto' : 'col-span-2'}`}>
            <div className="relative aspect-[1.08/1] overflow-hidden"><span className="absolute top-3 left-3 z-1 rounded-full bg-brand-primary p-1.25 text-[10px] text-brand-snow">{index}</span><Image height={350} width={350} src={`${partner.path}`}
                alt={`Foto de ${partner.nome}`} className="block h-full w-full object-cover object-center transition-transform duration-400 group-hover:scale-105" /></div>
            <div className="p-3.75">
                <h3 className="text-sm">{partner.nome}</h3>
                <p className="text-[10px] text-brand-blue">EQUIPE SNAPNOTE · {partner.rm}</p>
            </div>
        </div>
    )
}
