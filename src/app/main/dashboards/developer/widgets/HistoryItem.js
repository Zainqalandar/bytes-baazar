import {memo} from 'react';

function HistoryItem() {
    return (
        <div className="relative p-6 text-white flex flex-col gap-10 w-full rounded background-color ">
            <img className="absolute h-full top-0 right-0" src="assets/images/ks/circle.svg"/>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <h4 className="text-lg">XXX XXX</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                         className="bi bi-bookmark" viewBox="0 0 16 16">
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                </div>
                <h5 className="text-2xl font-medium">
                    $ XXXXX
                </h5>
            </div>
            <div>
                Increased bt X%
            </div>
        </div>
    );
}

export default memo(HistoryItem);
