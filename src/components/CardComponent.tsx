interface CardComponentProps {
    message: string;
    targetRef: React.RefObject<HTMLDivElement>;
    color: string;
    isCopied: boolean;
}

export default function CardComponent({ message, targetRef, color, isCopied }: CardComponentProps) {
    return (
        <div ref={targetRef} className="invisible opacity-0 delay-150 transition-all cursor-pointer">
            <div className={`${isCopied ? "bg-[#16a34a]" : color} w-3 h-3 rotate-45 mx-auto absolute -bottom-5 left-2/4 -translate-x-2/4`}></div>
            <div className={`${isCopied ? "bg-[#16a34a]" : color} absolute px-4 py-2 bottom-[-54px] left-2/4 -translate-x-2/4 rounded-md max-md:-translate-x-1/4`}>
                <p>{isCopied ? "Copied!" : message}</p>
            </div>
        </div>
    )
}