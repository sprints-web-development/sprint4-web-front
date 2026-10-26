export default function SectionTag({ name, color }) {
    return (
        <p className="mb-3.75 text-sm tracking-[2px]">
            <span className="mr-2 inline-block h-0.5 w-5 bg-brand-primary" style={{background: color}}></span>{name}
        </p>
    );
}