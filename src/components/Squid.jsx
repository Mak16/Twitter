export default function Squid(props){
    return(
        <>
        <div className="flex flex-row mt-2 mb-2">
            <div className="items-start text-white w-full flex flex-col justify-between">
                <small className="opacity-50"> {props.title} </small>
                <span className="text-sm"> #SQUID</span>
                <small className="opacity-50"> {props.subTitle} </small>
            </div>
            <img className="w-4" src="src/assets/More-2.svg" alt="More" />
        </div>
        </>
    )
}