import React from 'react';
import PrayerBar from "../PrayerBar/PrayerBar";
import NameOfAllah from "../NameOfAllah/NameOfAllah";
import BrowsingHelper from "../BrowsingHelper/BrowsingHelper";
import HadithPanel from "../HadithPanel/HadithPanel";

function App() {
    return (
        <div className="flex flex-row">
            <div className="w-4/12"><PrayerBar /></div>
            <div className="w-4/12 flex flex-col">
                <NameOfAllah />
                <BrowsingHelper />
            </div>
            <div className="w-4/12"><HadithPanel /></div>
        </div>
    );
}

export default App;
