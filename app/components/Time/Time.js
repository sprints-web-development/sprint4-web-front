'use client'

import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";
import TeamCard from "../UI-Components/TeamCard/TeamCard";
export default function Time({ time }) {

    return (
        <section id="equipe" className="block w-full bg-brand-cream px-20 py-20 max-[1250px]:px-7.5 max-[850px]:px-7.5 max-[500px]:px-5">
            <div className="mb-7.5 grid grid-cols-[1fr_350px] items-end gap-7.5 max-[991px]:grid-cols-1">
                <div>
                    <SectionTag name="Nossa Equipe" />
                    <h2 className="text-[clamp(42px,5vw,65px)] font-medium leading-[1.05]">Quem dá vida<br /><span className="font-playfair text-brand-lime">ao SnapNote.</span></h2>
                </div>
            </div>

            <div className="grid grid-cols-6 gap-5 max-[991px]:grid-cols-2">

                {time && time.length > 0 ?
                    time.map((partner, index) => (
                        <TeamCard partner={partner} index={index + 1} key={partner.rm} />
                    ))
                    : null
                }
            </div>
        </section>


    );
}
