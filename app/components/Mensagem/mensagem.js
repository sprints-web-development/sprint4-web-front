export default function Mensagem({ nome }) {
    return (
            <div className="mt-4 flex w-full flex-col gap-2.5 rounded-[15px] border border-brand-lime bg-brand-primary p-7.5 animate-fade-in-success">
                <p className="text-[18px] font-bold text-brand-lime">Mensagem enviada! ✅</p>
                <p className="leading-normal text-brand-light-grey">
                    Obrigado, {nome}! Recebemos sua mensagem e nossa equipe vai retornar em breve.
                </p>
            </div>
    );
}
