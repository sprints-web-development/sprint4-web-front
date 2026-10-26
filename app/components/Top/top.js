import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";

export default function Top() {
    return (
        <section id="top" className="mt-15 flex w-full items-center bg-brand-cream py-12.5 px-20 max-[1250px]:px-7.5 max-[850px]:px-7.5 max-[850px]:py-7.5 max-[500px]:px-5">
            <div className="flex h-full w-full max-[1199px]:flex-col max-[1199px]:gap-7.5 max-[991px]:items-center max-[991px]:justify-center">
                <div className="flex h-full max-w-1/2 flex-col justify-center px-7.5 max-[1199px]:w-full max-[1199px]:max-w-full max-[1199px]:px-0 max-[991px]:w-full max-[991px]:max-w-full max-[991px]:px-0">
                    <SectionTag name="Da Foto à Memória, sem perder o contexto"/>
                    <h1 className="text-start text-[80px] font-medium leading-[1.2] max-[650px]:text-[42px] max-[650px]:leading-[1.1] max-[500px]:text-[50px]">Suas anotações merecem ser</h1>
                    <h1 className="font-playfair text-brand-blue text-start text-[80px] font-medium leading-[1.2] max-[650px]:text-[42px] max-[650px]:leading-[1.1] max-[500px]:text-[50px]">reencontradas</h1>
                    <p className="text-brand-grey max-[650px]:text-[15px]">O SnapNote transforma fotos de lousas, cadernos e slides em registros organizados,
                        pesquisáveis e
                        prontos para a sua próxima revisão.
                    </p>
                    <div className="my-5 flex gap-3.75 max-[370px]:flex-col">
                        <a href="#galeria"><button className="cursor-pointer rounded-[50px] bg-brand-primary px-7.5 py-5 text-[15px] font-light text-brand-cream transition-[.3s] ease-in hover:border hover:border-brand-primary hover:bg-brand-cream hover:text-brand-primary">Conheça a solução</button></a>
                        <a href="#galeria2"><button className="cursor-pointer rounded-[15px] border border-brand-primary bg-brand-cream px-7.5 py-5 text-[15px] font-bold text-brand-primary transition-[.3s] ease-in hover:border-brand-cream hover:bg-brand-primary hover:text-brand-cream">Ver protótipo</button></a>
                    </div>
                    <div className="my-2.5 h-px w-[90%] rounded-[5px] bg-brand-light-grey"></div>
                    <div className="flex items-center justify-around p-2.5">
                        <div className="flex flex-col items-start justify-center">
                            <p className="text-xl font-bold text-brand-blue">Menos</p>
                            <p className="text-sm text-brand-grey">tempo buscando</p>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <p className="text-xl font-bold text-brand-blue">Mais</p>
                            <p className="text-sm text-brand-grey">contexto preservado</p>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <p className="text-xl font-bold text-brand-blue">Sempre</p>
                            <p className="text-sm text-brand-grey">pronto para revisar</p>
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full items-center justify-center max-[1199px]:min-h-[500px] max-[991px]:mt-5 max-[991px]:min-h-[450px] max-[650px]:mt-5 max-[650px]:min-h-[430px] max-[500px]:min-h-[380px]">
                    <Image
                        src="/images/prot.png"
                        alt="Protótipo no celular"
                        width={311}
                        height={595}
                        className="absolute z-9 max-[1199px]:relative max-[1199px]:h-auto max-[1199px]:w-[min(70%,400px)] max-[1199px]:max-w-[400px] max-[991px]:w-[min(65%,350px)] max-[991px]:max-w-[350px] max-[650px]:w-[min(72%,300px)] max-[650px]:max-w-[300px] max-[500px]:w-[min(75%,270px)] max-[500px]:max-w-[270px]"
                    />
                    <div className="absolute z-1 h-[500px] w-[500px] rounded-full bg-brand-blue max-[1199px]:h-[400px] max-[1199px]:w-[400px] max-[991px]:h-[350px] max-[991px]:w-[350px] max-[650px]:h-[300px] max-[650px]:w-[300px] max-[500px]:h-[270px] max-[500px]:w-[270px]"></div>
                    <span className="font-playfair text-brand-primary absolute top-[10%] left-[20%] z-9 rotate-[-20deg] text-xl max-[991px]:left-[10%] max-[650px]:left-[5%] max-[650px]:top-[5%] max-[650px]:text-[16px]">ideias</span>
                    <div className="absolute right-20 z-9 flex items-center justify-around gap-2.5 rounded-[15px] bg-[rgba(255,255,255,0.918)] p-3.75 shadow-[2px_2px_2px_rgba(0,0,0,.35)] max-[991px]:right-[5%] max-[650px]:right-0 max-[650px]:origin-right max-[650px]:scale-[.85] max-[650px]:p-2.5 max-[500px]:right-[-5%] max-[500px]:scale-[.7]">
                        <div className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-brand-lime">
                            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-[10px]">Nota Organizada</h3>
                            <p className="text-[10px]">Física - Cinemática</p>
                        </div>
                    </div>
                    <div className="absolute bottom-12.5 left-20 z-9 flex items-center justify-around gap-2.5 rounded-[15px] bg-[rgba(255,255,255,0.918)] p-3.75 shadow-[2px_2px_2px_rgba(0,0,0,.35)] max-[991px]:bottom-[5%] max-[991px]:left-[5%] max-[650px]:left-0 max-[650px]:origin-left max-[650px]:scale-[.85] max-[650px]:p-2.5 max-[500px]:left-[-5%] max-[500px]:scale-[.7]">
                        <div className="flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
                                    fill="#0033CC" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-[10px]">Contexto Recuperado</h3>
                            <p className="text-[10px]">"Cai na prova de sexta!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
