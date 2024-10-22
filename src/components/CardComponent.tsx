interface CardComponentProps {
    message: string;
    targetRef: React.RefObject<HTMLDivElement>;
    color: string;
}

export default function CardComponent({ message, targetRef, color }: CardComponentProps) {
    return (
        <div ref={targetRef} className="invisible opacity-0 delay-150 transition-all">
            <div className={`${color} w-3 h-3 rotate-45 mx-auto absolute -bottom-5 left-2/4 -translate-x-2/4`}></div>
            <div className={`${color} absolute px-4 py-2 bottom-[-54px] left-2/4 -translate-x-2/4 rounded-md max-md:-translate-x-1/4`}>
                <p>{message}</p>
            </div>
        </div>
    )
}