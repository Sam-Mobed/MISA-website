
type Props = {
    value1:string;
    value2:string;
    value3:string;
    val1_text:string,
    val2_text:string,
    val3_text:string,
}

export default function Accordion({
    value1,
    value2,
    value3,
    val1_text,
    val2_text,
    val3_text
}:Props){
    return (
        
	<div className="flex flex-col" style={{width:'60vw'}}>
		<button className="group border-t border-r border-l border-black focus:outline-none">
			<div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
				<span className="truncate">{value1}</span>
				<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</div>
			<div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
				<p>
                    {val1_text}
                </p>
			</div>
		</button>
		<button className="group border-t border-r border-l  border-black focus:outline-none">
			<div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
				<span className="truncate">{value2}</span>
				<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</div>
			<div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
				<p>
                    {val2_text}
                </p>
			</div>
		</button>
		<button className="group border border-black focus:outline-none">
			<div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
				<span className="truncate">{value3}</span>
				<svg className="h-4 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</div>
			<div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
				<p>
                    {val3_text}
                </p>
			</div>
		</button>
	</div>
    );
}