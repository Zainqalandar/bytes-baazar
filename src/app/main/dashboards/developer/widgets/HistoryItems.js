import {memo} from 'react';
import HistoryItem from "./HistoryItem";
import CheckinItem from "./CheckinItem";

function HistoryItems() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 gap-8">
           <CheckinItem />
           <HistoryItem />
           <HistoryItem />
        </div>
    );
}

export default memo(HistoryItems);
