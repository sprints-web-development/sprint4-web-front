'use client'

import { useState } from "react";
import SectionTag from "../SectionTag/sectionTag";

export default function Testimonial({ users = [], errors }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        if (currentIndex === users.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const previousTestimonial = () => {
        if (currentIndex === 0) {
            setCurrentIndex(users.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    if (errors?.isError) {
        return (
            <div className="flex flex-col gap-3">
                <p className="text-sm text-red-400">
                    {errors.textError}.
                </p>
            </div>
        );
    }

    if (!users.length && !errors.isError) {
        return (
            <div className="flex flex-col gap-3">
                <p className="text-sm text-brand-snow">
                    Carregando depoimentos...
                </p>
            </div>
        );
    }

    const user = users[currentIndex];

    return (
        <div className="flex w-full flex-col justify-center gap-7 z-0">
            <div>
                <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-brand-yellow">
                    <span className="h-0.5 w-7 bg-brand-yellow"></span>
                    Quem usa, recomenda
                </p>

                <h2 className="max-w-xl text-3xl font-bold leading-tight text-brand-snow md:text-4xl">
                    Pequenas mudanças,
                    <span className="font-playfair text-brand-yellow"> grandes descobertas.</span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-brand-light-grey md:text-base">
                    Descubra como o SnapNote pode transformar a maneira de
                    organizar suas fotos e tornar sua rotina de estudos mais prática.
                </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-medium-black p-6 shadow-2xl md:p-8">

                <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <span className="text-5xl leading-none text-brand-yellow">
                            “
                        </span>

                        <div className="flex gap-1">
                            <span className="text-lg text-brand-yellow" >★★★★★</span>
                        </div>
                    </div>

                    <p className="min-h-32 text-base leading-8 text-brand-snow md:text-lg">
                        {user.userOpinion ? user.userOpinion : "Este usuário ainda não adicionou um depoimento."}
                    </p>


                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brand-yellow">
                            {user.avatar ? (
                                <img
                                    src={user.avatar}
                                    alt={`Foto de perfil de ${user.name}`}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-brand-yellow text-xl font-bold text-brand-primary">
                                    {user.name}
                                </div>
                            )}
                        </div>

                        <div className="min-w-0 flex-1">
                            <h3 className="truncate text-base font-bold text-brand-snow">
                                {user.name}
                            </h3>

                            <p className="mt-1 text-xs text-brand-light-grey">
                                Comunidade SnapNote
                            </p>
                        </div>

                        <div className="hidden rounded-full border border-brand-yellow/30 px-3 py-2 sm:block">
                            <span className="text-xs font-semibold text-brand-yellow">
                                Depoimento
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-brand-light-grey">
                    <span className="font-bold text-brand-yellow">
                        {String(currentIndex + 1).padStart(2, "0")}
                    </span> / {String(users.length).padStart(2, "0")}
                </p>

                <div className="flex items-center gap-3">
                    <div className="mr-2 flex items-center gap-1.5">
                        {users.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-400 ${currentIndex === index
                                    ? "w-5 bg-brand-yellow"
                                    : "w-2 bg-white/25 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={previousTestimonial}
                        className="flex cursor-pointer h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-brand-snow transition hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-brand-yellow"
                    >
                        {'<'}
                    </button>

                    <button
                        type="button"
                        onClick={nextTestimonial}
                        className="flex cursor-pointer h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-xl text-brand-primary transition hover:bg-brand-lime focus-visible:outline-2 focus-visible:outline-brand-snow"
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
}