export default function Mensagem({ nome, protocolo }) {
    return (
            <div className="mt-4 flex w-full flex-col gap-2.5 rounded-[15px] border border-brand-lime bg-brand-primary p-7.5 animate-fade-in-success">
                <p className="text-[18px] font-bold text-brand-lime">Mensagem enviada! ✅</p>
                <p className="leading-normal text-brand-light-grey">
                    Obrigado, {nome}! Recebemos sua mensagem e nossa equipe vai retornar em breve.
                </p>
                <p className="mt-1.25 self-start rounded-[30px] border border-brand-grey bg-brand-medium-black px-3.75 py-2 text-sm text-brand-snow">
                    Protocolo: <strong className="text-brand-lime">#{protocolo} (Anote para futuro contato)</strong>
                </p>
            </div>
    );
}
