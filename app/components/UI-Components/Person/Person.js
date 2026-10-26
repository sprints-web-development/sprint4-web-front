export default function Person({ user }) {

    const isProfessional = user.style !== 1

    return (
        <div className={`mx-auto flex h-full w-[90%] flex-col justify-between rounded-[15px] p-7.5 ${isProfessional ? 'bg-brand-pure' : 'bg-brand-blue'}`}>
            <div className="flex items-center justify-between">
                <div className={`flex h-12.5 w-12.5 items-center justify-center rounded-full ${isProfessional ? 'bg-brand-orange' : 'bg-brand-lime'}`}>
                    <p className={isProfessional ? 'text-brand-pure' : 'text-brand-blue'}>{user.abbreviation}</p>
                </div>
                <p className={`font-bold ${isProfessional ? '' : 'text-brand-cream'}`}>{user.type}</p>
            </div>
            <div className="mt-12.5">
                <h1 className={isProfessional ? '' : 'text-brand-cream'}>{user.group}</h1>
                <p className={`my-5 font-bold ${isProfessional ? 'text-brand-blue' : 'text-brand-lime'}`}>{user.note}</p>
                <p className={isProfessional ? '' : 'text-brand-cream'}>{user.text}</p>
                <div className="my-7.5 h-px w-[90%] rounded-[5px] bg-brand-light-grey"></div>
                <ul className="mb-5 ml-5 list-disc">
                    {user.list.map((list, index) => (
                        <li key={index} className={isProfessional ? '' : 'text-brand-cream'}>{list.text}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
