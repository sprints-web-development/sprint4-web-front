export default function SectionTag({ name, color }) {
    return (
        <p className={`mb-3.75 text-sm tracking-[2px] text-${color}-500`}>
            <span className={`mr-2 inline-block h-0.5 w-5 bg-brand-primary text-${color}-500`}></span>{name}
        </p>
    );
}