type Props = {
    imageSrc: string,
    name: string
}
const Badge = ({imageSrc, name}: Props) => {
    return (<span
        className="flex flex-row m-1 p-1 justify-center items-center rounded shadow-lg bg-slate-300 text-slate-900 font-medium italic">
            <img className="w-5 h-5 mr-2" alt={name} src={imageSrc} loading="lazy"/>
        {name}
    </span>);
};

export default Badge;
